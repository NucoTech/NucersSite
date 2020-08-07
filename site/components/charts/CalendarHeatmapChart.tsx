import React from "react"
import { ResponsiveCalendar } from "@nivo/calendar"

import CommonBox from "@components/common/CommonBox"
import { inject, observer } from "mobx-react"
import { OnlyDarkThemeStoreType } from "@stores/DarkThemeStore"

const Data = [
    {
        day: "2020-02-07",
        value: 83,
    },
    {
        day: "2020-07-18",
        value: 85,
    },
    {
        day: "2020-11-27",
        value: 213,
    },
    {
        day: "2020-06-05",
        value: 314,
    },
    {
        day: "2020-05-22",
        value: 43,
    },
    {
        day: "2020-07-17",
        value: 45,
    },
]

/**
 * 基于SVG的热力日历图
 */
@inject("darkThemeStore")
@observer
export default class CalendarHeatmapChart extends React.Component<
    OnlyDarkThemeStoreType
> {
    static async getServerSideProps({ mobxStore }) {
        return {
            darkThemeStore: mobxStore.darkThemeStore,
        }
    }
    render() {
        const { darkNow } = this.props.darkThemeStore
        return (
            <CommonBox header="活跃图">
                <div
                    style={{
                        width: "100%",
                        overflowX: "auto",
                        height: "200px",
                        padding: "10px"
                    }}
                >
                    <ResponsiveCalendar
                        from="2020-1-1"
                        to="2020-12-31"
                        data={Data}
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
