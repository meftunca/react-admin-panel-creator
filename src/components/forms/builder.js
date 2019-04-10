import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography, Button } from "@material-ui/core";

import classNames from "classnames";
import { Form, asField } from "informed";
import { TextInput, PasswordInput } from "./text";
import Datepicker from "./date";
import Timepicker from "./time";
import Editor from "./editor";
import { ToastContainer, toast } from "react-toastify";
import RadioButtons from "./radio";
import Checkboxes from "./checkbox";
import Switches from "./switch";
import validate from "../../utils/validate";
import axios from "axios";

const styles = theme => ({
   button: {
      margin: theme.spacing.unit
   },
   leftIcon: {
      marginRight: theme.spacing.unit
   },
   rightIcon: {
      marginLeft: theme.spacing.unit
   },
   root: {
      width: "100%",
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2
   },
   fullWidth: {
      flex: 1,
      width: "100%",
      marginBottom: theme.spacing.unit * 2
   },
   maginVertical: {
      marginTop: 15,
      marginBottom: 15
   }
});
const toastConfig = {
   position: "top-right",
   autoClose: 1000,
   hideProgressBar: false,
   closeOnClick: true,
   pauseOnHover: true,
   draggable: true
};
const location = process.env.NODE_ENV === "development" ? window.location.origin + ":3001" : "";

@inject("store")
@observer
class FormBuilder extends Component {
   constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.setFormApi = this.setFormApi.bind(this);
      this.postForm = this.postForm.bind(this);
   }

   handleClick() {
      let { values } = this.formApi.getState();
   }
   setFormApi(formApi) {
      this.formApi = formApi;
   }
   toastRunner = async (status, message) => {
      if (status != "") {
         if (status == "error") await toast.error(message, toastConfig);
         else if (status == "success") await toast.success(message, toastConfig);
         else if (status == "info") await toast.info(message, toastConfig);
         else if (status == "warning") await toast.warning(message, toastConfig);
      } else {
         await toast(message, toastConfig);
      }
   };
   postForm = async url => {
      this.toastRunner("info", "Veriler Gönderiliyor...");
      let { values } = this.formApi.getState();
      values["id"] = JSON.parse(localStorage.getItem("data"))._id;
      let postData = { tableName: this.props.name, data: values };
      await axios.post(location + "/" + url.replace("/", ""), postData).then(({ data }) => {
         setTimeout(() => this.toastRunner(data.data.status, data.data.message), 1000);
         if (this.props.noTitle != undefined) window.location.reload();
      });
   };
   render() {
      const { classes, elevation, data } = this.props;
      const { header, formItem, name, postUrl, post_url, title, store, noTitle = false } = data;
      const { label, icon } = header;
      return (
         <Grid container direction='row' justify='center'>
            <Grid item xl={10} md={12}>
               <Paper className={classes.root} elevation={elevation || noTitle ? 0 : 1}>
                  <ToastContainer />
                  {noTitle != true && (
                     <Typography variant='h5' component='h4'>
                        {icon != "" && <Icon name={icon} style={{ marginRight: 15 }} />}
                        <small>{title.toLocaleUpperCase()}</small>
                     </Typography>
                  )}
                  <Form id={"form-" + name} getApi={this.setFormApi}>
                     <div className={classes.fullWidth}>
                        <Grid container spacing={8}>
                           {formItem.map((i, k) => (
                              <Grid
                                 item
                                 {...Object.assign({ md: 12 }, i.breakPoint)}
                                 key={k}
                                 className={classes.maginVertical}>
                                 <FormCreator
                                    field={i.name}
                                    id={name + "-" + i.name}
                                    item={i}
                                    store={store}
                                    validate={validate[i.validate]}
                                    // validateOnChange
                                    validateOnBlur
                                 />
                              </Grid>
                           ))}
                        </Grid>
                     </div>
                     <Button
                        variant='contained'
                        size='small'
                        className={classes.button}
                        fullWidth={true}
                        color='primary'
                        onClick={() => this.postForm(postUrl || post_url)}>
                        <span className={classNames(classes.leftIcon)}>
                           <Icon name='save' />
                        </span>
                        Kaydet
                     </Button>
                  </Form>
                  {/*  <button onClick={this.handleClick}>Print Form State</button>  */}
               </Paper>
            </Grid>
         </Grid>
      );
   }
}
// editor => onChange, defaultValue // text => {onChange, defaultValue, label, icon, type
// password => onChange, defaultValue, label, icon, type
// propslar
const Icon = ({ name }) => <i className='material-icons'>{name}</i>;
const FormCreator = asField(({ fieldState, fieldApi, ...props }) => {
   const { value, error } = fieldState;
   const { setValue, setTouched } = fieldApi;
   const { onChange, onBlur, initialValue, forwardedRef = React.forwardRef(), store, item, ...rest } = props; //input verileri itemdan gelecek
   if (item.type == "text" || item.type == "") {
      return (
         <TextInput
            onChange={setValue}
            defaultValue={value}
            label={item.label}
            icon={item.icon}
            type={item.type}
            ref={forwardedRef}
            store={store}
            error={error}
         />
      );
   } else if (item.type == "password") {
      return (
         <PasswordInput
            onChange={setValue}
            defaultValue={value}
            label={item.label}
            icon={item.icon}
            type={item.type}
            ref={forwardedRef}
            store={store}
            error={error}
         />
      );
   } else if (item.type == "editor") {
      return <Editor onChange={setValue} error={error} defaultValue={value} ref={forwardedRef} store={store} />;
   } else if (item.type == "date") {
      return (
         <Datepicker
            onChange={setValue}
            error={error}
            defaultValue={value}
            {...item}
            ref={forwardedRef}
            store={store}
         />
      );
   } else if (item.type == "time") {
      return (
         <Timepicker
            onChange={setValue}
            error={error}
            defaultValue={value}
            {...item}
            ref={forwardedRef}
            store={store}
         />
      );
   } else if (item.type == "radio") {
      return (
         <RadioButtons
            onChange={setValue}
            error={error}
            defaultValue={value}
            {...item}
            ref={forwardedRef}
            store={store}
         />
      );
   } else if (item.type == "checkbox") {
      return (
         <Checkboxes
            onChange={setValue}
            error={error}
            defaultValue={value}
            {...item}
            ref={forwardedRef}
            store={store}
         />
      );
   } else if (item.type == "switch") {
      return (
         <Switches onChange={setValue} error={error} defaultValue={value} {...item} ref={forwardedRef} store={store} />
      );
   }
   return (
      <input
         {...rest}
         ref={forwardedRef}
         type={item.type}
         value={!value && value !== 0 ? "" : value}
         onChange={e => {
            setValue(e.target.value);
            if (onChange) {
               onChange(e);
            }
         }}
         onBlur={e => {
            setTouched();
            if (onBlur) {
               onBlur(e);
            }
         }}
         style={fieldState.error ? { border: "solid 1px red" } : null}
      />
   );
});
FormBuilder.propTypes = {
   classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FormBuilder);
