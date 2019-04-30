import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import loadable from "@loadable/component";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
});

class ChartBuilder extends Component {
  state = {};
  render() {
      const { classes,data } = this.props;
      const {label,icon,description} = data.header
    return (
      <Paper className={classes.root} elevation={0}>
        <Typography variant='h5' component='h3'>
         <Icon name={icon} /> {label.toLocaleUpperCase()}
        </Typography>
        <Typography component='p'>
          {description}
        </Typography>
        <br/>
        <Builder data={data} />
      </Paper>
    );
  }
}
const Icon = ({ name }) => <i className='material-icons mr-3'>{name}</i>;

const Builder = ({data}) => {
    const AreaChart = loadable(() => import("./"+data.type));
    return <AreaChart data={data} />;

}
ChartBuilder.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ChartBuilder);
