import React from "react"
import * as d3 from "d3"

/**
 * 基于SVG的热力日历图，开发中
 */
export default class CalendarHeatmap extends React.Component {
    drawCalendarHeatmap = (data, width, height, years, cellSize) => {
        // 计算是哪一天
        const countDay = (d) => (d.getUTCDay() + 6) % 7
        // 格式化日期
        const formatDay = (d) => "SMTWTFS"[d.getUTCDay()]
        // 获取最大值
        const max = d3.max(data, (d) => d.value)
        // 星期一为日期
        const timeWeek = d3.utcMonday
        // 格式化月份
        const formatMonth = d3.utcFormat("%b")
        // 设置颜色
        const color = (d) => {
            const max = d3.quantile(
                data.map((d) => Math.abs(d.value)).sort(d3.ascending),
                0.9975
            )
            const min = d3.min(data, (d) => d.value)
            //const max = d3.max(data, d => d.value)
            return d3.scaleSequential(d3.interpolateYlOrRd).domain([min, max])
            //return d3.scaleQuantile().domain([min, max]).range(["green", "white", "red"])
        }

        //
        const pathMonth = (t) => {
            const n = 7
            const d = Math.max(0, Math.min(n, countDay(t)))
            const w = timeWeek.count(d3.utcYear(t), t)
            return `${
                d === 0
                    ? `M${w * cellSize},0`
                    : d === n
                    ? `M${(w + 1) * cellSize},0`
                    : `M${(w + 1) * cellSize},0V${d * cellSize}H${w * cellSize}`
            }V${n * cellSize}`
        }

        // 创建svg
        const svg = d3
            .create("svg")
            .attr("viewBox", [0, 0, width, height * years.length])
            .attr("font-family", "sans-serif")
            .attr("font-size", 10)

        // 创建年份
        const year = svg
            .selectAll("g")
            .data(years)
            .join("g")
            .attr("transform", function (d, i) {
                return `translate(40.5,${height * i + cellSize * 1.5})`
            })
            .attr("id", (d) => d[0])

        // 标记年份
        year.append("text")
            .attr("x", -5)
            .attr("y", -5)
            .attr("font-weight", "bold")
            .attr("text-anchor", "end")
            .text(([key]) => key)

        // 添加日期
        year.append("g")
            .attr("text-anchor", "end")
            .selectAll("text")
            .data(d3.range(7).map((i) => new Date(1995, 0, i)))
            .join("text")
            .attr("x", -5)
            .attr("y", (d) => (countDay(d) + 0.5) * cellSize)
            .attr("dy", "0.31em")
            .text(formatDay)

        // 填格子
        year.append("g")
            .selectAll("rect")
            .data(([, values]) => values)
            .enter()
            .append("rect")
            .attr("width", 1.7)
            .attr("height", function (d) {
                return d.value * (125 / max)
            })
            .attr("x", function (d, i) {
                return i * 2.2
            })
            .attr("y", function (d) {
                return d.value * -(125 / max)
            })
            // .attr("fill", "#eee")
            .attr("fill", (d) => color(d.value))
            .on("mouseover", (d) => getDays(d))
        // .transition().duration(1000)
        //   .attr("fill", d => color(d.value))

        const month = year
            .append("g")
            .selectAll("g")
            .data(([, values]) =>
                d3.utcMonths(
                    d3.utcMonth(values[0].date),
                    values[values.length - 1].date
                )
            )
            .join("g")

        month
            .filter((d, i) => i)
            .append("path")
            .attr("fill", "none")
            .attr("stroke", "#fff")
            .attr("stroke-width", 3)
            .attr("d", pathMonth)

        month
            .append("text")
            .attr(
                "x",
                (d) =>
                    timeWeek.count(d3.utcYear(d), timeWeek.ceil(d)) * cellSize +
                    2
            )
            .attr("y", -5)
            .text(formatMonth)

        const day_this_year = svg
            .append("rect")
            .attr("width", cellSize - 1)
            .attr("height", cellSize - 1)
            .attr("x", -100)
            .attr("stroke", "#000")
            .attr("stroke-width", 2)
            .attr("fill", "none")

        function getDays(d) {
            var date = d.date,
                value = d.value
            console.log(date, value)

            day_this_year.attr(
                "x",
                40.5 + (timeWeek.count(d3.utcYear(date), date) * cellSize + 0.5)
            )
            day_this_year.attr(
                "y",
                height * 0 + cellSize * 1.5 + countDay(date) * cellSize + 0.5
            )
        }
    }
    componentDidMount() {
        // this.drawCalendarHeatmap()
    }
    render() {
        return <div></div>
    }
}
