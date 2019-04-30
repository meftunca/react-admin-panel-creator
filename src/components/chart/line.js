import React from "react"
import { Chart, ArgumentAxis, ValueAxis, LineSeries, Legend } from "@devexpress/dx-react-chart-material-ui"
import { withStyles } from "@material-ui/core/styles"
import { Animation } from "@devexpress/dx-react-chart"

import { confidence as data } from "./dataVizualization"

const format = () => (tick) => tick
const legendStyles = () => ({
    root: {
        display: "flex",
        margin: "auto",
        flexDirection: "row"
    }
})
const legendLabelStyles = (theme) => ({
    label: {
        paddingTop: theme.spacing(2),
        whiteSpace: "nowrap"
    }
})
const legendItemStyles = () => ({
    item: {
        flexDirection: "column"
    }
})

const legendRootBase = ({ classes, ...restProps }) => <Legend.Root {...restProps} className={classes.root} />
const legendLabelBase = ({ classes, ...restProps }) => <Legend.Label className={classes.label} {...restProps} />
const legendItemBase = ({ classes, ...restProps }) => <Legend.Item className={classes.item} {...restProps} />
const Root = withStyles(legendStyles, { name: "LegendRoot" })(legendRootBase)
const Label = withStyles(legendLabelStyles, { name: "LegendLabel" })(legendLabelBase)
const Item = withStyles(legendItemStyles, { name: "LegendItem" })(legendItemBase)
const LineStyles = () => ({
    chart: {
        paddingRight: "20px"
    },
    title: {
        whiteSpace: "pre"
    }
})

const ValueLabel = (props) => {
    const { text } = props
    return <ValueAxis.Label {...props} text={`${text}%`} />
}

class LineChart extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            data
        }
    }

    render() {
        const { data: chartData } = this.state
        const { classes } = this.props
        const { data } = this.props
        const { field } = data.chartConfig
        return (
            <Chart data={chartData} className={classes.chart}>
                <ArgumentAxis tickFormat={format} />
                <ValueAxis max={50} labelComponent={ValueLabel} />
                {field.map(({ name, argument, value }, k) => (
                    <LineSeries name={name} valueField={value} argumentField={argument} key={k} />
                ))}

                <Legend position='bottom' rootComponent={Root} itemComponent={Item} labelComponent={Label} />
                <Animation />
            </Chart>
        )
    }
}

export default withStyles(LineStyles, { name: "Line" })(LineChart)
