import { useStaticRendering } from "mobx-react"

const isServer: boolean = typeof window === "undefined"
useStaticRendering(isServer)

let store: any = null

import DarkThemeStore from "./DarkThemeStore"
import AuthenticatedStore from "./AuthenticatedStore"

/**
 * 初始化store
 * @param initialData 可选
 */
export default function initializeStore(initialData = {}) {
    if (isServer) {
        return {
            darkThemeStore: new DarkThemeStore(),
            authenticatedStore: new AuthenticatedStore(),
        }
    }
    if (store === null) {
        store = {
            darkThemeStore: new DarkThemeStore(),
            authenticatedStore: new AuthenticatedStore(),
        }
    }
    return store
}
