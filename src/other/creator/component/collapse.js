import React from "react"
import { makeStyles } from "@material-ui/styles"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Collapse from "@material-ui/core/Collapse"
import Grid from "@material-ui/core/Grid"
import { IconButton } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        maxWidth: 360
    },
    nested: {
        paddingLeft: 4 * 4
    }
}))

function CollapseFormList(props) {
    const classes = useStyles()
    const [open, setOpen] = React.useState(props.open)

    function handleClick() {
        setOpen(!open)
    }
    return (
        <React.Fragment>
            <ListItem button>
                <ListItemText primary={props.title} />
                <IconButton onClick={props.remove} style={{ color: "red" }}>
                    <Icon name='delete' />
                </IconButton>
                <IconButton onClick={handleClick}>{open ? <Icon name='expand_less' /> : <Icon name='expand_more' />}</IconButton>
            </ListItem>
            <Collapse in={open} timeout='auto' unmountOnExit>
                <Grid container spacing={3}>
                    {props.children}
                </Grid>
            </Collapse>
        </React.Fragment>
    )
}
const Icon = (props) => <i className='material-icons'>{props.name}</i>
export default CollapseFormList
