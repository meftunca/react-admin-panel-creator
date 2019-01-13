import React, { Component, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/styles";
import { Form, Scope, asField } from "informed";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import InputAdornment from "@material-ui/core/InputAdornment";
import JSONPretty from "react-json-pretty";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import CollapseFormList from "./component/collapse";
import List from "@material-ui/core/List";
import axios from "axios";
const uniqid = require("uniqid");
class FormCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appendInput: [""],
      formData: {}
    };
    this.handleClick = this.handleClick.bind(this);
    this.setFormApi = this.setFormApi.bind(this);
  }
  handleClick() {
    let { values } = this.formApi.getState();
    let column = [];
    values["formItem"] = Object.values(values.formItem)[0];
    values.formItem.map(i => {
      column.push({ name: i.name, label: i.label });
    });
    values["tableItem"] = column;
    this.setState({ formData: values });
    this.post(values);
  }
  setFormApi(formApi) {
    this.formApi = formApi;
  }
  componentDidMount() {
    // window.axios.post(window.location.origin+":8000/get-form-json").then(({ data }) => this.setFormApi(data));
  }

  post = data => {
    axios.post("/create-form", data).then(d => console.log(d));
  };
  view = () => console.log("view");
  send = () => this.handleClick();
  add = () => this.setState({ appendInput: this.state.appendInput.concat("") });
  render() {
    const { classes, theme, name } = this.props;
    return (
      <Paper className={classes.paper} elevation={1}>
        <Grid container spacing={24}>
          <Grid item md={12}>
            <Typography component='h5' variant='h4'>
              Form Creator
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Form id={"form-" + name} getApi={this.setFormApi}>
              <Grid container spacing={24}>
                {FormItemList.map((i, k) => (
                  <ItemCreator appendSize={this.state.appendInput} classes={classes} {...i} key={k} />
                ))}
              </Grid>
            </Form>
          </Grid>
          <Grid item md={12}>
            <FormManagement classes={classes} view={this.view} send={this.send} add={this.add} />
          </Grid>
          <Grid item md={12}>
            <JSONPretty
              style={{ padding: 12 }}
              id='json-pretty'
              data={this.state.formData}
              theme={require("react-json-pretty/dist/monikai")}
              space={2}
            />
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

const ItemCreator = asField(({ fieldState, fieldApi, ...props }) => {
  const { value } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const {
    onChange,
    onBlur,
    appendSize,
    initialValue,
    classes,
    FormItem,
    label,
    icon,
    breakpoint,
    validate,
    field,
    forwardedRef,
    scope,
    list,
    type,
    selectData,
    ...rest
  } = props;
  let id = uniqid;
  return (
    <Grid item {...breakpoint}>
      {scope == undefined ? (
        <React.Fragment>
          {type == "select" ? (
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel>{label}</InputLabel>
              <Select
                autoWidth={true}
                value={value}
                id={label.replace(" ", "_")}
                label={label}
                inputRef={forwardedRef}
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
                input={<Input fullWidth name={field} id={id} />}>
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                {selectData.map((i, k) => (
                  <MenuItem value={i} key={k}>
                    {i}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : type == "control" ? (
            <FormControlLabel
              control={
                <Checkbox
                  id={label.replace(" ", "_")}
                  inputRef={forwardedRef}
                  value={"false"}
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
                />
              }
              label={label}
            />
          ) : (
            <FormItem
              id={label.replace(" ", "_")}
              label={label}
              inputRef={forwardedRef}
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
              className={classes.textField}
              fullWidth
              InputProps={
                icon != ""
                  ? {
                      startAdornment: (
                        <InputAdornment position='start'>
                          <i className='material-icons'>{icon}</i>
                        </InputAdornment>
                      )
                    }
                  : false
              }
            />
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          {scope.type == "scope" ? (
            <Grid container spacing={16} style={{ width: "90%", margin: "0 5%" }}>
              <Grid item md={12}>
                <Typography variant='body2' gutterBottom>
                  {scope.title}
                </Typography>
                {scope.description != "" && (
                  <Typography variant='body2' gutterBottom>
                    {scope.description}
                  </Typography>
                )}
              </Grid>
              <Scope scope={field}>
                {list.map((i, k) => (
                  <ItemCreator classes={classes} {...i} key={k} />
                ))}
              </Scope>
            </Grid>
          ) : (
            <React.Fragment>
              <Scope scope={field}>
                <Grid container>
                  <Typography variant='body2' gutterBottom>
                    {scope.title}
                  </Typography>
                  {scope.description != "" && <Typography variant='body2'>{scope.description}</Typography>}
                </Grid>
                <List component='nav' className={classes.root}>
                  {appendSize.map((i, k) => (
                    <CollapseFormList title={k + 1 + ". input alanı"} open={appendSize.length == 1 + k} key={k}>
                      <Scope scope={field + "[" + k + "]"}>
                        {list.map((i, k) => (
                          <ItemCreator field={i.field + "[" + k + "]"} classes={classes} {...i} key={k} />
                        ))}
                      </Scope>
                    </CollapseFormList>
                  ))}
                </List>
              </Scope>
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </Grid>
  );
});
const mongoType = ["String", "Number", "Date", "Buffer", "Boolean", "Mixed", "ObjectId", "Array", "Decimal128", "Map"];
const FormItemList = [
  {
    field: "name",
    validate: "",
    FormItem: TextField,
    label: "Formun ismi",
    icon: "face",
    breakpoint: { xs: 12, md: 6 }
  },
  {
    field: "title",
    validate: "",
    FormItem: TextField,
    label: "Formun Başlığı",
    icon: "title",
    breakpoint: { xs: 12, md: 6 }
  },
  {
    field: "post_url",
    validate: "",
    FormItem: TextField,
    label: "Gönderileceği url",
    icon: "insert_link",
    breakpoint: { xs: 12, md: 6 }
  },
  {
    field: "get_url",
    validate: "",
    FormItem: TextField,
    label: "Tablo verilerinin alınacağı url",
    icon: "insert_link",
    breakpoint: { xs: 12, md: 6 }
  },
  {
    scope: {
      title: "Başlık Ayarları",
      type: "scope",
      append: false,
      description: ""
    },
    field: "header",
    breakpoint: { xs: 12, md: 12 },
    list: [
      {
        field: "label",
        validate: "",
        FormItem: TextField,
        label: "Başlık etiketi",
        icon: "label",
        breakpoint: { xs: 12, md: 6 }
      },
      {
        field: "icon",
        validate: "",
        FormItem: TextField,
        label: "Başlık simgesi",
        icon: "change_history",
        breakpoint: { xs: 12, md: 6 }
      }
    ]
  },
  {
    scope: {
      title: "Rota Ayarları",
      type: "scope",
      append: false,
      description: ""
    },
    field: "route",
    breakpoint: { xs: 12, md: 12 },
    list: [
      {
        field: "path",
        validate: "",
        FormItem: TextField,
        label: "Rotayı buraya yazın",
        icon: "router",
        breakpoint: { xs: 12, md: 6 }
      },
      {
        field: "exact",
        validate: "",
        FormItem: Checkbox,
        label: "Exact durumu",
        icon: "warning",
        breakpoint: { xs: 12, md: 6 },
        type: "control"
      }
    ]
  },
  {
    scope: {
      title: "Form input oluşturma",
      type: "array",
      append: false,
      description:
        "Bu alanda hazır form,veri tablosu ve mongoDB collection oluşturmak için hazır yapıları kullanarak yeni alanlar oluşturabilirsiniz."
    },
    field: "formItem",
    breakpoint: { xs: 12, md: 12 },
    list: [
      {
        field: "name",
        validate: "",
        FormItem: TextField,
        label: "İnput ismi",
        icon: "title",
        breakpoint: { xs: 12, md: 6 }
      },
      {
        field: "icon",
        validate: "",
        FormItem: TextField,
        label: "İnput simgesi",
        icon: "change_history",
        breakpoint: { xs: 12, md: 6 }
      },
      {
        field: "label",
        validate: "",
        FormItem: TextField,
        label: "İnput etiketi",
        icon: "label",
        breakpoint: { xs: 12, md: 6 }
      },
      {
        field: "type",
        validate: "",
        FormItem: TextField,
        label: "İnput tipi",
        icon: "merge_type",
        breakpoint: { xs: 12, md: 6 }
      },
      {
        field: "regex",
        validate: "",
        FormItem: TextField,
        label: "İnput regex(beta)",
        icon: "format_shapes",
        breakpoint: { xs: 12, md: 6 }
      },
      {
        field: "required",
        validate: "",
        FormItem: Checkbox,
        label: "Zorunluluk durumu",
        icon: "warning",
        breakpoint: { xs: 12, md: 6 },
        type: "control"
      },
      {
        field: "mongoType",
        validate: "",
        FormItem: TextField,
        label: "Mongo db sütun tipi",
        icon: "db",
        breakpoint: { xs: 12, md: 12 },
        type: "select",
        selectData: mongoType
      }
    ]
  }
];
const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  paper: {
    padding: 16
  },
  management: {
    backgroundColor: "#f3f3f3"
  },
  textField: {
    marginLeft: 8,
    marginRight: 8
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

class FormManagement extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, view, send, add } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} showLabels className={classes.management}>
        <BottomNavigationAction onClick={send} label='Gönder ve yükle' icon={<i className='material-icons'>send</i>} />
        <BottomNavigationAction onClick={view} label='Göster' icon={<i className='material-icons'>rate_review</i>} />
        <BottomNavigationAction onClick={add} label='Yeni Satır Ekle' icon={<i className='material-icons'>add</i>} />
      </BottomNavigation>
    );
  }
}
export default withStyles(styles, { withTheme: true })(FormCreator);
