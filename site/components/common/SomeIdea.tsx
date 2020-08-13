import React from "react"
import dynamic from "next/dynamic"
import CommonBox from "./tools/CommonBox"
import { ICommonMsgs } from "@utils/interfaces"

const MessageListRender = dynamic(import("./MessageListRender"), {
    ssr: false,
})

const ShortMessage = dynamic(import("@components/common/ShortMessage"), {
    ssr: false,
})

interface ISomeIdeaProps {
    ideas: ICommonMsgs
}

/**
 * 一点想法组件
 */
export default class SomeIdea extends React.Component<ISomeIdeaProps> {
    static defaultProps: ISomeIdeaProps = {
        ideas: [],
    }
    render() {
        const { ideas } = this.props
        return (
            <CommonBox header="一点想法">
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        marginTop: "-1px",
                    }}
                >
                    <ShortMessage msgtype="idea" />
                    <MessageListRender msgtype="idea" datas={ideas} />
                </div>
            </CommonBox>
        )
    }
}
