import React from "react"
import CommonBox from "./CommonBox"
const newersStyle = require("@styles/components/common/Newers.module.css")
export interface IUser {
    name: string
    uid: string
    avatar: string
}

interface INewersProps {
    newers?: Array<IUser>
}

/**
 * 新加入成员组件，组件复用
 */
export default class Newers extends React.Component<INewersProps> {
    static defaultProps: INewersProps = {
        newers: [],
    }
    render() {
        const { newers } = this.props
        return (
            <CommonBox header="新成员">
                <ul className={newersStyle.gridAvatar}>
                    {newers &&
                        newers.map((item: IUser) => (
                            <li key={item.uid}>
                                <a
                                    href={`http://localhost:3000/u/${item.uid}`}
                                    title={item.name}
                                >
                                    <img
                                        src={item.avatar}
                                        width="50px"
                                        height="50px"
                                    />
                                </a>
                            </li>
                        ))}
                </ul>
            </CommonBox>
        )
    }
}
