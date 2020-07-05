import React from "react"
import Vditor from "vditor"
import "vditor/dist/index.css"

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
    private nucersMdRenderer = React.createRef<HTMLDivElement>()
    componentDidMount() {
        const { content } = this.props
        // 需要自定义写渲染器
        Vditor.preview(this.nucersMdRenderer.current, content)
    }
    render() {
        return <div id="nucers-md-renderer" ref={this.nucersMdRenderer}></div>
    }
}
