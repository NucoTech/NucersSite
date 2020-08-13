import { Button, Form, Input, Select, Steps, message } from "antd"
import React from "react"
import { CheckOutlined } from "@ant-design/icons"
import { IApply4Group } from "@utils/interfaces"
const { Step } = Steps
const { Option } = Select

const apply4GroupStyle = require("@styles/components/groups/Apply4Group.module.css")

interface IApply4GroupProps {}

interface IApply4GroupStates {
    current: number
    values: IApply4Group
    loading: boolean
}

export default class Apply4Group extends React.Component<
    IApply4GroupProps,
    IApply4GroupStates
> {
    constructor(props: IApply4GroupProps) {
        super(props)
        this.state = {
            current: 0,
            values: {
                name: "",
                type: "",
                incharge: "",
                email: "",
                password: "",
                emergency: "",
            },
            loading: false,
        }
    }

    next = () => {
        this.setState({
            current: this.state.current + 1,
        })
    }

    prev = () => {
        this.setState({
            current: this.state.current - 1,
        })
    }

    render() {
        const { current, loading } = this.state
        const {
            name,
            type,
            incharge,
            email,
            password,
            emergency,
        } = this.state.values
        return (
            <div className={apply4GroupStyle.content}>
                <div
                    style={{
                        fontSize: "x-large",
                        fontWeight: 300,
                        marginBottom: "50px",
                    }}
                >
                    Nucers组织账号申请
                </div>
                <Steps current={current} size="small">
                    <Step title="申请须知" />
                    <Step title="资料提交" />
                    <Step title="信息确认" />
                    <Step title="提交结果" />
                </Steps>
                <div className={apply4GroupStyle.input}>
                    {current === 0 && (
                        <>
                            <div className={apply4GroupStyle.title}>
                                申请须知
                            </div>
                            <ol>
                                <li>
                                    申请主体仅限学校官方、学生社团、实验室其中之一
                                </li>
                                <li>申请人须为组织的实际负责人</li>
                                <li>
                                    申请人须已知并认同
                                    <a href="/p/rules">《Nucers社区守则》</a>
                                </li>
                                <li>
                                    申请人须已知并认同
                                    <a href="/p">
                                        《Nucers社区关于组织申请及相关责任守则》
                                    </a>
                                </li>
                                <li>
                                    申请人须为完全民事行为能力人并能够及时配合必要的工作
                                </li>
                            </ol>
                            <Button type="primary" onClick={() => this.next()}>
                                确认
                            </Button>
                        </>
                    )}
                    {current === 1 && (
                        <Form
                            style={{
                                width: "100%",
                            }}
                            labelCol={{ span: 4 }}
                            wrapperCol={{ span: 16 }}
                            initialValues={
                                JSON.parse(
                                    sessionStorage.getItem("apply-info")
                                ) || {
                                    type: "offical",
                                }
                            }
                            onFinish={(values: IApply4Group) => {
                                sessionStorage.setItem(
                                    "apply-info",
                                    JSON.stringify(values)
                                )
                                this.setState({
                                    values,
                                })
                                this.next()
                            }}
                        >
                            <Form.Item
                                label="组织名称"
                                name="name"
                                rules={[{ required: true }]}
                            >
                                <Input placeholder="组织名称" />
                            </Form.Item>
                            <Form.Item
                                label="组织类型"
                                name="type"
                                rules={[{ required: true }]}
                            >
                                <Select>
                                    <Option value="offical">学校官方</Option>
                                    <Option value="community">学生社团</Option>
                                    <Option value="lab">实验室</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="组织负责人"
                                name="incharge"
                                rules={[{ required: true }]}
                            >
                                <Input placeholder="组织负责人" />
                            </Form.Item>
                            <Form.Item
                                label="登录邮箱"
                                name="email"
                                rules={[{ required: true }]}
                            >
                                <Input
                                    placeholder="组织登录邮箱"
                                    type="email"
                                />
                            </Form.Item>
                            <Form.Item
                                label="登录密码"
                                name="password"
                                rules={[{ required: true }]}
                            >
                                <Input
                                    placeholder="初始化登录密码"
                                    type="password"
                                />
                            </Form.Item>
                            <Form.Item
                                label="紧急联络"
                                name="emergency"
                                rules={[{ required: true }]}
                            >
                                <Input
                                    addonBefore="+86"
                                    placeholder="紧急联络手机"
                                />
                            </Form.Item>
                            <Form.Item
                                wrapperCol={{
                                    span: 3,
                                }}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    下一步
                                </Button>
                            </Form.Item>
                        </Form>
                    )}
                    {current === 2 && (
                        <>
                            <div className={apply4GroupStyle.title}>
                                信息确认
                            </div>
                            <ul>
                                <li>
                                    组织名称<span>{name}</span>
                                </li>
                                <li>
                                    组织类型<span>{type}</span>
                                </li>
                                <li>
                                    组织负责人<span>{incharge}</span>
                                </li>
                                <li>
                                    登录邮箱<span>{email}</span>
                                </li>
                                <li>
                                    登录密码<span>{password}</span>
                                </li>
                                <li>
                                    紧急联络<span>{emergency}</span>
                                </li>
                            </ul>
                            <div
                                style={{
                                    display: "flex",
                                }}
                            >
                                <Button
                                    type="default"
                                    onClick={() => this.prev()}
                                    style={{
                                        marginRight: "10px",
                                    }}
                                >
                                    上一步
                                </Button>
                                <Button
                                    type="primary"
                                    onClick={() => {
                                        // 在此设置异步Promise提交函数
                                        this.setState({
                                            loading: true,
                                        })
                                        fetch("")
                                            .then(() => {
                                                this.next()
                                            })
                                            .catch(() => {
                                                message.error(
                                                    "提交数据错误，请联系管理员"
                                                )
                                            })
                                    }}
                                    loading={loading}
                                >
                                    提交
                                </Button>
                            </div>
                        </>
                    )}
                    {current === 3 && (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                                alignItems: "center",
                            }}
                        >
                            <CheckOutlined
                                style={{
                                    color: "green",
                                    fontSize: "100px",
                                }}
                            />
                            <div className={apply4GroupStyle.answer}>
                                <p>感谢您加入Nucers社区Group平台！</p>
                                <p>
                                    申请将在两个工作日内处理，请保持申请邮箱和紧急联系方式的正常使用！
                                </p>
                            </div>
                            <Button
                                type="primary"
                                onClick={() => {
                                    location.replace("/")
                                }}
                            >
                                返回『 Nucers社区广场 』
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
