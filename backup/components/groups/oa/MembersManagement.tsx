import React from "react"
import { Table, Space } from "antd"

interface IMembersManagementProps {
    gid: string
}

const MembersColumns: Array<any> = [
    {
        title: "成员ID",
        dataIndex: "uid",
        key: "uid",
    },
    {
        title: "成员名",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "加入时间",
        dataIndex: "joinTime",
        key: "joinTime",
    },
    {
        title: "主页地址",
        dataIndex: "profile",
        key: "profile",
    },
    {
        title: "操作",
        key: "actions",
        render: () => (
            <Space>
                <a>移出组织</a>
            </Space>
        ),
    },
]

export default class MembersManagement extends React.Component<
    IMembersManagementProps
> {
    render() {
        return (
            <div>
                <Table columns={MembersColumns} bordered />
            </div>
        )
    }
}
