import React, { Component } from 'react';
import {
    Chart,
    ScatterSeries,
    ArgumentAxis,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import {  Animation } from '@devexpress/dx-react-chart';

import { dataGenerator } from './dataGenerator';


export default class PointChart extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data: dataGenerator(100),
        };
    }

    render() {
        const { data: chartData } = this.state;

        return (
                <Chart
                    data={chartData}
                >
                    <ArgumentAxis showGrids />
                    <ValueAxis />
                    <ScatterSeries
                        valueField="val1"
                        argumentField="arg1"
                    />
                    <ScatterSeries
                        valueField="val2"
                        argumentField="arg2"
                    />
                    <Animation />
                </Chart>
        );
    }
}
