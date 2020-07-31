import AuthenticatedPageBox from "@components/auth/AuthenticatedPageBox"
import dynamic from "next/dynamic"
import { ValidMenu } from "@components/oa/OAMenu"
import InfoManagement from "@components/oa/InfoManagement"
import Support from "@components/oa/Support"
import Notices from "@components/oa/Notices"
import Head from "next/head"
import OABasicBox from "@components/oa/OABasicBox"
const OA404Shower = dynamic(import("@components/oa/OA404Shower"), {
    ssr: false,
})
const OAMenu = dynamic(import("@components/oa/OAMenu"), {
    ssr: false,
})

export default ({ gid, action }) => {
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
