import Head from "next/head"
import dynamic from "next/dynamic"

import AuthenticatedPageBox from "@components/auth/AuthenticatedPageBox"
import OABasicBox from "@components/groups/oa/Global/OABasicBox"
import PluginsIndex from "@components/groups/oa/Plugins/PluginsIndex"

const OAMenu = dynamic(import("@components/groups/oa/Global/OAMenu"), {
    ssr: false,
})

const GroupOAPluginsIndex = ({ gid }) => (
    <AuthenticatedPageBox>
        <Head>
            <title>Nucers Group 后台管理系统</title>
        </Head>
        <OAMenu />
        <OABasicBox>
            <PluginsIndex gid={gid} />
        </OABasicBox>
    </AuthenticatedPageBox>
)

export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:8000/g")
    const result = await res.json()
    const paths = result.data.gids.map(item => {
        return { params: { gid: item } }
    })
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({ params }) => {
    return {
        props: {
            gid: params.gid,
        },
    }
}

export default GroupOAPluginsIndex
