import React from "react"
import { ResponsiveCalendar } from "@nivo/calendar"

import CommonBox from "@components/common/tools/CommonBox"
import { inject, observer } from "mobx-react"
import { OnlyDarkThemeStoreType } from "@stores/DarkThemeStore"
import { ICalendarHeatmaps } from "@utils/interfaces"

/**
 * 基于SVG的热力日历图
 */

interface ICalendarHeatmapChartProps
    extends OnlyDarkThemeStoreType,
        ICalendarHeatmaps {}
@inject("darkThemeStore")
@observer
export default class CalendarHeatmapChart extends React.Component<
    ICalendarHeatmapChartProps
> {
    static async getServerSideProps({ mobxStore }) {
        return {
            darkThemeStore: mobxStore.darkThemeStore,
        }
    }
    static defaultProps: ICalendarHeatmapChartProps = {
        data: [],
        year: "2020",
    }
    render() {
        const { darkNow } = this.props.darkThemeStore
        const { data, year } = this.props
        return (
            <CommonBox header="活跃图">
                <div
                    style={{
                        width: "100%",
                        overflowX: "auto",
                        height: "200px",
                        padding: "10px",
                    }}
                >
                    <ResponsiveCalendar
                        from={`${year}-01-31`}
                        to={`${year}-12-31`}
                        data={data}
                        emptyColor={
                            darkNow
                                ? "var(--theme-commonbox-content-night)"
                                : "#eeeeee"
                        }
                        monthBorderWidth={2}
                        dayBorderWidth={1}
                        colors={[
                            "#66C2A4",
                            "#41AE76",
                            "#238b45",
                            "#006d2c",
                            "#00441b",
                        ]}
                        theme={{
                            tooltip: {
                                container: {
                                    backgroundColor: darkNow
                                        ? "var(--theme-commonbox-night)"
                                        : "white",
                                },
                            },
                        }}
                    />
                </div>
            </CommonBox>
        )
    }
}
