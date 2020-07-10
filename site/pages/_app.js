import App from "next/app"
// 全局样式
import "@styles/global.css"

const Container = ({ Component, pageProps }) => {
    return (
        <Component {...pageProps} />
    )
}

Container.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);
    return {
        ...appProps,
    };
}
export default Container;
