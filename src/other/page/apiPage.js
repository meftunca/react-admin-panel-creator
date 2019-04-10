import React, { Component } from "react";
import { Grid, Paper, Typography, Collapse, ListItem, ListItemText, IconButton, Divider } from "@material-ui/core";
import Axios from "axios";
const ApiDetail = require("./../../../public/json/form.json");
class ApiPage extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   componentDidMount() {
      Axios.post("http://admin-panel.test:3001/test1/count", { options: [] }).then(data => console.log("data :", data));
   }
   render() {
      return (
         <Grid container justify='center'>
            <Grid item xl={8} md={10} xs={12}>
               <Paper elevation={1} style={{ padding: 15 }}>
                  <Typography variant='h6' style={{ marginBottom: 30 }}>
                     Api
                  </Typography>
                  <Divider />

                  {ApiDetail.forms.map((i, k) => (
                     <CollapseItem key={k} title={i.title + " Collection Url Connect Schema"}>
                        <Grid container>
                           <Grid item md={12} style={{ marginTop: 20 }}>
                              <Typography variant='body2'>Append Data Url</Typography>
                              <pre>
                                 <code>{window.location.href + i.postUrl}</code>
                              </pre>
                           </Grid>
                           <Grid item md={12} style={{ marginTop: 20 }}>
                              <Typography variant='body2'>Update Row Url</Typography>
                              <pre>
                                 <code>{window.location.href + i.updateUrl}</code>
                              </pre>
                           </Grid>
                           <Grid item md={12} style={{ marginTop: 20 }}>
                              <Typography variant='body2'>Delete Row Url</Typography>
                              <pre>
                                 <code>{window.location.href + i.deleteUrl}</code>
                              </pre>
                           </Grid>
                           <Grid item md={12} style={{ marginTop: 20 }}>
                              <Typography variant='body2'>Get Data Url Url</Typography>
                              <pre>
                                 <code>{window.location.href + i.getUrl}</code>
                              </pre>
                           </Grid>
                        </Grid>
                     </CollapseItem>
                  ))}
               </Paper>
            </Grid>
         </Grid>
      );
   }
}
const Icon = props => <i className='material-icons'>{props.name}</i>;

const CollapseItem = ({ children, title }) => {
   const [expanded, setExpanded] = React.useState(false);

   return (
      <React.Fragment>
         <ListItem button onClick={() => setExpanded(!expanded)}>
            <ListItemText>{title}</ListItemText>
            <IconButton>{expanded ? <Icon name='expand_less' /> : <Icon name='expand_more' />}</IconButton>
         </ListItem>
         <Divider />
         <Collapse in={expanded} timeout='auto' unmountOnExit>
            {children}
         </Collapse>
      </React.Fragment>
   );
};

export default ApiPage;
