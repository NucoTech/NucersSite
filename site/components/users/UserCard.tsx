import React from "react"
import IconFont from "@components/common/tools/IconFont"
import { OnlyDarkThemeStoreType } from "@stores/DarkThemeStore"
import { inject, observer } from "mobx-react"
import BackSocialIcon from "@components/common/tools/BackSocialIcon"
import { UserSocialMocks } from "@mocks/datas"
import AdsSide from "@components/common/AdsSide"

const userCardStyles = require("@styles/components/users/UserCard.module.css")

export interface UserSocialType {
    type:
        | "github"
        | "gitee"
        | "segmentfault"
        | "npm"
        | "leetcode"
        | "zhihu"
        | "stackoverflow"
        | "gitlab"
        | "juejin"
        | "bilibili"
        | "csdn"
    url: string
}

interface IUserCardProps extends OnlyDarkThemeStoreType {
    uid: string
}

interface IUserCardStates {
    social: Array<UserSocialType>
}

@inject("darkThemeStore")
@observer
export default class UserCard extends React.Component<
    IUserCardProps,
    IUserCardStates
> {
    static VIPColor: Map<string, string> = new Map<string, string>([
        ["official", "#0abde3"],
        ["community", "#ff9f43"],
        ["person", "#10ac84"],
        ["lab", "#feca57"],
    ])

    constructor(props: IUserCardProps) {
        super(props)
        this.state = {
            social: [],
        }
    }

    static async getServerSideProps({ mobxStore }) {
        return {
            darkThemeStore: mobxStore.darkThemeStore,
        }
    }
    componentDidMount() {
        this.setState({
            social: UserSocialMocks,
        })
    }
    render() {
        const { darkNow } = this.props.darkThemeStore
        const { social } = this.state
        return (
            <div
                style={{
                    backgroundColor: darkNow
                        ? "var(--theme-commonbox-night)"
                        : "white",
                    color: darkNow ? "white" : "",
                }}
                className={userCardStyles.content}
            >
                <div className={userCardStyles.avatar}>
                    <img
                        alt="avatar"
                        src="https://pic1.zhimg.com/v2-3711565b5584098ca748b50be91acdf5_xl.jpg"
                    />
                    <IconFont
                        className={userCardStyles.vip}
                        type="nucers-vip"
                        style={{
                            color: "#10ac84",
                        }}
                    />
                </div>

                <div className={userCardStyles.nickname}>nickname</div>
                <div className={userCardStyles.vipinfo}>
                    认证信息: Nucers社区联合创始人
                </div>
                {social.length !== 0 && (
                    <ul className={userCardStyles.social}>
                        {social.map((item: UserSocialType) => (
                            <li
                                key={item.type}
                                onClick={() => window.open(item.url, "_blank")}
                                title={item.type}
                                style={{
                                    cursor: "pointer",
                                }}
                            >
                                <BackSocialIcon type={item.type} />
                            </li>
                        ))}
                    </ul>
                )}

                <div className={userCardStyles.slogan}>
                    这是个人签名的区域啊
                </div>

                <div className={userCardStyles.follow}>
                    <div className={userCardStyles.focus}>
                        <div>Following</div>
                        <div className={userCardStyles.followvalue}>32423</div>
                    </div>
                    <div className={userCardStyles.follower}>
                        <div>Followers</div>
                        <div className={userCardStyles.followvalue}>234234</div>
                    </div>
                </div>
                {/* <div>个人成就</div> */}
            </div>
        )
    }
}
