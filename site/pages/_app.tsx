import App from "next/app"

// 顶层数据注入
import { Provider } from "mobx-react"
import initializeStore from "../stores/stores"

// 全局样式
import "@styles/global.css"

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
                <Component {...pageProps} />
            </Provider>
        )
    }
}

export default MyApp

// const Container = ({ Component, pageProps }) => {
//     return (
//         <Component
//             {...pageProps}
//         />
//     )
// }

// Container.getInitialProps = async (appContext) => {
//     const appProps = await App.getInitialProps(appContext)
//     return {
//         ...appProps,
//     }
// }
// export default Container
