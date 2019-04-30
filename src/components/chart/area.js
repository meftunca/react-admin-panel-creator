import React from "react"
import { Chart, ArgumentAxis, ValueAxis, AreaSeries, Legend } from "@devexpress/dx-react-chart-material-ui"
import { withStyles } from "@material-ui/core/styles"
import { Animation } from "@devexpress/dx-react-chart"
import { scalePoint } from "d3-scale"

const data = [
    { year: "2010", android: 67225, ios: 46598, windowsOs: 6598 },
    { year: "2011", android: 179873, ios: 90560, windowsOs: 1560 },
    { year: "2012", android: 310088, ios: 118848, windowsOs: 18848 },
    { year: "2015", android: 539318, ios: 189924, windowsOs: 89924 }
]

const legendStyles = () => ({
    root: {
        display: "flex",
        margin: "auto",
        flexDirection: "row"
    }
})
const legendLabelStyles = (theme) => ({
    label: {
        paddingTop: theme.spacing(4)
    }
})
const legendItemStyles = () => ({
    item: {
        flexDirection: "column"
    }
})
const AreaChartStyles = () => ({
    chart: {
        paddingRight: "20px"
    }
})

const legendRootBase = ({ classes, ...restProps }) => <Legend.Root {...restProps} className={classes.root} />
const legendLabelBase = ({ classes, ...restProps }) => <Legend.Label className={classes.label} {...restProps} />
const legendItemBase = ({ classes, ...restProps }) => <Legend.Item className={classes.item} {...restProps} />
const Root = withStyles(legendStyles, { name: "LegendRoot" })(legendRootBase)
const Label = withStyles(legendLabelStyles, { name: "LegendLabel" })(legendLabelBase)
const Item = withStyles(legendItemStyles, { name: "LegendItem" })(legendItemBase)

class AreaChart extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            data
        }
    }

    render() {
        const { data: chartData } = this.state
        const { classes, data } = this.props
        const { field } = data.chartConfig
        return (
            <Chart data={chartData} className={classes.chart}>
                <ArgumentAxis />
                <ValueAxis />
                {field.map(({ name, argument, value }, k) => (
                    <AreaSeries name={name} valueField={value} argumentField={argument} key={k} />
                ))}
                <Animation />
                <Legend position='bottom' rootComponent={Root} itemComponent={Item} labelComponent={Label} />
            </Chart>
        )
    }
}

export default withStyles(AreaChartStyles, { name: "AreaChart" })(AreaChart)
