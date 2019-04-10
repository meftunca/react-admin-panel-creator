import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import SwipeableViews from "react-swipeable-views";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { observer, inject } from "mobx-react";
import DefaultSettings from "./components/defaultSettings";
import TODOLIST from "../page/components/todo";

const styles = {
   list: {
      height: "calc(100vh - 72px)"
   },
   container: {
      width: 380
      // backgroundColor: "rgba(0,0,0,.9)",
      // "& *": {
      //   color: "#fff",
      //   backgroundColor: "transparent"
      // }
   },
   tabHeader: {
      backgroundColor: "transparent",
      boxShadow: "none"
   },
   tab: {
      minWidth: 50
   }
};
@inject("store")
@observer
class ProfileTabDrawer extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         open: false,
         user: {}
      };
   }
   componentDidMount() {
      let o = this.props.open;
      this.setState({ user: JSON.parse(localStorage.getItem("data")), open: o });
   }

   toggleDrawer = open => () => {
      this.setState({
         open
      });
      this.props.store.update_profileDrawer(open);
   };

   render() {
      const { classes } = this.props;
      const { user } = this.state;
      return (
         <SwipeableDrawer
            anchor='right'
            open={this.props.store.profileDrawer}
            onClose={this.toggleDrawer(false)}
            onOpen={this.toggleDrawer(true)}>
            <div tabIndex={0} role='button' className={classes.container}>
               {/* onClick={this.toggleDrawer(false)} onKeyDown={this.toggleDrawer(false)} */}
               <TabWrapperWithStyles user={user} />
            </div>
         </SwipeableDrawer>
      );
   }
}
const TabWrapper = ({ data, user, classes }) => {
   const [value, setValue] = useState(0);
   function handleChange(event, newValue) {
      setValue(newValue);
   }
   function handleChangeIndex(index) {
      setValue(index);
   }

   return (
      <div>
         <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='primary'
            textColor='primary'
            variant='fullWidth'
            className={classes.tabHeader}>
            <Tab label='Profil' icon={<Icon name='account_circle' />} className={classes.tab} />
            <Tab label='Chat' icon={<Icon name='chat' />} className={classes.tab} />
            <Tab label='TODO' icon={<Icon name='list' />} className={classes.tab} />
         </Tabs>
         <SwipeableViews animateHeight={true} index={value} onChangeIndex={handleChangeIndex}>
            <div className={classes.list}>
               <DefaultSettings />
            </div>
            <div className={classes.list}>Item Two</div>
            <div className={classes.list}>
               <TODOLIST />
            </div>
         </SwipeableViews>
      </div>
   );
};

ProfileTabDrawer.propTypes = {
   classes: PropTypes.object.isRequired
};
const Icon = ({ name }) => <i className='material-icons'>{name}</i>;
const TabWrapperWithStyles = withStyles(styles)(TabWrapper);
export default withStyles(styles)(ProfileTabDrawer);
