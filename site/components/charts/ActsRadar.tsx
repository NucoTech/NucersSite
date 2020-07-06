import React from "react"
import { chooseEchartsTheme } from "./themes/themeChooser"

const echarts = require("echarts")

/**
 * @param {Array<number>} datas 是指用户想法，帖子，评论，点赞的活跃度数组
 */
export interface ActsRadarProps {
    datas: Array<number>
}

/**
 * 用户活跃度雷达图组件
 */
export default class ActsRadar extends React.Component<ActsRadarProps> {
    constructor(props: ActsRadarProps) {
        super(props)
    }
    private $actsRadar = React.createRef<HTMLDivElement>()
    componentDidMount() {
        const { datas } = this.props
        // 计算最大数
        const maxS: number = Math.max(...datas)
        const actsRadarChart = echarts.init(
            this.$actsRadar.current,
            chooseEchartsTheme()
        )
        const option = {
            tooltip: {},
            radar: {
                legend: {
                    data: ["活跃数据"],
                },
                indicator: [
                    { name: "想法", max: maxS },
                    { name: "帖子", max: maxS },
                    { name: "评论", max: maxS },
                    { name: "点赞", max: maxS },
                    { name: "收藏", max: maxS },
                ],
            },
            series: [
                {
                    type: "radar",
                    data: [
                        {
                            name: "活跃数据",
                            value: datas,
                        },
                    ],
                },
            ],
        }
        actsRadarChart.setOption(option)
    }
    render() {
        return <div ref={this.$actsRadar} style={{ height: "300px" }}></div>
    }
}
