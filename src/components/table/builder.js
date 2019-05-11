import React, { Component, Fragment } from "react";
import MUIDataTable from "mui-datatables";
const location =
  process.env.NODE_ENV === "development"
    ? window.location.origin + ":3001"
    : "";
import { Button, Snackbar, Icon } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = theme => ({
  button: {
    margin: theme.spacing(2)
  },
  leftIcon: {
    marginRight: theme.spacing(2)
  },
  rightIcon: {
    marginLeft: theme.spacing(2)
  },
  iconSmall: {
    fontSize: 20
  }
});
class TableBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originalData: [],
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
    //   location +
    axios.post("/" + name + "/find", { options: [{}] }).then(({ data }) => {
      console.log("data", data);
      let dataArr = this.dataParser(data, columns);
      this.setState({
        column: columns,
        data: dataArr,
        originalData: data,
        show: true
      });
    });
    axios.post("/" + name + "/stats", { options: [{}] }).then(({ data }) => {
      console.log("data", data);
    });
  };
  delete = list => {
    let { tableItem, name } = this.props.data;
    Object.keys(list.lookup).map(i => {
      axios
        .post("/" + name + "/remove", {
          options: [this.state.data[Number(i)]._id]
        })
        // .post(location + "/" + name + "/remove", { options: [this.state.data[Number(i)]._id] })
        .then(d =>
          this.setState({ snackBarOpen: true, message: "Veri Silindi" })
        );
    });
  };
  render() {
    let { data, column, show, originalData } = this.state;
    let { header, name, route } = this.props.data;
    console.log(" this.props.data", this.props.data);
    const { classes } = this.props;
    console.log("data :", data);
    const options = {
      filterType: "checkbox",
      direction: "ltr",
      responsive: "scroll",
      filter: true,
      elevation: 2,
      sortFilterList: false,
      // onRowsSelect: (e, s) => console.log("onRowsSelect", e, s),
      onRowsDelete: e => this.delete(e),
      customToolbarSelect: (selectedRows, displayData, setSelectedRows) => {
        console.log({ selectedRows, displayData, setSelectedRows });
        return (
          <div>
            <Button
              color="primary"
              className={classes.button}
              component={itemProps => (
                <Link
                  to={
                    "/forms/edit" +
                    route.path +
                    "/" +
                    originalData[displayData[0].dataIndex]._id
                  }
                  {...itemProps}
                />
              )}
            >
              <Icon className={classes.leftIcon}>edit</Icon>
              Düzenle
              {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
            </Button>
            <Button
              color="secondary"
              className={classes.button}
              onClick={() => this.delete(selectedRows)}
            >
              <Icon className={classes.leftIcon}>delete</Icon>
              Sil
            </Button>
          </div>
        );
      },
      fixedHeader: true,
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
          text: " Satır Seçildi",
          delete: "Sil",
          deleteAria: "Seçili satırı sil."
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
            vertical: "top",
            horizontal: "right"
          }}
          open={this.state.snackBarOpen}
          autoHideDuration={3000}
          onClose={() => {
            this.setState({ snackBarOpen: false });
          }}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">{this.state.message}</span>}
        />
      </Fragment>
    );
  }
}
export default withStyles(styles)(TableBuilder);
