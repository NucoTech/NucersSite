import React from "react"
import ReactWordCloud from "react-wordcloud"
import CommonBox from "@components/common/tools/CommonBox"
import { IWordClouds, IWordCloud } from "@utils/interfaces"

interface IWordCloudProps {
    words: IWordClouds
}

interface IWordCloudStates {
    wordsSizeMap: Map<string, number>
}

/**
 * 词云组件
 */
export default class WordCloud extends React.Component<
    IWordCloudProps,
    IWordCloudStates
> {
    constructor(props: IWordCloudProps) {
        super(props)
        this.state = {
            wordsSizeMap: new Map<string, number>(),
        }
    }
    static defaultProps: IWordCloudProps = {
        words: [
            {
                text: "",
                value: 0,
            },
        ],
    }

    componentDidMount() {
        const { words } = this.props
        let wordsArray: Array<number> = words.map((item: IWordCloud) => {
            return item.value
        })
        let wordsMap: Map<string, number> = new Map<string, number>()
        words.forEach((item: IWordCloud) => {
            wordsMap.set(item.text, item.value)
        })
        let wordsSizeMap: Map<string, number> = new Map<string, number>()
        for (let item of wordsMap.keys()) {
            wordsSizeMap.set(item, wordsMap.get(item) / Math.max(...wordsArray))
        }
        this.setState({
            wordsSizeMap,
        })
    }

    getCallback = (callbackName: string) => (word: any, event: any) => {
        const { wordsSizeMap } = this.state
        const isActive = callbackName !== "onWordMouseOut"
        const dom = event.target
        dom.addEventListener("click", () => {
            if (isActive) {
                window.open(`${location.href}s?tags=${word.text}`, "_blank")
            }
        })
        // 设置不同元素的大小
        dom.setAttribute(
            "font-size",
            isActive
                ? "300%"
                : Math.floor(wordsSizeMap.get(word.text) * 32) + "px"
        )
        dom.setAttribute("text-decoration", isActive ? "underline" : "")
    }

    render() {
        const { words } = this.props
        return (
            <CommonBox header="标签词云">
                <div
                    style={{
                        height: "200px",
                        width: "100%",
                        padding: 0,
                    }}
                >
                    <ReactWordCloud
                        words={words}
                        callbacks={{
                            onWordClick: this.getCallback("onWordClick"),
                            onWordMouseOver: this.getCallback(
                                "onWordMouseOver"
                            ),
                            onWordMouseOut: this.getCallback("onWordMouseOut"),
                        }}
                        options={{
                            rotations: 3,
                            rotationAngles: [0, 90],
                            enableTooltip: false,
                        }}
                    />
                </div>
            </CommonBox>
        )
    }
}
