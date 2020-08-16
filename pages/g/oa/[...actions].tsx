import AuthenticatedPageBox from "@components/auth/AuthenticatedPageBox"
import dynamic from "next/dynamic"
import { ValidMenu } from "@components/groups/oa/Global/OAMenu"
import InfoManagement from "@components/groups/oa/InfoManagement"
import Support from "@components/groups/oa/Support"
import Notices from "@components/groups/oa/Notices"
import Head from "next/head"
import OABasicBox from "@components/groups/oa/Global/OABasicBox"
import PluginsIndex from "@components/groups/oa/Plugins/PluginsIndex"
import PluginDescription from "@components/groups/oa/Plugins/PluginDescription"
const OA404Shower = dynamic(import("@components/groups/oa/Global/OA404Shower"), {
    ssr: false,
})
const OAMenu = dynamic(import("@components/groups/oa/Global/OAMenu"), {
    ssr: false,
})

const GroupOA = ({ gid, action, moreActions, params }) => {
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
                {action === "plugins" && moreActions.length === 0 && (
                    <PluginsIndex gid={gid} />
                )}
                {action === "plugins" && moreActions.length !== 0 && (
                    <PluginDescription gid={gid} pluginId={moreActions[0]} />
                )}
                {action === "support" && <Support />}
                {action === "security"}
                {!ValidMenu.includes(action) && <OA404Shower />}
            </OABasicBox>
        </AuthenticatedPageBox>
    )
}

export const getServerSideProps = async ({ query }) => {
    const path = query.actions as Array<string>
    const more: Array<string> = path.slice(2)
    let params: Object = {}
    for (let key in query) {
        if (key === "actions") continue
        params[key] = query[key]
    }
    return {
        props: {
            gid: path[0],
            action: path[1],
            moreActions: more,
            params,
        },
    }
}

export default GroupOA
