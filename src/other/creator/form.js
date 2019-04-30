import React, { Component, useState } from "react"
import TextField from "@material-ui/core/TextField"
import {
    Grid,
    Typography,
    BottomNavigation,
    BottomNavigationAction,
    InputAdornment,
    Checkbox,
    Paper,
    FormControlLabel,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Input,
    Dialog,
    DialogContent,
    Button,
    DialogActions,
    List
} from "@material-ui/core"
import { withStyles } from "@material-ui/styles"
import { Form, Scope, asField } from "informed"
import CollapseFormList from "./component/collapse"
import axios from "axios"
import FormBuilder from "./../../components/forms/builder"
const uniqid = require("uniqid")
const location = process.env.NODE_ENV === "development" ? window.location.origin + ":3001" : ""

class FormCreator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            appendInput: [""],
            dialogVisible: false,
            formData: {
                name: "example_members",
                title: "Members",
                header: {
                    label: "Members Collections",
                    icon: "person"
                },
                route: {
                    path: "/member_collections",
                    exact: true
                },
                formItem: [
                    {
                        name: "nick_name",
                        icon: "face",
                        label: "Nick Name",
                        type: "text",
                        mongoType: "String"
                    },
                    {
                        name: "firstName",
                        icon: "face",
                        label: "First Name",
                        type: "text",
                        mongoType: "String"
                    },
                    {
                        name: "lastName",
                        icon: "face",
                        label: "last Name",
                        type: "text",
                        mongoType: "String"
                    },
                    {
                        name: "email",
                        icon: "email",
                        label: "Email",
                        type: "email",
                        mongoType: "String"
                    },
                    {
                        name: "password",
                        icon: "lock",
                        label: "Password",
                        type: "password",
                        mongoType: "String"
                    }
                ],
                tableItem: [{}]
            }
        }
    }
    dialogToggle = () => {
        this.setState({ dialogVisible: !this.state.dialogVisible })
    }
    handleClick = () => {
        let { values } = this.formApi.getState()
        let column = []
        if (values["formItem"] == undefined || values["formItem"].length == 0) return alert("Lütfen input oluşturun")
        values["formItem"] = Object.values(values.formItem)
        values.formItem.map((i) => {
            column.push({ name: i.name, label: i.label })
        })
        values["tableItem"] = column
        this.setState({ formData: values })
        this.post(values)
    }
    setFormApi = (formApi) => {
        this.formApi = formApi
    }
    componentDidMount() {
        // window.axios.post(window.location.origin+":8000/get-form-json").then(({ data }) => this.setFormApi(data));
    }

    post = (data) => {
        axios.post("/create-form", data).then((d) => console.log(d))
        // axios.post(location + "/create-form", data).then(d => console.log(d));
    }
    view = () => console.log("view")
    send = () => this.handleClick()
    add = () => this.setState({ appendInput: this.state.appendInput.concat("") })
    remove = (i) => this.setState({ appendInput: this.state.appendInput.filter((k) => k != i) })
    render() {
        const { classes, name } = this.props
        // console.log("this.formApi :", this.formApi.getValue());
        return (
            <Grid container justify='center'>
                <Grid item xl={8} md={10} xs={12}>
                    <Paper className={classes.paper} elevation={1}>
                        <Grid container spacing={3}>
                            <Grid item md={12}>
                                <Typography variant='h6'>Form Creator</Typography>
                            </Grid>
                            <Grid item md={12}>
                                <Form id={"form-" + name} getApi={this.setFormApi} initialValues={this.state.formData}>
                                    <Grid container spacing={3}>
                                        {FormItemList.map((i, k) => (
                                            <ItemCreator
                                                appendSize={this.state.appendInput}
                                                classes={classes}
                                                {...i}
                                                key={k}
                                                indexed={k}
                                                remove={this.remove}
                                            />
                                        ))}
                                    </Grid>
                                </Form>
                            </Grid>
                            <Grid item md={12}>
                                <FormManagement classes={classes} view={this.dialogToggle} send={this.send} add={this.add} />
                            </Grid>
                        </Grid>
                        <PreviewDialog open={this.state.dialogVisible} toggle={this.dialogToggle} data={this.state.formData} />
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}
const PreviewDialog = ({ open, toggle, data }) => (
    <Dialog fullWidth={true} open={open} onClose={toggle} aria-labelledby='form-preview-dialog'>
        <DialogContent>
            <br />
            <br />
            <FormBuilder data={data} match={{ params: {} }} elevation={0} disabled={true} />
        </DialogContent>
        <DialogActions>
            <Button onClick={toggle} color='primary'>
                Kapat
            </Button>
            {/* <Button onClick={handleClose} color='primary'>
            Subscribe
         </Button> */}
        </DialogActions>
    </Dialog>
)
const ItemCreator = asField(({ fieldState, fieldApi, indexed, ...props }) => {
    const { value } = fieldState
    const { setValue, setTouched } = fieldApi
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
        remove,
        ...rest
    } = props
    let id = uniqid
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
                                {...rest}
                                onChange={(e) => {
                                    setValue(e.target.value)
                                    if (onChange) {
                                        onChange(e)
                                    }
                                }}
                                onBlur={(e) => {
                                    setTouched()
                                    if (onBlur) {
                                        onBlur(e)
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
                                    onChange={(e) => {
                                        setValue(e.target.value)
                                        if (onChange) {
                                            onChange(e)
                                        }
                                    }}
                                    onBlur={(e) => {
                                        setTouched()
                                        if (onBlur) {
                                            onBlur(e)
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
                            {...rest}
                            onChange={(e) => {
                                setValue(e.target.value)
                                if (onChange) {
                                    onChange(e)
                                }
                            }}
                            onBlur={(e) => {
                                setTouched()
                                if (onBlur) {
                                    onBlur(e)
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
                        <Grid container spacing={3} style={{ width: "90%", margin: "0 5%" }}>
                            <Grid item md={12}>
                                <Typography variant='body1' gutterBottom>
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
                            <Grid container direction='column' spacing={3}>
                                <Typography variant='subtitle1' gutterBottom>
                                    {scope.title}
                                </Typography>
                                {scope.description != "" && <Typography variant='body2'>{scope.description}</Typography>}
                            </Grid>
                            <List component='nav' className={classes.root}>
                                {appendSize.map((i, k) => (
                                    <CollapseFormList title={k + 1 + ". input alanı"} open={appendSize.length == 1 + k} remove={() => remove(k)} key={k}>
                                        <Scope scope={"formItem[" + k + "]"}>
                                            {list.map((i, k) => (
                                                <ItemCreator field={i.field} classes={classes} {...i} key={k} />
                                            ))}
                                        </Scope>
                                    </CollapseFormList>
                                ))}
                            </List>
                        </React.Fragment>
                    )}
                </React.Fragment>
            )}
        </Grid>
    )
})
const mongoType = ["String", "Number", "Date", "Buffer", "Boolean", "Mixed", "ObjectId", "Array", "Decimal128", "Map"]
const inputType = ["text", "password", "editor", "date", "time", "radio", "checkbox", "switch", "file"]
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
                label: "Rota",
                helperText: "(" + window.location.origin + "/forms/form-adi) gibi",
                icon: "router",
                breakpoint: { xs: 12, md: 6 }
            }
        ]
    },
    {
        scope: {
            title: "Form input oluşturma",
            type: "array",
            append: false,
            description: "Bu alanda hazır form, veri tablosu ve mongoDB collection oluşturmak için hazır yapıları kullanarak yeni alanlar oluşturabilirsiniz."
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
                breakpoint: { xs: 12, md: 6 },
                type: "select",
                selectData: inputType
            },
            {
                field: "regex",
                validate: "",
                FormItem: TextField,
                label: "İnput regex(beta)",
                icon: "format_shapes",
                breakpoint: { xs: 12, md: 4 }
            },
            {
                field: "required",
                validate: "",
                FormItem: Checkbox,
                label: "Zorunluluk durumu",
                icon: "warning",
                breakpoint: { xs: 12, md: 4 },
                type: "control"
            },
            {
                field: "mongoType",
                validate: "",
                FormItem: TextField,
                label: "Mongo db sütun tipi",
                icon: "db",
                breakpoint: { xs: 12, md: 4 },
                type: "select",
                selectData: mongoType
            }
        ]
    }
]
const styles = (theme) => ({
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    paper: {
        padding: 40
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
    },
    bottomManagement: { backgroundColor: "#e0e0e0", marginTop: 24, borderRadius: 6 }
})

class FormManagement extends React.Component {
    state = {
        value: 0
    }

    handleChange = (event, value) => {
        this.setState({ value })
    }

    render() {
        const { classes, view, send, add } = this.props
        const { value } = this.state

        return (
            <BottomNavigation value={value} onChange={this.handleChange} showLabels className={classes.bottomManagement}>
                <BottomNavigationAction onClick={send} label='Gönder ve yükle' icon={<i className='material-icons'>send</i>} />
                <BottomNavigationAction onClick={view} label='Göster' icon={<i className='material-icons'>rate_review</i>} />
                <BottomNavigationAction onClick={add} label='Yeni Satır Ekle' icon={<i className='material-icons'>add</i>} />
            </BottomNavigation>
        )
    }
}
export default withStyles(styles, { withTheme: true })(FormCreator)
