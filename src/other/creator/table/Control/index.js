import React, { Component } from "react"
import Axios from "axios"
import {
    Grid,
    Paper,
    Typography as Text,
    IconButton,
    Icon,
    Snackbar,
    SnackbarContent,
    Table,
    TableHead,
    TableCell,
    TableBody,
    TableRow
} from "@material-ui/core"
import { withStyles } from "@material-ui/styles"
import { green, amber, red, indigo } from "@material-ui/core/colors"
import classNames from "classnames"
import { Link } from "react-router-dom"
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
    }
})

class Control extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tables: [],
            relationEffect: null,
            snackBarOpen: false,
            message: "",
            variant: "info"
        }
    }
    componentDidMount() {
        this.get()
    }
    removeTable = (tableName, id) => {
        Axios.post("/drop-tables", { name: tableName, id }).then((d) => {
            this.setState({ snackBarOpen: true, message: "Tablo Silindi" }, this.get)
        })
    }

    get = () => {
        Axios.post("/get-form-json").then(({ data }) => this.setState({ tables: data }))
    }
    getStats = (name) => {
        Axios.post(window.location.origin + "/" + name + "/stats", { options: [{}] }).then(({ data }) => console.log("stats", data))
    }
    render() {
        const { tables } = this.state
        const { classes, className } = this.props
        return (
            <Grid container spacing={10} justify='center'>
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
                        <Text variant='h6'>Tablo Yönetimi</Text>
                        <Grid container justify='center'>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ width: 50 }}>#</TableCell>
                                        <TableCell>Tablo Adı</TableCell>
                                        <TableCell align='right'>Kontrol</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tables.map((i, k) => (
                                        <TableRow key={k}>
                                            <TableCell style={{ width: 50 }} component='th' scope='row'>
                                                {k + 1}
                                            </TableCell>
                                            <TableCell>{i.title}</TableCell>
                                            <TableCell align='right'>
                                                <IconButton color='default' onClick={() => this.getStats(i.name.toLowerCase())}>
                                                    <Icon>show_chart</Icon>
                                                </IconButton>
                                                <IconButton color='secondary' onClick={() => this.removeTable(i.name, i._id)}>
                                                    <Icon>delete</Icon>
                                                </IconButton>
                                                <IconButton
                                                    color='primary'
                                                    component={React.forwardRef((props, ref) => (
                                                        <Link {...props} to={"/table" + i.route.path} ref={ref} />
                                                    ))}>
                                                    <Icon>subdirectory_arrow_left</Icon>
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(useStyles)(Control)
