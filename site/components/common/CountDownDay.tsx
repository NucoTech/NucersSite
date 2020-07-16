import React from "react"

const countDownDayStyle = require("@styles/components/common/CountDownDay.module.css")

/**
 * @param {string} target // 目标日
 * @param {string} name // 目标名称
 * @param {boolean} continued // 是否持续展示
 */
export interface ICountDownDayProps {
    target: string
    name: string
    continued: boolean
}

interface ICountDownDayStates {
    days: string
    hours: string
    minutes: string
    seconds: string
    msg: string
    over: boolean
}

export default class CountDownDay extends React.Component<
    ICountDownDayProps,
    ICountDownDayStates
> {
    constructor(props: ICountDownDayProps) {
        super(props)
        this.state = {
            days: "00",
            hours: "00",
            minutes: "00",
            seconds: "00",
            msg: "距离还有",
            over: false,
        }
    }
    // 默认props
    static defaultProps: ICountDownDayProps = {
        target: "2020-07-13",
        name: "",
        continued: false,
    }
    go2Target = () => {
        const { target, continued } = this.props
        const targetBefore: number = new Date(`${target} 00:00:00`).getTime()
        const targetAfter: number = new Date(`${target} 23:59:59`).getTime()
        let msg: string = ""
        let days: string = "00"
        let hours: string = "00"
        let minutes: string = "00"
        let seconds: string = "00"
        let over: boolean = false
        if (continued) {
            setInterval(() => {
                const current: number = new Date().getTime()
                let toTarget: number = targetBefore - current
                let afterTarget: number = current - targetAfter
                if (toTarget > 0) {
                    msg = "距离还有"
                    days = Math.floor(toTarget / 1000 / 60 / 60 / 24).toString()
                    hours = Math.floor(
                        (toTarget / 1000 / 60 / 60) % 24
                    ).toString()
                    minutes = Math.floor((toTarget / 1000 / 60) % 60).toString()
                    seconds = Math.floor((toTarget / 1000) % 60).toString()
                    over = false
                } else if (afterTarget > 0) {
                    msg = "距离已过"
                    days = Math.floor(
                        afterTarget / 1000 / 60 / 60 / 24
                    ).toString()
                    hours = Math.floor(
                        (afterTarget / 1000 / 60 / 60) % 24
                    ).toString()
                    minutes = Math.floor(
                        (afterTarget / 1000 / 60) % 60
                    ).toString()
                    seconds = Math.floor((afterTarget / 1000) % 60).toString()
                    over = true
                } else {
                    msg = "正在进行"
                    over = true
                }
                days = days.length === 1 ? `0${days}` : days
                hours = hours.length === 1 ? `0${hours}` : hours
                minutes = minutes.length === 1 ? `0${minutes}` : minutes
                seconds = seconds.length === 1 ? `0${seconds}` : seconds
                this.setState({
                    days,
                    hours,
                    minutes,
                    seconds,
                    over,
                })
            }, 1000)
        } else {
            setInterval(() => {
                const current: number = new Date().getTime()
                let toTarget: number = targetBefore - current
                if (toTarget > 0) {
                    msg = "距离还有"
                    days = Math.floor(toTarget / 1000 / 60 / 60 / 24).toString()
                    hours = Math.floor(
                        (toTarget / 1000 / 60 / 60) % 24
                    ).toString()
                    minutes = Math.floor((toTarget / 1000 / 60) % 60).toString()
                    seconds = Math.floor((toTarget / 1000) % 60).toString()
                    over = false
                } else {
                    over = true
                    return
                }
                days = days.length === 1 ? `0${days}` : days
                hours = hours.length === 1 ? `0${hours}` : hours
                minutes = minutes.length === 1 ? `0${minutes}` : minutes
                seconds = seconds.length === 1 ? `0${seconds}` : seconds
                this.setState({
                    days,
                    hours,
                    minutes,
                    seconds,
                    over,
                })
            }, 1000)
        }
    }
    componentDidMount() {
        this.go2Target()
    }
    render() {
        const { days, hours, minutes, seconds, msg, over } = this.state
        const { name, continued } = this.props
        return (
            <>
                {((!continued && !over) || continued) && (
                    <div className={countDownDayStyle.content}>
                        <div className={countDownDayStyle.detail}>
                            <span className={countDownDayStyle.target}>
                                {name}
                            </span>
                            {msg}
                        </div>
                        <div className={countDownDayStyle.item}>
                            <span>{days}</span>天
                        </div>
                        <div className={countDownDayStyle.item}>
                            <span>{hours}</span>时
                        </div>
                        <div className={countDownDayStyle.item}>
                            <span>{minutes}</span>分
                        </div>
                        <div className={countDownDayStyle.item}>
                            <span>{seconds}</span>秒
                        </div>
                    </div>
                )}
            </>
        )
    }
}
