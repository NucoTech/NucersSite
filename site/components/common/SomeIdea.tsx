import React from "react"
import CommonBox from "./CommonBox"
import dynamic from "next/dynamic"

const ShortMessage = dynamic(import("@components/common/ShortMessage"), {
    ssr: false,
})
/**
 * 一点想法组件
 */
export default class SomeIdea extends React.Component {
    render() {
        return (
            <CommonBox header="一点想法">
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                    }}
                >
                    <ShortMessage type="idea" />
                    <ul>
                        <li>xxx said: xxxxxx</li>
                        <li>xxx said: xxxxxx</li>
                        <li>xxx said: xxxxxx</li>
                        <li>xxx said: xxxxxx</li>
                        <li>xxx said: xxxxxx</li>
                    </ul>
                </div>
            </CommonBox>
        )
    }
}
