import React from "react"
import { Controlled as CodeMirror } from "react-codemirror2"
import { injectCSSFromCDN } from "@utils/utils"
import { Button, message } from "antd"
import { saveAs } from "file-saver"

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
}

// 文件类型匹配
const FileSupport: Array<string> = [
    "text/javascript",
    "text/x-csrc",
    "text/x-x-c++src",
    "text/x-csharp",
    "text/x-java",
    "text/x-rustsrc",
    "text/x-go",
    "text/css",
    "text/x-scss",
    "text/x-less",
    "text/x-python",
    "text/x-julia",
    "text/x-sql",
    "text/x-octave",
    "text/x-mathematica",
    "text/x-common-lisp",
    "text/x-vhdl",
    "text/x-cmake",
]
const FileType: Array<string> = [
    "js",
    "c",
    "cpp",
    "cs",
    "java",
    "rs",
    "go",
    "css",
    "scss",
    "less",
    "py",
    "Jl",
    "sql",
    "m",
    "m",
    "lsp",
    "vhdl",
    "CMAKE",
]

const Modes: Array<Array<string>> = [
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
]

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
            value:
                localStorage.getItem("code-editor-code") ||
                "// Nucers在线编辑器",
            mode: localStorage.getItem("code-editor-lang") || "text/javascript",
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
        const { mode, value } = this.state
        return (
            <div
                style={{
                    fontSize: "15px",
                }}
            >
                <div
                    style={{
                        backgroundColor: "#282a36",
                        height: "40px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "13px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                margin: "0 10px",
                                color: "white",
                            }}
                        >
                            选择语言类型:
                        </div>
                        <select
                            onChange={(e) => {
                                localStorage.setItem(
                                    "code-editor-lang",
                                    e.target.value
                                )
                                this.setState({
                                    mode: e.target.value,
                                })
                            }}
                            value={mode}
                        >
                            {Modes.map((item: Array<string>) => (
                                <option key={item[0]} value={item[0]}>
                                    {item[1]}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            margin: "auto 10px",
                        }}
                    >
                        <input
                            type="file"
                            placeholder="文件"
                            accept={FileType.map(
                                (item: string) => `.${item}`
                            ).join(", ")}
                            style={{
                                color: "white",
                            }}
                            onChange={(e) => {
                                if (e.target.files.length === 0) {
                                    message.error("请选择读取的文件！")
                                    return
                                }
                                const reader = new FileReader()
                                reader.readAsText(e.target.files[0])
                                const filename = e.target.files[0].name
                                reader.onerror = () => {
                                    message.error(`文件${filename}读取错误！`)
                                }
                                reader.onload = () => {
                                    const suffix: string = filename.match(
                                        /[^\.]\w*$/
                                    )[0]
                                    if (FileType.includes(suffix)) {
                                        const mode: string =
                                            FileSupport[
                                                FileType.indexOf(suffix)
                                            ]
                                        localStorage.setItem(
                                            "code-editor-lang",
                                            mode
                                        )
                                        this.setState({
                                            mode: mode,
                                            value: reader.result.toString(),
                                        })
                                        message.success(
                                            `文件${filename}读取成功！`
                                        )
                                    } else {
                                        message.warning(
                                            "当前文件类型不受语法支持！"
                                        )
                                    }
                                }
                            }}
                        />
                        <Button
                            type="primary"
                            onClick={() => {
                                try {
                                    let isFileSaverSupported = !!new Blob()
                                    const blob = new Blob([value], {
                                        type: "text/plain; charset=utf-8",
                                    })

                                    const filename: string = `NucersCode.${
                                        FileType[FileSupport.indexOf(mode)]
                                    }`
                                    saveAs(blob, filename)
                                    message.success(`导出文件${filename}成功`)
                                } catch (e) {
                                    message.error(
                                        "当前浏览器不支持导出代码文件！"
                                    )
                                }
                            }}
                        >
                            导出
                        </Button>
                    </div>
                </div>
                <CodeMirror
                    options={{
                        mode: mode,
                        theme: "dracula",
                        lineNumbers: true,
                        lineWrapping: true,
                        tabSize: 4,
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
                        localStorage.setItem("code-editor-code", value)
                        this.setState({
                            value,
                        })
                    }}
                />
            </div>
        )
    }
}
