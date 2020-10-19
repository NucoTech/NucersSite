import React, { useState } from "react"
import ReactWordCloud from "react-wordcloud"
import { IWordClouds, IWordCloud } from "@/utils/interfaces"
import ContentBox from "../common/ContentBox/ContentBox"

interface IWordCloudProps {
    words: IWordClouds
}

/**
 * 词云组件
 */
export default ({ words = [{ text: "", value: 0 }] }: IWordCloudProps) => {
    const [wordsSizeMap, setWordsSizeMap] = useState(new Map<string, number>())

    const getCallback = (callbackName: string) => (word: any, event: any) => {
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
                : Math.floor((wordsSizeMap.get(word.text) as number) * 32) +
                      "px",
        )
        dom.setAttribute("text-decoration", isActive ? "underline" : "")
    }
    React.useEffect(() => {
        let wordsArray: Array<number> = words.map((item: IWordCloud) => {
            return item.value
        })
        let wordsMap: Map<string, number> = new Map<string, number>()
        words.forEach((item: IWordCloud) => {
            wordsMap.set(item.text, item.value)
        })
        let wordsSizeMap: Map<string, number> = new Map<string, number>()
        for (let item of wordsMap.keys()) {
            wordsSizeMap.set(
                item,
                (wordsMap.get(item) as number) / Math.max(...wordsArray),
            )
        }
        setWordsSizeMap(wordsSizeMap)
    }, [])
    return (
        <ContentBox header="热门标签">
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
                        onWordClick: getCallback("onWordClick"),
                        onWordMouseOver: getCallback("onWordMouseOver"),
                        onWordMouseOut: getCallback("onWordMouseOut"),
                    }}
                    options={{
                        rotations: 3,
                        rotationAngles: [0, 90],
                        enableTooltip: false,
                    }}
                />
            </div>
        </ContentBox>
    )
}
