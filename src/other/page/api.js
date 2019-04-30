import React, { useState } from "react"
import FormBuilder from "./../../components/forms/builder"
import { withStyles, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography, Paper } from "@material-ui/core"

import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
const Api = require("./../../../public/json/apiForm.json")
const styles = (theme) => ({
    root: {
        width: "100%",
        border: "0",
        boxShadow: "0 2px 5px 0 rgba(0,0,0,.125)",
        padding: "10px"
    },

    heading: {
        fontSize: 16,
        //   flexBasis: "33.33%",
        flexShrink: 0
    },
    paperHeader: { padding: 20 }
})

const App = ({ classes, ...rest }) => {
    const [expanded, setExpanded] = useState(null)

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }
    return (
        <React.Fragment>
            <Paper className={classes.paperHeader} elevation={1}>
                <br />
                <Typography variant='h6'>Api Bilgileri</Typography>
                <Typography variant='subtitle2'>Aşağıdaki alanda bulunan api bilgileri alanlarını doldurarak apilere erişim sağlayabilirsiniz.</Typography>
                <br />
                <br />
                {Object.values(Api).map((i, k) => (
                    <ExpansionPanel className={classes.root} key={k} expanded={expanded === "panel-" + i.name} onChange={handleChange("panel-" + i.name)}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>{i.title.toLocaleUpperCase()}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <FormBuilder {...rest} data={i} noTitle={true} elevation={0} />
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                ))}
            </Paper>
        </React.Fragment>
    )
}

export default withStyles(styles)(App)
