import IconFont from "./IconFont"
import { ISocialSupported } from "@utils/interfaces"

interface IBackSocialProps {
    type: ISocialSupported | string
}

const BackSocialIcon = ({ type }: IBackSocialProps) => (
    <IconFont
        type={`nucers-${type}`}
        title={type}
        style={{ fontSize: "20px" }}
    />
)

export default BackSocialIcon
