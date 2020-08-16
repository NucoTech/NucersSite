import React from "react"
import { AuthenticatedStoreType } from "@stores/AuthenticatedStore"
import { inject, observer } from "mobx-react"

/**
 * 临时设置登录认证按钮
 */
@inject("authenticatedStore")
@observer
export default class TestSetBtn extends React.Component<
    AuthenticatedStoreType
> {
    static async getServerSideProps({ mobxStore }) {
        return {
            authenticatedStore: mobxStore.authenticatedStore,
        }
    }
    render() {
        const {
            utype,
            uid,
            authed,
            setLocalAuthed,
        } = this.props.authenticatedStore
        return (
            <div
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                }}
            >
                <button
                    onClick={() => {
                        setLocalAuthed("u0", "user")
                        sessionStorage.setItem("uid", "u0")
                        console.log(utype, uid, authed)
                        location.reload()
                    }}
                >
                    设置合法user账号测试
                </button>
                <button
                    onClick={() => {
                        setLocalAuthed("g0", "group")
                        sessionStorage.setItem("uid", "g0")
                        console.log(utype, uid, authed)
                    }}
                >
                    设置合法group账号测试
                </button>
            </div>
        )
    }
}
