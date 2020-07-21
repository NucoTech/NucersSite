import Document, { Html, Head, Main, NextScript } from "next/document"
import { isMemorizedDays, isNightNow } from "@utils/utils"

// 全局的样式手动修改并没有做
class MyDocument extends Document {
    static async getInitialProps(context) {
        const componentProps = await Document.getInitialProps(context)
        return {
            ...componentProps,
        }
    }

    render() {
        return (
            <Html>
                <Head></Head>
                <body
                    style={{
                        backgroundColor: !isNightNow()
                            ? "var(--theme-bg-color)"
                            : "var(--theme-bg-color-night)",
                        filter: isMemorizedDays().is ? "grayscale(1)" : "",
                        WebkitFilter: isMemorizedDays().is
                            ? "grayscale(1)"
                            : "",
                    }}
                >
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
