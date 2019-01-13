import React, { Component, Fragment } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";
export default class TableBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      column: [],
      show: false
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
    let { tableItem, name } = this.props;
    let columns = tableItem.map(i => Object.values(i)[0]);
    let opt = {
      columns: columns.join(" "),
      name: name
    };
    window.axios
      .post(window.location.origin + ":" + (process.env.PORT || 5000) + "/get-table", opt)
      .then(({ data }) => {
        let dataArr = this.dataParser(data, columns);
        console.log("columns", columns, "data", dataArr);
        this.setState({ column: columns, data: dataArr, show: true });
        console.log(data);
      });
  };
  delete = list => {
    let { tableItem, name } = this.props;
    console.log(list);
    let opt = {
      name,
      id: Object.keys(list.lookup)
    };
    axios
      .post(window.location.origin + ":" + (process.env.PORT || 5000) + "/remove-table-item", opt)
      .then(d => console.log(d));
  };
  render() {
    let { data, column, show } = this.state;
    let { header } = this.props;
    const options = {
      filterType: "checkbox",
      direction: "ltr",
      responsive: "scroll",
      filter: false,
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
      <MUIDataTable filter={false} title={header.label + " tablosu"} data={data} columns={column} options={options} />
    );
  }
}
