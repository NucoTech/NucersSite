import AuthenticatedPageBox from "@components/auth/AuthenticatedPageBox"
import dynamic from "next/dynamic"
import { ValidMenu } from "@components/groups/oa/OAMenu"
import InfoManagement from "@components/groups/oa/InfoManagement"
import Support from "@components/groups/oa/Support"
import Notices from "@components/groups/oa/Notices"
import Head from "next/head"
import OABasicBox from "@components/groups/oa/OABasicBox"
const OA404Shower = dynamic(import("@components/groups/oa/OA404Shower"), {
    ssr: false,
})
const OAMenu = dynamic(import("@components/groups/oa/OAMenu"), {
    ssr: false,
})

const GroupOA = ({ gid, action }) => {
    return (
        <AuthenticatedPageBox>
            <Head>
                <title>Nucers Group 后台管理系统 </title>
            </Head>
            <OAMenu />
            <OABasicBox>
                {action === "info" && <InfoManagement gid={gid} />}
                {action === "notices" && <Notices gid={gid} />}
                {action === "acts"}
                {action === "members"}
                {action === "members-add"}
                {action === "finance"}
                {action === "plugins"}
                {action === "support" && <Support />}
                {action === "security"}
                {!ValidMenu.includes(action) && <OA404Shower />}
            </OABasicBox>
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

export default GroupOA
