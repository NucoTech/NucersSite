import dynamic from "next/dynamic"
import AuthenticatedPageBox from "@components/auth/AuthenticatedPageBox"
const OAMenu = dynamic(import("@components/oa/OAMenu"), {
    ssr: false,
})
export default () => (
    <AuthenticatedPageBox>
        <OAMenu />
    </AuthenticatedPageBox>
)
