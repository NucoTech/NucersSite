import React from "react"
import Vditor from "vditor"
import { isNightNow } from "@utils/utils"

export default class MarkdownEditor extends React.Component {
    componentDidMount() {
        // 引用主题
        const themeLink = document.createElement("link")
        themeLink.rel = "stylesheet"
        themeLink.href = "https://cdn.jsdelivr.net/npm/vditor/dist/index.css"
        document.head.appendChild(themeLink)
        // 暂时未适配图片上传和录音上传
        // 可以考虑新增增图的内容插入
        const vditor = new Vditor("nucers-vditor-editor", {
            minHeight: 500,
            outline: false,
            width: "100%",
            placeholder: "写点什么吧...",
            theme: isNightNow() ? "dark" : "classic",
            toolbar: [
                "emoji",
                "headings",
                "bold",
                "italic",
                "strike",
                "link",
                "|",
                "list",
                "ordered-list",
                "check",
                "outdent",
                "indent",
                "|",
                "quote",
                "line",
                "code",
                "inline-code",
                "insert-before",
                "insert-after",
                "|",
                // "upload",
                // "record",
                "table",
                "|",
                "undo",
                "redo",
                "fullscreen",
                "edit-mode",
                {
                    name: "more",
                    toolbar: [
                        "both",
                        // "code-theme",
                        // "content-theme",
                        // "export",
                        "outline",
                        "preview",
                    ],
                },
            ],
            counter: {
                enable: true,
                type: "markdown",
            },
            preview: {
                delay: 500,
            },
            hint: {
                // at:
            }
        })
    }
    render() {
        return <div id="nucers-vditor-editor"></div>
    }
}
