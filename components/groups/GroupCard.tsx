import React from "react"
import { IGroupCard } from "@utils/interfaces"
import IconFont from "@components/common/tools/IconFont"

const groupCardStyle = require("@styles/components/groups/GroupCard.module.css")

interface IGroudCardProps extends IGroupCard {}

enum TypeColor {
    "official" = "#0abde3",
    "community" = "#ff9f43",
    "person" = "#10ac84",
    "lab" = "#feca57",
}

const TagColors: Array<string> = [
    "#e35f71",
    "#f7c46b",
    "#b7f17f",
    "#b56ffa",
    "#bdf583",
]

export default class GroupCard extends React.Component<IGroudCardProps> {
    static defaultProps: IGroudCardProps = {
        gid: "",
        title: "",
        avatar: "",
        verify: {
            verified: false,
            info: "",
            type: "community",
        },
        email: "",
        address: "",
        tags: [],
        description: "",
    }
    render() {
        const {
            gid,
            title,
            avatar,
            verify,
            email,
            address,
            tags,
            description,
        } = this.props
        return (
            <div className={groupCardStyle.content}>
                <div className={groupCardStyle.avatar}>
                    <img
                        src={avatar}
                        alt="avatar"
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                        }}
                    />
                    {verify.verified && (
                        <IconFont
                            type="nucers-vip"
                            className={groupCardStyle.vip}
                            style={{ color: TypeColor[verify.type] }}
                            title={verify.info}
                        />
                    )}
                </div>
                <div className={groupCardStyle.title}>『 {title} 』</div>
                <div className={groupCardStyle.gid}>GID {gid}</div>
                <div className={groupCardStyle.verify}>
                    认证信息: {verify.info}
                </div>
                {tags.length !== 0 && (
                    <ul className={groupCardStyle.tags}>
                        {tags.map((item: string, index: number) => (
                            <li
                                key={item}
                                style={{
                                    backgroundColor: TagColors[index],
                                }}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                )}

                <div className={groupCardStyle.description}>{description}</div>
                <div className={groupCardStyle.infos}>
                    <div className={groupCardStyle.info}>联系方式: </div>
                    {email}
                </div>
                <div className={groupCardStyle.infos}>
                    <div className={groupCardStyle.info}>联系地址: </div>
                    {address}
                </div>
            </div>
        )
    }
}
