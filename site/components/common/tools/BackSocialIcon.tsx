import IconFont from "./IconFont"

interface IBackSocialProps {
    type:
        | "github"
        | "gitee"
        | "segmentfault"
        | "npm"
        | "leetcode"
        | "zhihu"
        | "stackoverflow"
        | "gitlab"
        | "juejin"
        | "bilibili"
        | "csdn"
        | string
}

const BackSocialIcon = ({ type }: IBackSocialProps) => (
    <IconFont
        type={`nucers-${type}`}
        title={type}
        style={{ fontSize: "20px" }}
    />
)

export default BackSocialIcon
