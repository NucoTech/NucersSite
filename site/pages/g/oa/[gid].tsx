import dynamic from "next/dynamic"
import AuthenticatedPageBox from "@components/auth/AuthenticatedPageBox"
const DashBoardShower = dynamic(import("@components/oa/DashBoardShower"), {
    ssr: false,
})
const OAMenu = dynamic(import("@components/oa/OAMenu"), {
    ssr: false,
})
export default () => (
    <AuthenticatedPageBox>
        <OAMenu />
        <div
            style={{
                padding: "70px 0px 20px 80px",
            }}
        >
            <DashBoardShower />
        </div>
    </AuthenticatedPageBox>
)
