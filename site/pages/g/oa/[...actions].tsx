import AuthenticatedPageBox from "@components/auth/AuthenticatedPageBox"
import dynamic from "next/dynamic"
const OAMenu = dynamic(import("@components/oa/OAMenu"), {
    ssr: false,
})

export default () => {
    return (
        <AuthenticatedPageBox>
            <OAMenu />
            <div
                style={{
                    padding: "70px 0px 20px 80px",
                }}
            >
                在此考虑oa的具体活动
            </div>
        </AuthenticatedPageBox>
    )
}
