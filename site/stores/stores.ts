import { useStaticRendering } from "mobx-react"

const isServer: boolean = typeof window === "undefined"
useStaticRendering(isServer)

let store: any = null

import DarkThemeStore from "./DarkThemeStore"

/**
 * 初始化store
 * @param initialData 可选
 */
export default function initializeStore(initialData = {}) {
    if (isServer) {
        return {
            darkThemeStore: new DarkThemeStore(),
            // store的对象新建
        }
    }
    if (store === null) {
        store = {
            darkThemeStore: new DarkThemeStore(),
            // store对象新建
        }
    }
    return store
}
