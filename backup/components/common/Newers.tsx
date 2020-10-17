import React from "react"
import CommonBox from "./tools/CommonBox"
import { INewer, INewers } from "@utils/interfaces"
const newersStyle = require("@styles/components/common/Newers.module.css")

interface INewersProps {
    newers?: INewers
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
                        newers.map((item: INewer) => (
                            <li key={item.uid}>
                                <a
                                    href={`http://localhost:3000/u/${item.uid}`}
                                    title={item.name}
                                >
                                    <img
                                        src={item.avatar}
                                        width="50px"
                                        height="50px"
                                        alt="avatar"
                                    />
                                </a>
                            </li>
                        ))}
                </ul>
            </CommonBox>
        )
    }
}
