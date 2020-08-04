import React from "react"
import dynamic from "next/dynamic"
import CommonBox from "./CommonBox"

const MessageListRender = dynamic(import("./MessageListRender"), {
    ssr: false,
})

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
                        marginTop: "-1px"
                    }}
                >
                    <ShortMessage msgtype="idea" />
                    <MessageListRender msgtype="idea" />
                </div>
            </CommonBox>
        )
    }
}
