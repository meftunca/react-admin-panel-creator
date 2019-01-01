import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";

// const columns = ["Name", "Company", "City", "State"];

const data = [
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
];

const options = {
    filterType: 'checkbox',
    direction:"ltr"
};
export default class TableBuilder extends Component {
    constructor(props){
        super(props)
    }
    getData = async () => {
        
    }
    render(){
        let {tableItem} = this.props;
        let columns = tableItem.map(i=>Object.values(i)[1].toLocaleUpperCase())
        console.log(columns)
         return(
            <MUIDataTable
                // title={"Employee List"}
                data={data}
                columns={columns}
                options={options}
            />
        )
    }

}
