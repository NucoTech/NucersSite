import React from "react"
import { IGroupMembers, IGroupMember } from "@utils/interfaces"

const groupCardStyle = require("@styles/components/groups/GroupCard.module.css")

interface IGroupMembersProps extends IGroupMembers {}

export default class GroupMembers extends React.Component<IGroupMembersProps> {
    static defaultProps: IGroupMembersProps = {
        members: [],
    }
    render() {
        const { members } = this.props
        return (
            <div className={groupCardStyle.members}>
                <div className={groupCardStyle.membersTitle}>组织成员</div>
                {members.length !== 0 && (
                    <ul className={groupCardStyle.memberItem}>
                        {members.map((item: IGroupMember) => (
                            <li key={item.uid}>
                                <img
                                    src={item.avatar}
                                    alt="avatar"
                                    title={item.name}
                                    width="100%"
                                    height="100%"
                                />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        )
    }
}
