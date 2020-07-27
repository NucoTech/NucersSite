import React from "react"
import { Controlled as CodeMirror } from "react-codemirror2"
import { injectCSSFromCDN } from "@utils/utils"

import "codemirror/lib/codemirror"
// 配置智能提示
import "codemirror/addon/selection/active-line"
import "codemirror/addon/hint/show-hint"

import "codemirror/addon/hint/javascript-hint"
import "codemirror/addon/hint/css-hint"
import "codemirror/addon/hint/html-hint"
import "codemirror/addon/hint/anyword-hint"

// 配置语言支持
import "codemirror/mode/javascript/javascript"
import "codemirror/mode/go/go"
import "codemirror/mode/xml/xml"
import "codemirror/mode/clike/clike"
import "codemirror/mode/css/css"
import "codemirror/mode/python/python"
import "codemirror/mode/sql/sql"
import "codemirror/mode/rust/rust"

// 配置快捷键支持
import "codemirror/keymap/sublime"

interface ICodeMirrorProps {}

interface ICodeMirrorStates {
    value: string
    mode: string
    modes: Array<Array<string>>
}

/**
 * 考虑code页面直接可导入修改代码，后期网页运行？
 */
export default class CodeMirrorEditor extends React.Component<
    ICodeMirrorProps,
    ICodeMirrorStates
> {
    constructor(props: ICodeMirrorProps) {
        super(props)
        this.state = {
            value: "// Nucers在线编辑器",
            mode: "text/javascript",
            modes: [
                ["text/javascript", "JavaScript"],
                ["text/x-csrc", "C"],
                ["text/x-x-c++src", "C++"],
                ["text/x-csharp", "C#"],
                ["text/x-java", "Java"],
                ["text/x-rustsrc", "Rust"],
                ["text/x-go", "Go"],
                ["text/css", "CSS"],
                ["text/x-scss", "Scss"],
                ["text/x-less", "Less"],
                ["text/x-python", "Python"],
                ["text/x-julia", "Julia"],
                ["text/x-sql", "SQL"],
                ["text/x-octave", "Octave/Matlab"],
                ["text/x-mathematica", "Mathematica"],
                ["text/x-common-lisp", "Common Lisp"],
                ["text/x-vhdl", "VHDL"],
                ["text/x-cmake", "CMake"],
            ],
        }
        // 注入样式
        injectCSSFromCDN([
            "https://cdn.jsdelivr.net/npm/codemirror@5.56.0/lib/codemirror.css",
            "https://cdn.jsdelivr.net/npm/codemirror@5.56.0/theme/dracula.css",
            "https://cdn.jsdelivr.net/npm/codemirror@5.56.0/addon/hint/show-hint.css",
            "/css/customcodemirror.css",
        ])
    }
    // render之前插入
    render() {
        const { mode, value, modes } = this.state
        return (
            <div
                style={{
                    fontSize: "20px",
                }}
            >
                <div
                    style={{
                        backgroundColor: "#282a36",
                        height: "40px",
                        color: "white",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        fontSize: "15px",
                    }}
                >
                    <div
                        style={{
                            margin: "0 10px",
                        }}
                    >
                        选择语言类型:
                    </div>
                    <select
                        onChange={(e) =>
                            this.setState({
                                mode: e.target.value,
                            })
                        }
                    >
                        {modes.map((item: Array<string>) => (
                            <option key={item[0]} value={item[0]}>
                                {item[1]}
                            </option>
                        ))}
                    </select>
                </div>
                <CodeMirror
                    options={{
                        mode: mode,
                        theme: "dracula",
                        lineNumbers: true,
                        lineWrapping: true,
                        tabSize: 2,
                        styleActiveLine: true,
                        autoFocus: true,
                        extraKeys: { Alt: "autocomplete" },
                        fullScreen: true,
                    }}
                    value={value}
                    onBeforeChange={(editor, data, value) => {
                        this.setState({ value })
                    }}
                    onChange={(editor, data, value) => {
                        this.setState({
                            value,
                        })
                    }}
                />
            </div>
        )
    }
}
