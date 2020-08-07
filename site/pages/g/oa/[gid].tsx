import dynamic from "next/dynamic"
import OABasicBox from "@components/groups/oa/Global/OABasicBox"
import AuthenticatedPageBox from "@components/auth/AuthenticatedPageBox"

const DashBoardShower = dynamic(
    import("@components/groups/oa/DashBoard/DashBoardShower"),
    {
        ssr: false,
    }
)
const OAMenu = dynamic(import("@components/groups/oa/Global/OAMenu"), {
    ssr: false,
})

const GroupProfile = () => (
    <AuthenticatedPageBox>
        <OAMenu />
        <OABasicBox>
            <DashBoardShower />
        </OABasicBox>
    </AuthenticatedPageBox>
)

export default GroupProfile