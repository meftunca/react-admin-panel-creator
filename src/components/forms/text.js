import React, { useState } from "react"
import classNames from "classnames"
import { withStyles } from "@material-ui/core/styles"
import { Input, InputLabel, InputAdornment, FormControl, IconButton, FormHelperText } from "@material-ui/core"

const uniqid = require("uniqid")
const styles = (theme) => ({
    textField: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        width: "100%"
    },
    margin: {
        margin: theme.spacing(0)
    },
    fullWidth: { width: "100%" },
    labelFix: {
        position: "relative",
        bottom: 7
    },
    labelFixIcon: {
        position: "relative",
        bottom: 4
    },
    success: {
        color: "#4caf50"
    },
    warning: {
        color: "#ff9800"
    },
    error: {
        color: "#f44336"
    }
})

const TextInput = withStyles(styles)(({ onChange, defaultValue, label, icon, type, ref, classes, error }) => {
    const [data, setData] = useState("")
    let labelId = uniqid()
    let classQuery = error ? classes.error : classes.success
    return (
        <div className={classes.margin}>
            <FormControl fullWidth>
                <InputLabel htmlFor={labelId}>{label}</InputLabel>
                <Input
                    id={labelId}
                    inputRef={ref}
                    label={label}
                    type={type}
                    value={data}
                    defaultValue={defaultValue}
                    onChange={({ target }) => {
                        setData(target.value)
                        onChange(target.value)
                    }}
                    startAdornment={
                        <InputAdornment position='start'>
                            <Icon name={icon} />
                        </InputAdornment>
                    }
                />
                <FormHelperText className={classQuery}>{error ? Object.values(error)[0][0] : "Başarılı"}</FormHelperText>
            </FormControl>
        </div>
    )
})

const PasswordInput = withStyles(styles)(({ onChange, defaultValue, label, icon, type, ref, classes, error }) => {
    const [data, setData] = useState("")
    const [hidden, setHidden] = useState(true)
    let classQuery = error ? classes.error : classes.success
    return (
        <FormControl className={classNames(classes.margin, classes.textField)}>
            <InputLabel htmlFor='adornment-password'>
                <span className={classes.labelFix}>{label.toLocaleUpperCase()}</span>
            </InputLabel>
            <Input
                inputRef={ref}
                id='adornment-password'
                type={!hidden ? "text" : "password"}
                value={data}
                defaultValue={defaultValue}
                autoComplete='false'
                onChange={({ target }) => {
                    setData(target.value)
                    onChange(target.value)
                }}
                startAdornment={
                    <InputAdornment position='start'>
                        <Icon name={icon} />
                    </InputAdornment>
                }
                endAdornment={
                    <InputAdornment position='end'>
                        <IconButton aria-label='Toggle password visibility' onClick={() => setHidden(!hidden)}>
                            {!hidden ? <Icon name='visibility' /> : <Icon name='visibility_off' />}
                        </IconButton>
                    </InputAdornment>
                }
            />
            <FormHelperText className={classQuery}>{error ? Object.values(error)[0][0] : "Başarılı"}</FormHelperText>
        </FormControl>
    )
})

const Icon = ({ name }) => <i className='material-icons'>{name}</i>

export { PasswordInput, TextInput }
