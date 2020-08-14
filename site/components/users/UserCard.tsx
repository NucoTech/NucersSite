import React from "react"

import IconFont from "@components/common/tools/IconFont"
import { OnlyDarkThemeStoreType } from "@stores/DarkThemeStore"
import { inject, observer } from "mobx-react"

const userCardStyles = require("@styles/components/users/UserCard.module.css")

import BackSocialIcon from "@components/common/tools/BackSocialIcon"
import AdsSide from "@components/common/AdsSide"
import { IUserSocial, IUserCard } from "@utils/interfaces"

import ClipboardJS from "clipboard"

interface IUserCardProps extends OnlyDarkThemeStoreType, IUserCard {}

@inject("darkThemeStore")
@observer
export default class UserCard extends React.Component<IUserCardProps> {
    static defaultProps: IUserCardProps = {
        uid: "",
        name: "",
        avatar: "",
        verify: {
            verified: false,
            info: "",
        },
        following: "",
        followers: "",
        slogan: "",
        socials: [],
    }

    static async getServerSideProps({ mobxStore }) {
        return {
            darkThemeStore: mobxStore.darkThemeStore,
        }
    }
    render() {
        const { darkNow } = this.props.darkThemeStore
        const {
            uid,
            name,
            avatar,
            verify,
            following,
            followers,
            slogan,
            socials,
        } = this.props
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
                    <img alt="avatar" src={avatar} />
                    {verify.verified && (
                        <IconFont
                            className={userCardStyles.vip}
                            type="nucers-vip"
                            style={{
                                color: "#10ac84",
                            }}
                        />
                    )}
                </div>

                <div className={userCardStyles.nickname}>{name}</div>

                <div className={userCardStyles.uid}>
                    UID <span id="uid">{uid}</span>
                </div>
                {verify.verified && (
                    <div className={userCardStyles.vipinfo}>
                        认证信息: {verify.info}
                    </div>
                )}

                {socials.length !== 0 && (
                    <ul className={userCardStyles.social}>
                        {socials.map((item: IUserSocial) => (
                            <li
                                key={item.type}
                                onClick={() => window.open(item.href, "_blank")}
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

                <div className={userCardStyles.slogan}>{slogan}</div>

                <div className={userCardStyles.follow}>
                    <div className={userCardStyles.focus}>
                        <div>Following</div>
                        <div className={userCardStyles.followvalue}>
                            {following}
                        </div>
                    </div>
                    <div className={userCardStyles.follower}>
                        <div>Followers</div>
                        <div className={userCardStyles.followvalue}>
                            {followers}
                        </div>
                    </div>
                </div>
                {/* <div>个人成就</div> */}
            </div>
        )
    }
}
