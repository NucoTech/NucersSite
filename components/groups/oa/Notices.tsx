import React from "react"
import { Table, Space, Button, Modal, Input, DatePicker } from "antd"
import TextArea from "antd/lib/input/TextArea"

const { RangePicker } = DatePicker

const noticesStyle = require("@styles/components/groups/oa/InfoManagement.module.css")

const oaBasicStyle = require("@styles/components/groups/oa/OABasic.module.css")

interface INoticesProps {
    gid: string
}

interface INoticesStates {
    modalType: "0" | "1"
    modalTitle: string
    modalMore: string
    modalStart: string
    modalEnd: string
    modalVisible: boolean
    confirmLoading: boolean
}

const NoticeColumns: Array<any> = [
    {
        title: "标题",
        dataIndex: "title",
        key: "title",
    },
    {
        title: "公告ID",
        dataIndex: "id",
        key: "id",
    },
    {
        title: "备注信息",
        dataIndex: "more",
        key: "more",
    },
    {
        title: "开始时间",
        dataIndex: "start",
        key: "start",
    },
    {
        title: "结束时间",
        dataIndex: "end",
        key: "end",
    },
    {
        title: "操作",
        key: "actions",
        render: () => (
            <Space>
                <a>编辑</a>
                <a>删除</a>
            </Space>
        ),
    },
]

export default class Notices extends React.Component<
    INoticesProps,
    INoticesStates
> {
    constructor(props: INoticesProps) {
        super(props)
        this.state = {
            modalType: "0",
            modalTitle: "",
            modalMore: "",
            modalStart: "",
            modalEnd: "",
            modalVisible: false,
            confirmLoading: false,
        }
    }
    updateNotice = () => {
        this.setState({
            modalVisible: false,
        })
    }
    render() {
        const {
            modalType,
            modalTitle,
            modalMore,
            modalStart,
            modalEnd,
            modalVisible,
            confirmLoading,
        } = this.state
        return (
            <div className={noticesStyle.content}>
                <div className={oaBasicStyle.title}>Nucers公告管理</div>
                <div
                    style={{
                        margin: "20px 0",
                        textAlign: "right",
                    }}
                >
                    <Button
                        type="primary"
                        onClick={() => {
                            this.setState({
                                modalTitle: "0",
                                modalVisible: true,
                            })
                        }}
                    >
                        新增公告
                    </Button>
                </div>

                <div
                    style={{
                        width: "100%",
                    }}
                >
                    <Table columns={NoticeColumns} bordered />
                </div>

                <Modal
                    title={modalTitle === "0" ? "新增公告" : "编辑公告"}
                    visible={modalVisible}
                    confirmLoading={confirmLoading}
                    onOk={this.updateNotice}
                    onCancel={() => {
                        this.setState({
                            modalVisible: false,
                        })
                    }}
                    maskClosable={false}
                >
                    <div>
                        标题
                        <Input />
                    </div>
                    <div>
                        备注
                        <Input />
                    </div>
                    <div>
                        内容
                        {/* 在此自行定制 */}
                        <TextArea />
                    </div>
                    <div>
                        有效时间
                        <RangePicker />
                    </div>
                </Modal>
            </div>
        )
    }
}
