import React from "react"
import { observer, inject } from "mobx-react"
import { OnlyDarkThemeStoreType } from "backup/stores/DarkThemeStore"

const clockStyle = require("@styles/components/common/Clock.module.css")

interface ClockProps extends OnlyDarkThemeStoreType {}

interface ClockStates {
    now: string
}

@inject("darkThemeStore")
@observer
export default class Clock extends React.Component<ClockProps, ClockStates> {
    static async getServerSideProps({ mobxStore }) {
        return {
            darkThemeStore: mobxStore.datkThemeStore,
        }
    }
    constructor(props: ClockProps) {
        super(props)
        this.state = {
            now: "03:15:15",
        }
    }
    countTime = () => {
        const now: Date = new Date()
        const hour = now.getHours()
        const minute = now.getMinutes()
        const second = now.getSeconds()
        document.getElementById(
            "clock-hour"
        ).style.transform = `rotate(${((hour - 12) / 12) * 360 - 90}deg)`
        document.getElementById(
            "clock-minute"
        ).style.transform = `rotate(${(minute / 60) * 360 - 90}deg)`
        document.getElementById(
            "clock-second"
        ).style.transform = `rotate(${(second / 60) * 360 - 90}deg)`

        const time = `${hour > 9 ? hour : "0" + hour}:${
            minute > 9 ? minute : "0" + minute
        }:${second > 9 ? second : "0" + second}`

        this.setState({
            now: time,
        })
    }
    componentDidMount() {
        setInterval(() => {
            this.countTime()
        }, 1000)
    }
    render() {
        const { now } = this.state
        const { darkNow } = this.props.darkThemeStore
        return (
            <div
                className={
                    darkNow ? clockStyle.contentDark : clockStyle.contentLight
                }
            >
                <span id="clock-second" className={clockStyle.second}></span>
                <span id="clock-minute" className={clockStyle.minute}></span>
                <span id="clock-hour" className={clockStyle.hour}></span>
                <span className={clockStyle.dot}></span>

                <span className={clockStyle.scale1}></span>
                <span className={clockStyle.scale2}></span>
                <span className={clockStyle.scale3}></span>
                <span className={clockStyle.scale4}></span>
                <span className={clockStyle.scale5}></span>
                <span className={clockStyle.scale6}></span>
                <span className={clockStyle.scale7}></span>
                <span className={clockStyle.scale8}></span>
                <span className={clockStyle.scale9}></span>
                <span className={clockStyle.scale10}></span>
                <span className={clockStyle.scale11}></span>
                <span className={clockStyle.scale12}></span>

                <span className={clockStyle.hour12}>12</span>
                <span className={clockStyle.hour3}>3</span>
                <span className={clockStyle.hour6}>6</span>
                <span className={clockStyle.hour9}>9</span>

                <span className={clockStyle.now}>{now}</span>
            </div>
        )
    }
}
