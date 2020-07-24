import App from "next/app"

// 顶层数据注入
import { Provider } from "mobx-react"
import initializeStore from "../stores/stores"
import LocalStatesInjectBox from "@components/common/LocalStatesInjectBox"

// 全局样式
import "@styles/global.css"

// 在此考虑引入组件解决本地夜间模式免去切换的问题
class MyApp extends App {
    mobxStore = {}

    static async getInitialProps(appContext: any) {
        const mobxStore = initializeStore()
        appContext.ctx.mobxStore = mobxStore
        const appProps = await App.getInitialProps(appContext)
        return {
            ...appProps,
            initialMobxState: mobxStore,
        }
    }

    constructor(props) {
        super(props)
        const isServer: boolean = typeof window === "undefined"
        this.mobxStore = isServer
            ? props.initialMobxState
            : initializeStore(props.initialMobxState)
    }

    render() {
        const { Component, pageProps } = this.props
        return (
            <Provider {...this.mobxStore}>
                <LocalStatesInjectBox>
                    <Component {...pageProps} />
                </LocalStatesInjectBox>
            </Provider>
        )
    }
}

export default MyApp
