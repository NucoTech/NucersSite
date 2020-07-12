import React from "react"
import Vditor from "vditor/dist/method.min"
import { isNightNow } from "@utils/utils"

interface IMdRendererProps {
    content: string
}

/**
 * Markdown文件渲染组件
 */
export default class MarkdownRenderer extends React.Component<
    IMdRendererProps
> {
    constructor(props: IMdRendererProps) {
        super(props)
    }
    private $nucersMdRenderer = React.createRef<HTMLDivElement>()
    componentDidMount() {
        const { content } = this.props
        // 需要自定义写渲染器
        // 需要自定义渲染风格
        Vditor.preview(this.$nucersMdRenderer.current, content, {
            anchor: 2,
            theme: {
                current: !isNightNow() ? "light" : "dark",
                // 下面是自定义主题的地址
                path: "http://localhost:3000/css"
            },
            hljs: {
                enable: true,
                style: !isNightNow() ? "igor" : "monokai",
                lineNumber: true
            }
        })
    }
    render() {
        return <div id="nucers-md-renderer" ref={this.$nucersMdRenderer}></div>
    }
}
