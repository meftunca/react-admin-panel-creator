import React, { Component } from "react";
import {
   Grid,
   Paper,
   Typography,
   List,
   ListItem,
   ListItemText,
   IconButton,
   Divider,
   ListSubheader,
   ListItemIcon
} from "@material-ui/core";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Highlighter = ({ children }) => {
   return (
      <SyntaxHighlighter language='javascript' style={docco} showLineNumbers={true}>
         {children.trim()}
      </SyntaxHighlighter>
   );
};
class ApiPage extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   render() {
      return (
         <Grid container justify='center'>
            <Grid item xl={8} md={10} xs={12}>
               <Paper elevation={1} style={{ padding: 15 }}>
                  <Typography variant='h5' style={{ marginBottom: 10 }}>
                     Api
                  </Typography>
                  <Divider style={{ marginBottom: "50px" }} />
                  <br />
                  <Typography variant='h6'>Api kullanımı</Typography>
                  <Typography variant='body2'>Api Anahtarınız</Typography>
                  <Highlighter>{JSON.parse(localStorage.data).api_token}</Highlighter>
                  <Typography variant='body2'>İlk örnekte bağlantı istek örneği verilmiştir</Typography>
                  <pre>
                     <code>{window.location.href + "/koleksiyon-adı/işlem-tipi"}</code>
                  </pre>
                  <Typography variant='body2'>
                     Aşağıda Axios ile bağlantı örneği verilmiştir. options dizisi kullanımını aşağıdaki işlem tiplerine
                     tıklayarak detaylı bir şekilde kullanımını göreceksiniz.
                  </Typography>

                  <Highlighter>
                     {`
                     Axios.post("${location}/test1/findone", // işlem tipleri camel-case olmamasına dikkat edin.
                     { options: [{name:"meftun"}] }
                     ).
                     then(data => {
                           console.log("data :", data);
                        })
                           `}
                  </Highlighter>
                  <Divider />
                  <List component='nav' subheader={<ListSubheader component='div'>İşlem Tipleri</ListSubheader>}>
                     {Roles.map((i, key) => (
                        <React.Fragment key={key}>
                           <ListItem
                              button
                              onClick={() =>
                                 (window.location.href =
                                    "https://automattic.github.io/monk/docs/collection/" + i + ".html")
                              }>
                              <ListItemIcon style={{ width: 30 }}>
                                 <Icon name='swap_verticle_circle' />
                              </ListItemIcon>
                              <ListItemText inset primary={i} />
                           </ListItem>
                           <Divider />
                        </React.Fragment>
                     ))}
                  </List>
               </Paper>
            </Grid>
         </Grid>
      );
   }
}
const Icon = props => <i className='material-icons'>{props.name}</i>;
const Roles = [
   "aggregate",
   "bulkWrite",
   "count",
   "distinct",
   "drop",
   "dropIndex",
   "dropIndexes",
   "ensureIndex",
   "find",
   "findOne",
   "findOneAndDelete",
   "findOneAndUpdate",
   "geoHaystackSearch",
   "geoNear",
   "group",
   "indexes",
   "insert",
   "mapReduce",
   "remove",
   "stats",
   "update"
];
export default ApiPage;
