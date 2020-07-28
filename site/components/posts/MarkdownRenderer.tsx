import React from "react"
import Vditor from "vditor/dist/method.min"
import { OnlyDarkThemeStoreType } from "stores/DarkThemeStore"
import { inject, observer } from "mobx-react"

interface IMdRendererProps extends OnlyDarkThemeStoreType {
    content: string
}

/**
 * Markdown文件渲染组件
 */
@inject("darkThemeStore")
@observer
export default class MarkdownRenderer extends React.Component<
    IMdRendererProps
> {
    constructor(props: IMdRendererProps) {
        super(props)
    }
    private $nucersMdRenderer = React.createRef<HTMLDivElement>()
    static async getInitialProps({ mobxStore }) {
        return {
            darkThemeStore: mobxStore.darkThemeStore,
        }
    }
    componentDidMount() {
        const { content } = this.props
        const { darkNow } = this.props.darkThemeStore
        Vditor.preview(this.$nucersMdRenderer.current, content, {
            anchor: 2,
            theme: {
                current: !darkNow ? "light" : "dark",
                path: "/css",
            },
            hljs: {
                enable: true,
                style: !darkNow ? "igor" : "dracula",
                lineNumber: true,
            },
        })
    }

    render() {
        return <div id="nucers-md-renderer" ref={this.$nucersMdRenderer}></div>
    }
}
