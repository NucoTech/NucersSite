import React from "react"
import { chooseEchartsTheme } from "./themes/themeChooser"

const echarts = require("echarts")

/**
 * datas类型需要 [string, number]结构
 */
export interface HeatCalendarProps {
    range?: number | Array<string> | string
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
        // 遍历得到最大值若没有传参
        const maxActs: number = Math.max(
            ...datas.map((item) => {
                return item[1]
            })
        )
        const options = {
            tooltip: {},
            visualMap: {
                show: false,
                min: 0,
                max: maxs || maxActs,
            },
            calendar: {
                top: 22,
                bottom: 2,
                left: 60,
                right: 10,
                range: range || new Date().getFullYear(),
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
                style={{ height: "150px", width: "100%" }}
            ></div>
        )
    }
}
