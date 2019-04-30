//==============================================================================================================
//
//  #####    #####  ##        ###    ######  ##   #####   ##     ##   ####  ##   ##  ##  #####    ####
//  ##  ##   ##     ##       ## ##     ##    ##  ##   ##  ####   ##  ##     ##   ##  ##  ##  ##  ##
//  #####    #####  ##      ##   ##    ##    ##  ##   ##  ##  ## ##   ###   #######  ##  #####    ###
//  ##  ##   ##     ##      #######    ##    ##  ##   ##  ##    ###     ##  ##   ##  ##  ##         ##
//  ##   ##  #####  ######  ##   ##    ##    ##   #####   ##     ##  ####   ##   ##  ##  ##      ####
//
//==============================================================================================================
import React, { Component, Fragment, useState } from "react"
import Axios from "axios"
import {
    Grid,
    Paper,
    Typography as Text,
    List,
    ListItem,
    ListItemText,
    ListSubheader,
    ListItemSecondaryAction,
    IconButton,
    Icon,
    Snackbar,
    SnackbarContent,
    Menu,
    MenuItem,
    Divider,
    TextField
} from "@material-ui/core"
import { withStyles } from "@material-ui/styles"
import { green, amber, red, indigo } from "@material-ui/core/colors"
import classNames from "classnames"

const useStyles = (theme) => ({
    success: {
        backgroundColor: green[600]
    },
    error: {
        backgroundColor: red[700]
    },
    info: {
        backgroundColor: indigo[500]
    },
    warning: {
        backgroundColor: amber[700]
    },
    icon: {
        fontSize: 20
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: 16
    },
    message: {
        display: "flex",
        alignItems: "center"
    },
    menu: {
        minWidth: 240
    }
})

/* const relations = [
   [
      {
         tableName1: "table key",
         tableName2: "table key"
      },
      {
         effect: ""
      }
   ]
]; */
class RelationShips extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tables: [],
            snackBarOpen: false,
            message: "",
            variant: "info",
            relation: {
                trigger: null,
                triggered: null,
                effect: null
            }
        }
    }
    componentDidMount() {
        this.get()
    }

    get = () => {
        Axios.post("/get-form-json").then(({ data }) => this.setState({ tables: data }))
    }
    addRelationTableColumn = (tableName, column) => {
        const newRelation = { tableName, column }
        let trigger = newRelation
        this.setState({ relation: { ...this.state.relation, trigger } })
    }
    addRelationTable = (tableName, column) => {
        const newRelation = { tableName, column }
        let triggered = newRelation
        this.setState({ relation: { ...this.state.relation, triggered } })
    }
    setEffect = ({ target }) => {}
    render() {
        const { tables, relation } = this.state
        const { classes, className } = this.props
        const { trigger, triggered, effect } = relation
        return (
            <Grid container spacing={4} justify='center'>
                <Snackbar
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left"
                    }}
                    open={this.state.snackBarOpen}
                    autoHideDuration={3000}
                    onClose={() => this.setState({ snackBarOpen: false })}>
                    <SnackbarContent
                        className={classNames(classes[this.state.variant], className)}
                        aria-describedby='client-snackbar'
                        message={
                            <span id='client-snackbar' className={classes.message}>
                                <Icon className={classNames(classes.icon, classes.iconVariant)} />
                                {this.state.message}
                            </span>
                        }
                        action={[
                            <IconButton
                                key='close'
                                aria-label='Close'
                                color='inherit'
                                className={classes.close}
                                onClick={() => this.setState({ snackBarOpen: false })}>
                                <Icon>close</Icon>
                            </IconButton>
                        ]}
                    />
                </Snackbar>
                <Grid item md={10} sm={12}>
                    <Paper style={{ padding: 24 }}>
                        <Text variant='h6'>İlişkisel Tablolar</Text>
                        <br />
                        <br />
                        <Grid container>
                            <Grid item md={4} sm={12}>
                                <List component='nav'>
                                    {tables.map(({ _id, name, formItem, title }, k) => (
                                        <Fragment key={k}>
                                            {trigger === null ? (
                                                <ColumnList
                                                    title={title}
                                                    id={_id}
                                                    name={name}
                                                    classes={classes}
                                                    item={formItem}
                                                    add={this.addRelationTableColumn}
                                                />
                                            ) : (
                                                <TableSelectList
                                                    title={title}
                                                    id={_id}
                                                    name={name}
                                                    classes={classes}
                                                    item={formItem}
                                                    add={this.addRelationTable}
                                                />
                                            )}
                                            <Divider />
                                        </Fragment>
                                    ))}
                                </List>
                            </Grid>
                            <Grid item md={8} sm={12}>
                                <List dense={true} component='nav'>
                                    <ListSubheader component='div'>Tetikleyici Tablo Sütunu</ListSubheader>
                                    <ListItem>
                                        <ListItemText
                                            primary={trigger !== null ? trigger.tableName + "->" + trigger.column : "Lütfen tetikleyici sütunu seçin"}
                                        />
                                        {trigger !== null && (
                                            <ListItemSecondaryAction>
                                                <IconButton
                                                    color='secondary'
                                                    onClick={() =>
                                                        this.setState({
                                                            relation: {
                                                                trigger: null,
                                                                triggered: null,
                                                                effect: null
                                                            }
                                                        })
                                                    }>
                                                    <Icon>delete</Icon>
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        )}
                                    </ListItem>
                                    <Divider />
                                    <ListSubheader component='div'>Tetiklenen Tablo </ListSubheader>
                                    <ListItem button>
                                        <ListItemText primary={triggered !== null ? triggered.tableName : "Lütfen tetiklenen tabloyu seçin"} />
                                        {triggered !== null && (
                                            <ListItemSecondaryAction>
                                                <IconButton color='secondary' onClick={() => this.setState({ relation: { ...relation, triggered: null } })}>
                                                    <Icon>delete</Icon>
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        )}
                                    </ListItem>
                                </List>
                                <br />
                                <Text variant='h5'>Tepki Oluştur</Text>
                                <br />
                                <TextField
                                    id='filled-select-currency'
                                    select
                                    value='Select'
                                    className={classes.textField}
                                    fullWidth
                                    label={relation.effect === null ? "lütfen bir durum seçin" : relation.effect.label}
                                    onChange={(...item) => {
                                        this.setState({ relation: { ...relation, effect: currencies[Number(item[1].key)] } })
                                    }}
                                    SelectProps={{
                                        MenuProps: {
                                            className: classes.menu
                                        }
                                    }}
                                    helperText='Lütfen tepkinizi bu listeden seçin.'
                                    margin='normal'
                                    variant='filled'>
                                    {currencies.map((option, key) => (
                                        <MenuItem key={key} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(useStyles)(RelationShips)
const currencies = [{ value: "mobileNotification", label: "Mobil Bildirim" }, { value: "webNotification", label: "Web Bildirim" }]
const ColumnList = ({ title, name, id, classes, item, add }) => {
    const [open, setOpen] = useState(null)
    function handleClick(event) {
        setOpen(event.currentTarget)
    }

    function handleClose() {
        setOpen(null)
    }

    return (
        <Fragment>
            <ListItem aria-owns={open ? id : undefined} button aria-haspopup='true' onClick={handleClick}>
                <ListItemText
                    primary={title}
                    // secondary={options[this.state.selectedIndex]}
                />
                <ListItemSecondaryAction>
                    <Icon>chevron_right</Icon>
                </ListItemSecondaryAction>
            </ListItem>
            <Menu className={classes.menu} id={id} anchorEl={open} open={Boolean(open)} onClose={handleClose}>
                {item.map((i, k) => (
                    <MenuItem
                        onClick={() => {
                            add(name, i.name)
                            handleClose()
                        }}
                        key={k}>
                        {i.label}
                    </MenuItem>
                ))}
            </Menu>
        </Fragment>
    )
}
const TableSelectList = ({ title, name, id, classes, item, add }) => {
    return (
        <Fragment>
            <ListItem button onClick={() => add(name)}>
                <ListItemText primary={title} />
                <ListItemSecondaryAction>
                    <Icon>chevron_right</Icon>
                </ListItemSecondaryAction>
            </ListItem>
        </Fragment>
    )
}
