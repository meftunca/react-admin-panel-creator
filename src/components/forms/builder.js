import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
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
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  fullWidth: {
    flex: 1,
    width: "100%",
    marginBottom: theme.spacing.unit * 2
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
    console.log(values);
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
    console.log(values, url);
    let postData = { tableName: this.props.name, data: values };
    await axios.post(window.location.origin + ":5000/" + url.replace("/", ""), postData).then(({ data }) => {
      console.log(data.data);
      setTimeout(() => this.toastRunner(data.data.status, data.data.message), 2000);
    });
  };
  render() {
    console.log(this.props);
    const { classes, header, formItem, name, postUrl, post_url, title, store } = this.props;
    const { label, icon } = header;
    return (
      <Paper className={classes.root} elevation={1}>
        <ToastContainer />
        <Typography variant='h5' component='h4'>
          {icon != "" && <Icon name={icon} />}
          {title.toLocaleUpperCase()}
        </Typography>
        <Form id={"form-" + name} getApi={this.setFormApi}>
          {formItem.map((i, k) => (
            <div className={classes.fullWidth} key={k}>
              <FormCreator
                field={i.name}
                id={name + "-" + i.name}
                item={i}
                store={store}
                validate={validate[i.validate]}
                validateOnChange
                validateOnBlur
              />
            </div>
          ))}
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
  const { onChange, onBlur, initialValue, forwardedRef, store, item, ...rest } = props; //input verileri itemdan gelecek
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
      <Datepicker onChange={setValue} error={error} defaultValue={value} {...item} ref={forwardedRef} store={store} />
    );
  } else if (item.type == "time") {
    return (
      <Timepicker onChange={setValue} error={error} defaultValue={value} {...item} ref={forwardedRef} store={store} />
    );
  } else if (item.type == "radio") {
    return (
      <RadioButtons onChange={setValue} error={error} defaultValue={value} {...item} ref={forwardedRef} store={store} />
    );
  } else if (item.type == "checkbox") {
    return (
      <Checkboxes onChange={setValue} error={error} defaultValue={value} {...item} ref={forwardedRef} store={store} />
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
