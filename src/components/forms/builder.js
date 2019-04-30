import React, { Component, Fragment, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { inject, observer } from "mobx-react"
import { withStyles } from "@material-ui/core/styles"
import { Paper, Grid, Typography, Button } from "@material-ui/core"

import classNames from "classnames"
import { Form, asField } from "informed"
import { TextInput, PasswordInput } from "./text"
import Datepicker from "./date"
import Timepicker from "./time"
import Editor from "./editor"
import RadioButtons from "./radio"
import Checkboxes from "./checkbox"
import Switches from "./switch"
import validate from "../../utils/validate"
import axios from "axios"
import Snackbar from "@material-ui/core/Snackbar"

const styles = (theme) => ({
    button: {
        margin: theme.spacing(2)
    },
    leftIcon: {
        marginRight: theme.spacing(2)
    },
    rightIcon: {
        marginLeft: theme.spacing(2)
    },
    root: {
        width: "100%",
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    },
    fullWidth: {
        flex: 1,
        width: "100%",
        marginBottom: theme.spacing(2)
    },
    maginVertical: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    }
})

const location = process.env.NODE_ENV === "development" ? window.location.origin + ":3001" : ""

@inject("store")
@observer
class FormBuilder extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.setFormApi = this.setFormApi.bind(this)
        this.postForm = this.postForm.bind(this)
        this.state = {
            snackBarOpen: false,
            message: "",
            edit: false,
            editData: {},
            show: false
        }
    }
    componentDidMount = () => {
        const { id } = this.props.match.params
        if (id != undefined) {
            this.getEditData(id)
            this.setState({ edit: true })
        } else {
            this.setState({ show: true })
        }
    }
    handleClick() {
        let { values } = this.formApi.getState()
    }
    getEditData = (id) => {
        axios
            .post("/" + this.props.data.name + "/findOne", {
                options: [{ id }]
            })
            .then(({ data }) => {
                this.setState(
                    {
                        editData: data,
                        snackBarOpen: true,
                        message: "Güncellenecek veriler veritabanından alındı."
                    },
                    () =>
                        this.setState({
                            show: true
                        })
                )
                // this.forceUpdate();
            })
    }
    setFormApi(formApi) {
        this.formApi = formApi
    }

    postForm = async (url) => {
        let { values } = this.formApi.getState()
        const { id } = this.props.match.params
        if (id != undefined) {
            axios
                .post("/" + this.props.data.name + "/update", {
                    options: [{ _id: id }, values]
                })
                .then(({ data }) => {
                    this.setState({
                        snackBarOpen: true,
                        message: "Veri başarılı bir şekilde güncellendi."
                    })
                })

            return true
        } else {
            values["id"] = JSON.parse(localStorage.getItem("data"))._id
            //location +
            axios
                .post("/" + this.props.data.name + "/insert", {
                    options: [values]
                })
                .then(({ data }) => {
                    this.setState({
                        snackBarOpen: true,
                        message: "Veri başarılı bir şekilde eklendi"
                    })
                })
        }
    }
    render() {
        const { edit, editData, show } = this.state
        const { classes, elevation = 1, data, disabled = false } = this.props
        const { header, formItem, name, postUrl, post_url, title, noTitle } = data
        const { label, icon } = header
        const defaultData = edit == true ? { defaultData: editData } : {}
        return (
            <Grid container direction='row' justify='center'>
                <Snackbar
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right"
                    }}
                    open={this.state.snackBarOpen}
                    autoHideDuration={6000}
                    onClose={() => {
                        this.setState({ snackBarOpen: false })
                    }}
                    ContentProps={{
                        "aria-describedby": "message-id"
                    }}
                    message={<span id='message-id'>{this.state.message}</span>}
                />
                <Grid item md={elevation === 0 ? 12 : 10} xs={12}>
                    <Paper className={classes.root} elevation={elevation}>
                        {noTitle != true && (
                            <Typography variant='h5' component='div' style={{ display: "flex", alignContent: "center", marginBottom: 12, marginTop: 6 }}>
                                {icon != "" && <Icon name={icon} />}
                                <div style={{ marginRight: 8 }} />
                                <small>{title.toLocaleUpperCase()}</small>
                            </Typography>
                        )}
                        {show && (
                            <Form id={"form-" + name} getApi={this.setFormApi} initialValues={this.state.editData} autoComplete='off'>
                                <div className={classes.fullWidth}>
                                    <Grid container>
                                        {formItem.map((i, k) => (
                                            <Grid item {...Object.assign({ md: 12 }, i.breakPoint)} key={k} className={classes.maginVertical}>
                                                <FormCreator
                                                    field={i.name}
                                                    id={name + "-" + i.name}
                                                    item={i}
                                                    validate={validate[i.validate]}
                                                    {...defaultData}
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
                                    disabled={disabled}
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
                        )}
                        {/*  <button onClick={this.handleClick}>Print Form State</button>  */}
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}
// editor => onChange, defaultValue // text => {onChange, defaultValue, label, icon, type
// password => onChange, defaultValue, label, icon, type
// propslar
const Icon = ({ name }) => <i className='material-icons'>{name}</i>
const FormCreator = asField(({ fieldState, fieldApi, ...props }) => {
    let { value, error } = fieldState
    const { setValue, setTouched } = fieldApi
    const { onChange, onBlur, initialValue, item, forwardedRef, ...rest } = props //input verileri itemdan gelecek
    if (item.type == "text" || item.type == "") {
        return <TextInput onChange={setValue} defaultValue={value} label={item.label} icon={item.icon} type={item.type} error={error} {...item} />
    } else if (item.type == "password") {
        return <PasswordInput onChange={setValue} defaultValue={value} label={item.label} icon={item.icon} type={item.type} error={error} {...item} />
    } else if (item.type == "editor") {
        return <Editor onChange={setValue} error={error} defaultValue={value} {...item} />
    } else if (item.type == "date") {
        return <Datepicker onChange={setValue} error={error} defaultValue={value} {...item} />
    } else if (item.type == "time") {
        return <Timepicker onChange={setValue} error={error} defaultValue={value} {...item} />
    } else if (item.type == "radio") {
        return <RadioButtons onChange={setValue} error={error} defaultValue={value} {...item} />
    } else if (item.type == "checkbox") {
        return <Checkboxes onChange={setValue} error={error} defaultValue={value} {...item} />
    } else if (item.type == "switch") {
        return <Switches onChange={setValue} error={error} defaultValue={value} {...item} />
    }
    return (
        <input
            {...rest}
            type={item.type}
            value={!value && value !== 0 ? "" : value}
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
            style={fieldState.error ? { border: "solid 1px red" } : null}
        />
    )
})
FormBuilder.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(FormBuilder)
