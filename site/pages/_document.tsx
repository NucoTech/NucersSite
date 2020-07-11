import Document, { Html, Head, Main, NextScript } from "next/document"
import { isNightNow } from "@utils/utils"

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
                            ? ""
                            : "var(--theme-bg-color-night)",
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
