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
import "codemirror/addon/hint/sql-hint"
import "codemirror/addon/hint/anyword-hint"

// 配置语言支持
import "codemirror/mode/javascript/javascript"
import "codemirror/mode/clike/clike"
import "codemirror/mode/css/css"
import "codemirror/mode/go/go"
import "codemirror/mode/python/python"
import "codemirror/mode/julia/julia"
import "codemirror/mode/xml/xml"
import "codemirror/mode/sql/sql"
import "codemirror/mode/rust/rust"
import "codemirror/mode/vhdl/vhdl"
import "codemirror/mode/cmake/cmake"
import "codemirror/mode/commonlisp/commonlisp"
import "codemirror/mode/dart/dart"
import "codemirror/mode/mathematica/mathematica"
import "codemirror/mode/verilog/verilog"
import "codemirror/mode/octave/octave"
import "codemirror/mode/lua/lua"

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
    "text/x-lua",
    "text/x-sql",
    "text/x-octave",
    "text/x-mathematica",
    "text/x-common-lisp",
    "text/x-vhdl",
    "text/x-verilog",
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
    "jl",
    "lua",
    "sql",
    "m",
    "m",
    "lsp",
    "vhdl",
    "v",
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
    ["text/x-lua", "Lua"],
    ["text/x-sql", "SQL"],
    ["text/x-octave", "Octave/Matlab"],
    ["text/x-mathematica", "Mathematica"],
    ["text/x-common-lisp", "Common Lisp"],
    ["text/x-vhdl", "VHDL"],
    ["text/x-verilog", "Verilog"],
    ["text/x-cmake", "CMake"],
]

const initialComments = (mode: string): string => {
    const clike: Array<string> = [
        "text/javascript",
        "text/x-csrc",
        "text/x-x-c++src",
        "text/x-csharp",
        "text/x-java",
        "text/x-rustsrc",
        "text/x-go",
        "text/x-sql",
        "text/css",
        "text/x-scss",
        "text/x-less",
        "text/x-verilog",
    ]
    const clikeComments: string = [
        "/**",
        "* 欢迎使用Nucers在线编辑器",
        "* ",
        "* 请选择合适的语言进行编辑！使用Alt键可以激活部分语言智能提示",
        "* 编辑器支持本地导入代码文件",
        "* 编辑器支持导出代码文件",
        "*/\n",
    ].join("\n")
    const pylike: Array<string> = [
        "text/x-python",
        "text/x-julia",
        "text/x-cmake",
    ]
    const pylikeComments: string = [
        "##",
        "# 欢迎使用Nucers在线编辑器",
        "# ",
        "# 请选择合适的语言进行编辑！使用Alt键可以激活部分语言智能提示",
        "# 编辑器支持本地导入代码文件",
        "# 编辑器支持导出代码文件",
        "#\n",
    ].join("\n")
    if (clike.includes(mode)) {
        return clikeComments
    } else if (pylike.includes(mode)) {
        return pylikeComments
    } else {
        switch (mode) {
            case "text/x-octave": {
                return pylikeComments.replace(/\#/g, "%")
            }
            case "text/x-mathematica": {
                return pylikeComments
                    .replace(/\#/g, "")
                    .split("\n")
                    .map((item: string) => `(* ${item} *)`)
                    .join("\n")
            }
            case "text/x-common-lisp": {
                return pylikeComments.replace(/\#/g, ";;")
            }
            case "text/x-vhdl": {
                return pylikeComments.replace(/\#/g, "--")
            }
            case "text/x-lua": {
                return pylikeComments.replace(/\#/g, "--")
            }
            default: {
                return clikeComments
            }
        }
    }
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
            value:
                localStorage.getItem("code-editor-code") ||
                initialComments(
                    localStorage.getItem("code-editor-lang") ||
                        "text/javascript"
                ),
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

    componentDidMount() {
        const editor = document.getElementsByClassName(
            "CodeMirror"
        )[0] as HTMLDivElement
        editor.style.height = `calc(100vh - ${
            document.getElementById("code-bar").clientHeight
        }px)`
    }

    // 设置编辑器的值
    setValue = (value: any) => {
        localStorage.setItem("code-editor-code", value)
        this.setState({
            value,
        })
    }

    // 设置编辑器语言模式
    setMode = (e: any) => {
        localStorage.setItem("code-editor-lang", e.target.value)
        this.setState({
            mode: e.target.value,
        })
        location.reload()
    }

    // 读取上传文件
    setUpdateFile = (e: any) => {
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
            const suffix: string = filename.match(/[^\.]\w*$/)[0]
            if (FileType.includes(suffix)) {
                const mode: string = FileSupport[FileType.indexOf(suffix)]
                localStorage.setItem("code-editor-lang", mode)
                this.setState({
                    mode: mode,
                    value: reader.result.toString(),
                })
                message.success(`文件${filename}读取成功！`)
            } else {
                message.warning("当前文件类型不受语法支持！")
            }
        }
    }

    // 清除缓存
    clearCache = () => {
        localStorage.removeItem("code-editor-lang")
        localStorage.removeItem("code-editor-code")
        location.reload()
    }

    render() {
        const { mode, value } = this.state
        return (
            <div
                style={{
                    fontSize: "15px",
                }}
            >
                <div
                    id="code-bar"
                    style={{
                        backgroundColor: "#282a36",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "13px",
                        padding: "10px",
                        flexWrap: "wrap",
                        width: "100vw",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            flexWrap: "wrap",
                            padding: "5px 0",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                flexWrap: "wrap",
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
                                    this.setMode(e)
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

                        {/* 本地文件上传 */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                flexWrap: "wrap",
                                padding: "5px 0",
                            }}
                        >
                            <div
                                style={{
                                    margin: "0 10px",
                                    color: "white",
                                }}
                            >
                                打开本地文件:
                            </div>
                            <input
                                id="code-file-update"
                                type="file"
                                accept={FileType.map(
                                    (item: string) => `.${item}`
                                ).join(", ")}
                                style={{
                                    color: "white",
                                }}
                                onChange={(e) => {
                                    this.setUpdateFile(e)
                                }}
                            />
                        </div>
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
                        <Button
                            type="primary"
                            onClick={() => {
                                this.clearCache()
                            }}
                            style={{ marginRight: "20px" }}
                        >
                            清空缓存
                        </Button>
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
                        this.setValue(value)
                    }}
                />
            </div>
        )
    }
}
