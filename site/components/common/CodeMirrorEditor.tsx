import React from "react"
import { UnControlled as CodeMirror } from "react-codemirror2"

import "codemirror/lib/codemirror"

import "codemirror/addon/selection/active-line"
import "codemirror/addon/hint/show-hint"
import "codemirror/addon/hint/javascript-hint"
import "codemirror/addon/hint/css-hint"
import "codemirror/addon/hint/html-hint"
import "codemirror/addon/hint/anyword-hint"

import "codemirror/mode/javascript/javascript"
import "codemirror/mode/go/go"
import "codemirror/mode/xml/xml"
import "codemirror/mode/css/css"
import "codemirror/mode/python/python"


export default class CodeMirrorEditor extends React.Component {
    // render之前插入
    UNSAFE_componentWillMount() {
        const cssLink = document.createElement("link")
        cssLink.rel = "stylesheet"
        cssLink.href =
            "https://cdn.jsdelivr.net/npm/codemirror@5.56.0/lib/codemirror.css"
        document.head.appendChild(cssLink)

        const draculaLink = document.createElement("link")
        draculaLink.rel = "stylesheet"
        draculaLink.href =
            "https://cdn.jsdelivr.net/npm/codemirror@5.56.0/theme/dracula.css"
        document.head.appendChild(draculaLink)

        const hintLink = document.createElement("link")
        hintLink.rel = "stylesheet"
        hintLink.href =
            "https://cdn.jsdelivr.net/npm/codemirror@5.56.0/addon/hint/show-hint.css"
        document.head.appendChild(hintLink)
    }

    render() {
        return (
            <CodeMirror
                className="react-codemirror2"
                options={{
                    mode: {
                        name: "text/javascript",
                    },
                    theme: "dracula",
                    lineNumbers: true,
                    lineWrapping: true,
                    tabSize: 2,
                    styleActiveLine: true,
                    autoFocus: true,
                    extraKeys: { Ctrl: "autocomplete" },
                    fullScreen: true,
                }}
                value="// Hello World"
            />
        )
    }
}
