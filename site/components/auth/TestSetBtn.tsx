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
    static async getInitialProps({ mobxStore }) {
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
                        setLocalAuthed("g23423423423", "group")
                        sessionStorage.setItem("uid", "g23423423423")
                        console.log(utype, uid, authed)
                    }}
                >
                    设置合法账号测试
                </button>
            </div>
        )
    }
}
