import React from "react"
const Vditor = require("vditor")

interface IMdRendererProps {
    content: string
}

interface IMdRendererStates {
    content: string
}

/**
 * Markdown文件渲染组件
 */
export default class MarkdownRenderer extends React.Component<
    IMdRendererProps,
    IMdRendererStates
> {
    constructor(props: IMdRendererProps) {
        super(props)
        this.state = {
            content: this.props.content || "",
        }
    }
    private nucersMdRenderer = React.createRef<HTMLDivElement>()
    componentDidMount() {
        const { content } = this.state
        Vditor.preview(this.nucersMdRenderer.current, content)
    }
    render() {
        return <div id="nucers-md-renderer" ref={this.nucersMdRenderer}></div>
    }
}
