import React from "react"

const infoManageMentStyle = require("@styles/components/groups/oa/InfoManagement.module.css")

const oaBasicStyle = require("@styles/components/groups/oa/OABasic.module.css")

import { Input, Button } from "antd"
const { TextArea } = Input

interface IInfoManagementProps {
    gid: string
}

interface IInfoManagementStates {
    name: string
}

export default class InfoManagement extends React.Component<
    IInfoManagementProps,
    IInfoManagementStates
> {
    constructor(props: IInfoManagementProps) {
        super(props)
        this.state = {
            name: "",
        }
    }
    componentDidMount() {
        this.setState({
            name: "Nucers",
        })
    }
    render() {
        const { name } = this.state
        const { gid } = this.props
        return (
            <div className={infoManageMentStyle.content}>
                <div className={oaBasicStyle.title}>{name} 门户信息维护</div>
                <div className={infoManageMentStyle.item}>
                    <div className={infoManageMentStyle.label}>Group id</div>
                    {gid}
                </div>
                <div className={infoManageMentStyle.item}>
                    <div className={infoManageMentStyle.label}>标题</div>
                    <Input placeholder="网站标题" />
                </div>
                <div className={infoManageMentStyle.item}>
                    <div className={infoManageMentStyle.label}>标签</div>
                    <Input placeholder="使用分号( ; )分隔，不超过四个" />
                </div>
                <div className={infoManageMentStyle.item}>
                    <div className={infoManageMentStyle.label}>描述</div>
                    <TextArea
                        placeholder="在此输入网站描述"
                        allowClear
                        autoSize={{
                            minRows: 5,
                            maxRows: 5,
                        }}
                    />
                </div>
                <div className={infoManageMentStyle.item}>
                    <div className={infoManageMentStyle.label}>Email</div>
                    <Input placeholder="在此输入联系邮箱" />
                </div>
                <div className={infoManageMentStyle.item}>
                    <div className={infoManageMentStyle.label}>地址</div>
                    <Input placeholder="在此输入联系地址" />
                </div>
                <div className={infoManageMentStyle.bottom}>
                    <Button type="primary">保存</Button>
                </div>
            </div>
        )
    }
}
