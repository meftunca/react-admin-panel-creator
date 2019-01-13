import  React from 'react';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { country: 'Russia', area: 12 },
  { country: 'Canada', area: 7 },
  { country: 'USA', area: 7 },
  { country: 'China', area: 7 },
  { country: 'Brazil', area: 6 },
  { country: 'Australia', area: 5 },
  { country: 'India', area: 2 },
  { country: 'Others', area: 55 },
];
export default class PieChart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;
    const { data } = this.props;
    const { field,title } = data.chartConfig;
    return (
        <Chart
          data={chartData}
        >
          <PieSeries
            valueField={field.value}
            argumentField={field.argument}
          />
          <Title
            text={title}
          />
          <Animation />
        </Chart>
    );
  }
}
