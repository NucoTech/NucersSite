import Document, { Html, Head, Main, NextScript } from "next/document"

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
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
