import React from "react"
const echarts = require("echarts")

export interface HeatCalendarProps {
    range: number | Array<string> | string
    datas: Array<any>
    min?: number
    max?: number
}

/**
 * 热力日历图组件，类似github的动作记录
 */
export default class HeatCalendar extends React.Component<HeatCalendarProps> {
    constructor(props: HeatCalendarProps) {
        super(props)
    }
    private $heatCalendarMap = React.createRef<HTMLDivElement>()
    componentDidMount() {
        const heatMap = echarts.init(this.$heatCalendarMap.current)
        const { range, datas, min, max } = this.props
        const options = {
            visualMap: {
                show: false,
                min: min || 0,
                max: max || 1000,
            },
            calendar: {
                top: 0,
                let: 0,
                range: range,
                cellSize: "auto"
            },
            series: {
                type: "heatmap",
                coordinateSystem: "calendar",
                data: datas,
            },
        }
        heatMap.setOption(options)
    }
    render() {
        return (
            <div
                ref={this.$heatCalendarMap}
                style={{ height: "100px", width: "700px" }}
            ></div>
        )
    }
}
