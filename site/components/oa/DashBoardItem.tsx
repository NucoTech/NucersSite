import React from "react"

const dashBoardItemStyle = require("@styles/components/oa/DashBoardItem.module.css")

interface IDashBoardItemProps {
    icon: any
    name: string
    url: string
}

export default class DashBoardItem extends React.Component<
    IDashBoardItemProps
> {
    render() {
        const { icon, name, url } = this.props
        return (
            <div
                className={dashBoardItemStyle.item}
                onClick={() => {
                    window.open(url, "_self")
                }}
            >
                <div>{icon}</div>
                <div>{name}</div>
            </div>
        )
    }
}
