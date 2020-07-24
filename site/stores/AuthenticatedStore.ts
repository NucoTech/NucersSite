import { observable, action } from "mobx"
const Cookies = require("js-cookie")

class AuthenticatedStore {
    // 认证状态存储
    @observable authed: boolean = false
    fetchAuthed = () => {
        // 调用此函数登录
    }
    @action setAuthed = () => {
        // 设置认证态
    }
}

export default AuthenticatedStore
