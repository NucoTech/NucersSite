import React from "react"
import OABasicBox from "./OABasicBox"
import { Button, Input, Select } from "antd"
const { TextArea } = Input
const { Option } = Select

const supportStyle = require("@styles/components/oa/InfoManagement.module.css")

/**
 * 工单系统
 */
export default class Support extends React.Component {
    render() {
        return (
            <OABasicBox>
                <div className={supportStyle.content}>
                    <div className={supportStyle.title}>Nucers工单系统</div>
                    <div className={supportStyle.item}>
                        <div className={supportStyle.label}>工单标题</div>
                        <Input />
                    </div>
                    <div className={supportStyle.item}>
                        <div className={supportStyle.label}>工单类型</div>
                        <Select defaultValue="ask">
                            <Option value="ask">问题咨询</Option>
                            <Option value="bugs">故障申报</Option>
                            <Option value="plugins">插件业务</Option>
                        </Select>
                    </div>
                    <div className={supportStyle.item}>
                        <div className={supportStyle.label}>问题描述</div>
                        <TextArea
                            autoSize={{
                                minRows: 9,
                                maxRows: 9,
                            }}
                        />
                    </div>
                    <div className={supportStyle.item}>
                        <div className={supportStyle.label}>手机号码</div>
                        <Input placeholder="用于紧急联系" />
                    </div>
                    <div className={supportStyle.bottom}>
                        <Button type="primary">提交工单</Button>
                    </div>
                </div>
            </OABasicBox>
        )
    }
}
