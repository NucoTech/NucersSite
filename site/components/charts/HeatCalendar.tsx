import React from "react"
import { chooseEchartsTheme } from "./themes/themeChooser"

const echarts = require("echarts")

export interface HeatCalendarProps {
    range: number | Array<string> | string
    datas: Array<any>
    maxs?: number
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
        const heatMap = echarts.init(
            this.$heatCalendarMap.current,
            chooseEchartsTheme()
        )
        const { range, datas, maxs } = this.props
        const options = {
            tooltip: {},
            visualMap: {
                show: false,
                min: 0,
                max: maxs || 10000,
            },
            calendar: {
                top: 22,
                bottom: 2,
                left: 60,
                right: 10,
                range: range,
                cellSize: "auto",
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
                style={{ height: "150px", width: "752px" }}
            ></div>
        )
    }
}
