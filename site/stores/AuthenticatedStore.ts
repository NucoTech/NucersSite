import { observable, action } from "mobx"
const Cookies = require("js-cookie")

interface AuthenticatedType {
    authed?: boolean
    uid?: string
    token?: string
    utype?: "user" | "group"
    setLocalAuthed?: (uid: string, utype: "user" | "group") => {}
}

export interface AuthenticatedStoreType {
    authenticatedStore?: AuthenticatedType
}

class AuthenticatedStore {
    // 认证状态存储
    @observable authed: boolean = false
    @observable uid: string = ""
    @observable token: string = ""
    @observable utype: "user" | "group" = null
    @action setLocalAuthed = (uid: string, utype: "user" | "group") => {
        this.authed = true
        this.uid = uid
        this.utype = utype
    }
}

export default AuthenticatedStore
