import React, { useState, Fragment } from "react"
import { List, IconButton, ListItem, ListItemIcon, ListItemText, Collapse, ListItemSecondaryAction } from "@material-ui/core"
import { Link } from "react-router-dom"
const Icon = ({ name }) => <i className='material-icons'>{name}</i>
const ListItemCom = ({ to, icon, title }) => (
    <Link to={to}>
        <ListItem button>
            <ListItemIcon>{icon != "" && icon != undefined && <Icon name={icon} />}</ListItemIcon>
            <ListItemText primary={title} />
        </ListItem>
    </Link>
)
export default ({ title, icon, collapse, opens, defaultOpen, prefix = "" }) => {
    const [open, setOpen] = useState(defaultOpen != undefined ? defaultOpen : false)
    return (
        <Fragment>
            <ListItem button onClick={() => setOpen(!open)}>
                <ListItemIcon>
                    <Icon name={icon} />
                </ListItemIcon>
                <ListItemText primary={title} />
                {opens && (
                    <ListItemSecondaryAction>
                        <IconButton onClick={() => setOpen(!open)}>
                            <Icon name={!open ? "expand_more" : "expand_less"} />
                        </IconButton>
                    </ListItemSecondaryAction>
                )}
            </ListItem>
            <Collapse in={open} timeout='auto' unmountOnExit>
                <List component='div' disablePadding style={{ padding: "5px 10px" }}>
                    {collapse.map((i, k) => (
                        <ListItemCom to={prefix + i.route.path} icon={i.header.icon} title={i.title} key={k} />
                    ))}
                </List>
            </Collapse>
        </Fragment>
    )
}
