import React, { Component, Fragment } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";
const location = process.env.NODE_ENV === "development" ? window.location.origin + ":3001" : "";
import Snackbar from "@material-ui/core/Snackbar";

export default class TableBuilder extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [],
         column: [],
         show: false,
         snackBarOpen: false,
         message: ""
      };
   }
   componentDidMount() {
      this.getData();
   }
   dataParser = (data, column) => {
      let arr = [];
      data.map((item, k) => {
         let arr2 = [];
         column.map(i => arr2.push(item[i] != undefined ? item[i] : ""));
         return arr.push(arr2);
      });
      return arr;
   };
   getData = async () => {
      let { tableItem, name } = this.props.data;
      let columns = tableItem.map(i => Object.values(i)[0]);
      axios.post(location + "/" + name + "/find", { options: [{}] }).then(({ data }) => {
         let dataArr = this.dataParser(data, columns);
         this.setState({ column: columns, data: dataArr, show: true });
      });
   };
   delete = list => {
      let { tableItem, name } = this.props.data;
      let opt = {
         name,
         id: Object.keys(list.lookup)
      };
      // axios.post(location + "/remove-table-item", opt).then(d => console.log(d));
      console.log("Object.keys(list.lookup) :", Object.keys(list.lookup));
      Object.keys(list.lookup).map(i => {
         axios
            .post(location + "/" + name + "/remove", { options: [this.state.data[Number(i)]._id] })
            .then(d => this.setState({ snackBarOpen: true, message: "Veri Silindi" }));
      });
      // axios.post(location + "/" + name + "/remove", { options: [id._id] });
   };
   render() {
      let { data, column, show } = this.state;
      let { header } = this.props.data;
      const options = {
         filterType: "checkbox",
         direction: "ltr",
         responsive: "scroll",
         filter: true,
         sortFilterList: false,
         onRowsSelect: (e, s) => console.log("onRowsSelect", e, s),
         onRowsDelete: e => this.delete(e),
         textLabels: {
            body: {
               noMatch: "Sorry, no matching records found",
               toolTip: "Sort"
            },
            pagination: {
               next: "Next Page",
               previous: "Previous Page",
               rowsPerPage: "Rows per page:",
               displayRows: "of"
            },
            toolbar: {
               search: "Search",
               downloadCsv: "Download CSV",
               print: "Print",
               viewColumns: "View Columns",
               filterTable: "Filter Table"
            },
            filter: {
               all: "All",
               title: "FILTERS",
               reset: "RESET"
            },
            viewColumns: {
               title: "Show Columns",
               titleAria: "Show/Hide Table Columns"
            },
            selectedRows: {
               text: "rows(s) selected",
               delete: "Delete",
               deleteAria: "Delete Selected Rows"
            }
         }
      };
      return (
         <Fragment>
            <MUIDataTable
               filter={false}
               title={header.label + " tablosu"}
               data={data}
               columns={column}
               options={options}
            />
            <Snackbar
               anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left"
               }}
               open={this.state.snackBarOpen}
               autoHideDuration={6000}
               onClose={() => {
                  this.setState({ snackBarOpen: false });
               }}
               ContentProps={{
                  "aria-describedby": "message-id"
               }}
               message={<span id='message-id'>{this.state.message}</span>}
            />
         </Fragment>
      );
   }
}
