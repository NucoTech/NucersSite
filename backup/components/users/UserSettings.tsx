import React from "react"
import { IUserSocials, IUserVerify } from "@utils/interfaces"

interface IUserSettingsProps {
    avatar: string
    name: string
    gid: string
    slogan: string
    socials: IUserSocials
    verify: IUserVerify
}

const UserSocialMocks = [
    { type: "github" },
    { type: "gitee" },
    { type: "segmentfault" },
    { type: "npm" },
    { type: "leetcode" },
    { type: "zhihu", url: "#" },
    { type: "stackoverflow" },
    { type: "gitlab" },
    { type: "juejin" },
    { type: "bilibili" },
    { type: "csdn" },
]

export default class UserSettings extends React.Component<IUserSettingsProps> {
    render() {
        return (
            <div>
                <div>用户头像</div>
                <div>用户ID</div>
                <div>用户昵称</div>
                <div>用户slogan</div>
                <div>用户社交媒体</div>
                {/* {UserSocialMocks.map(item => (
                    <div key={item.type}>
                        <label>{item.type}</label>
                        <input placeholder={item.type} />
                    </div>
                ))} */}
                <div>用户认证</div>
            </div>
        )
    }
}
