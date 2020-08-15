import React from "react"
const commonListStyle = require("@styles/components/common/CommonList.module.css")
import CommonBox from "../tools/CommonBox"
import { ICommonNews, ICommonNewss } from "@utils/interfaces"

interface SchoolAcademicActsProps {
    acts: ICommonNewss
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
                {acts.length !== 0 && (
                    <ol className={commonListStyle.ol}>
                        {acts.map((item: ICommonNews) => (
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
                )}
                {acts.length === 0 && (
                    <div
                        style={{
                            width: "100%",
                            padding: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        暂无数据
                    </div>
                )}
            </CommonBox>
        )
    }
}
