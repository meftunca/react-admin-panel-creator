import React from "react";
import { Chart, BarSeries, ArgumentAxis, ValueAxis } from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

const data = [
  { year: "1950", population: 0.525 , population1: 4.52 , population2: 2.25 },
  { year: "1960", population: 1.018 , population1: 3.01 , population2: 5.18 },
  { year: "1970", population: 1.682 , population1: 5.68 , population2: 3.82 },
  { year: "1980", population: 1.44 , population1: 9.5, population2: 3.444 },
  { year: "1990", population: 5.31 , population1: 6.31, population2: 2.31 },
  { year: "2000", population: 0.127 , population1: 3.12 , population2: 6.27 },
  { year: "2010", population: 3.93 , population1: 1.23, population2: 6.93 }
];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data
    };
  }

  render() {
    const { data: chartData } = this.state;
    const { data } = this.props;
    const { field } = data.chartConfig;
    return (
      <Chart data={chartData}>
        <ArgumentAxis />
        <ValueAxis max={7} />
        {field.map(({ name, argument, value }, k) => (
        <BarSeries valueField={value} argumentField={argument} key={k} />
        ))}
        <Animation />
      </Chart>
    );
  }
}
