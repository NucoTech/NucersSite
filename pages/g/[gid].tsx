import Head from "next/head"

const groupStyle = require("@styles/pages/group.module.css")

import PageBox from "@components/common/tools/PageBox"

import NavBar from "@components/common/NavBar"
import NavBarMobile from "@components/common/NavBarMobile"
import GroupCard from "@components/groups/GroupCard"

import { IGroupDataReq } from "@utils/requestInterfaces"
import GroupMembers from "@components/groups/GroupMembers"
import GroupContent from "@components/groups/GroupContent"

interface IGroupProfileProps {
    data: IGroupDataReq
}

const GroupProfile = ({ data }: IGroupProfileProps) => (
    <PageBox>
        <Head>
            <title>Nucers Group 主页 | {data.title} </title>
            <meta name="keywords" content={data.tags.join(";")} />
            <meta name="description" content={data.description} />
        </Head>
        <NavBar />
        <NavBarMobile />
        <div className={groupStyle.content}>
            <div className={groupStyle.left}>
                <GroupCard
                    gid={data.gid}
                    title={data.title}
                    avatar={data.avatar}
                    verify={data.verify}
                    email={data.email}
                    address={data.address}
                    tags={data.tags}
                    description={data.description}
                />
                <GroupMembers members={data.members} />
            </div>
            <div className={groupStyle.right}>
                <GroupContent
                    notices={data.notices}
                    activities={data.activities}
                />
            </div>
        </div>
    </PageBox>
)

export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:8000/g")
    const result = await res.json()
    const paths = result.data.gids.map((item) => {
        return { params: { gid: item } }
    })
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({ params }) => {
    const res = await fetch(`http://localhost:8000/g/${params.gid}`)
    const result = await res.json()
    const data = result.data
    return {
        props: {
            data,
        },
    }
}

export default GroupProfile
