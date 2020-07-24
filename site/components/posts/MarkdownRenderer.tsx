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
                // 下面是自定义主题的地址，上线需要修改
                path: "http://localhost:3000/css",
            },
            hljs: {
                enable: true,
                style: !darkNow ? "igor" : "monokai",
                lineNumber: true,
            },
        })
    }

    componentDidUpdate() {
        // 未解决切换夜间模式的问题
    }

    render() {
        return <div id="nucers-md-renderer" ref={this.$nucersMdRenderer}></div>
    }
}
