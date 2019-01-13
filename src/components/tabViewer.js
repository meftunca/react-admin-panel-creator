import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FormBuilder from "./forms/builder";
import TableBuilder from "./table/builder";
import { bindKeyboard } from "react-swipeable-views-utils";

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);
const TabContainer = ({ children, classes }) => {
  return <div className={classes}>{children}</div>;
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    position: "relative"
  },
  container: {
    padding: 8 * 3,
    position: "relative"
  }
});

class TabViewer extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { value } = this.state;
    const { classes, theme, data } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position='static' color='default'>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor='primary'
            textColor='primary'
            variant='fullWidth'>
            <Tab label={data.header.label.toLocaleUpperCase() + " FORMU"} />
            <Tab label={data.header.label.toLocaleUpperCase() + " TABLOSU"} />
          </Tabs>
        </AppBar>

        <BindKeyboardSwipeableViews index={value} onChangeIndex={this.handleChangeIndex}>
          <TabContainer classes={classes.container}>
            <FormBuilder {...data} />
          </TabContainer>
          <TabContainer classes={classes.container}>
            <TableBuilder {...data} />
          </TabContainer>
        </BindKeyboardSwipeableViews>
      </div>
    );
  }
}

TabViewer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(TabViewer);
