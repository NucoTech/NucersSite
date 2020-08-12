import React from "react"
const commonListStyle = require("@styles/components/common/CommonList.module.css")
import CommonBox from "./tools/CommonBox"
import { time } from "console"

interface Acts {
    title: string
    time: string
    href: string
}

interface SchoolAcademicActsProps {
    acts: Array<Acts>
}

export default class SchoolAcademicActs extends React.Component<
    SchoolAcademicActsProps
> {
    static defaultProps: SchoolAcademicActsProps = {
        acts: [],
    }
    render() {
        const { acts } = this.props
        return (
            <CommonBox header="学术活动">
                <ol className={commonListStyle.ol}>
                    {acts.map((item) => (
                        <li key={item.href}>
                            <div className={commonListStyle.ellipsis}>
                                <a href={item.href} title={item.title}>
                                    {item.title}
                                </a>
                            </div>
                            <span className={commonListStyle.time}>
                                {item.time}
                            </span>
                        </li>
                    ))}
                </ol>
            </CommonBox>
        )
    }
}
