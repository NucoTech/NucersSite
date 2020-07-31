import AuthenticatedPageBox from "@components/auth/AuthenticatedPageBox"
import dynamic from "next/dynamic"
import { ValidMenu } from "@components/oa/OAMenu"
import InfoManagement from "@components/oa/InfoManagement"
import Support from "@components/oa/Support"
const OA404Shower = dynamic(import("@components/oa/OA404Shower"), {
    ssr: false,
})
const OAMenu = dynamic(import("@components/oa/OAMenu"), {
    ssr: false,
})

export default ({ gid, action }) => {
    return (
        <AuthenticatedPageBox>
            <OAMenu />
            <div
                style={{
                    padding: "70px 0 0 80px",
                }}
            >
                {action === "info" && <InfoManagement gid={gid} />}
                {action === "notices"}
                {action === "acts"}
                {action === "members"}
                {action === "members-add"}
                {action === "finance"}
                {action === "plugins"}
                {action === "support" && <Support />}
                {!ValidMenu.includes(action) && <OA404Shower />}
            </div>
        </AuthenticatedPageBox>
    )
}

export const getServerSideProps = async ({ query }) => {
    return {
        props: {
            gid: query.actions[0],
            action: query.actions[1],
        },
    }
}
