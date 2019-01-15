import React, { useState } from "react";
import FormBuilder from "./../../components/forms/builder";
import { withStyles } from "@material-ui/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const Api = require("./../../json/apiForm.json");
const styles = theme => ({
  root: {
    width: "100%",
    border: "0",
    boxShadow: "0 2px 5px 0 rgba(0,0,0,.125)",
    margin: "20px 0",
    padding: "10px"
  },

  heading: {
    fontSize: 16,
    flexBasis: "33.33%",
    flexShrink: 0
  }
});

const App = ({ classes }) => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <React.Fragment>
      {Object.values(Api).map((i, k) => (
        <ExpansionPanel
          className={classes.root}
          key={k}
          expanded={expanded === "panel-" + i.name}
          onChange={handleChange("panel-" + i.name)}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{i.title.toLocaleUpperCase()}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <FormBuilder {...i} noTitle={true} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </React.Fragment>
  );
};

export default withStyles(styles)(App);
