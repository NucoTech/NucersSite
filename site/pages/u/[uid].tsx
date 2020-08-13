import Head from "next/head"

const userStyle = require("@styles/pages/user.module.css")

import PageBox from "@components/common/tools/PageBox"
import NavBar from "@components/common/NavBar"
import NavBarMobile from "@components/common/NavBarMobile"
import UserCard from "@components/users/UserCard"
import CalendarHeatmapChart from "@components/charts/CalendarHeatmapChart"
import UserDisplay from "@components/users/UserDisplay"
import AdsSide from "@components/common/AdsSide"
import { IUserDataReq } from "@utils/requestInterfaces"

interface UserProfileProps {
    data: IUserDataReq
}

const UserProfile = ({ data }: UserProfileProps) => {
    return (
        <PageBox>
            <Head>
                <title>Nucers用户</title>
            </Head>
            <NavBar />
            <NavBarMobile />
            <div className={userStyle.content}>
                <div className={userStyle.left}>
                    <CalendarHeatmapChart
                        year={data.acts.year}
                        data={data.acts.data}
                    />
                    <UserDisplay uid={data.uid} />
                </div>
                <div className={userStyle.right}>
                    <UserCard
                        uid={data.uid}
                        name={data.name}
                        avatar={data.avatar}
                        verify={data.verify}
                        following={data.following}
                        followers={data.followers}
                        slogan={data.slogan}
                        socials={data.socials}
                    />
                    {/* <AdsSide /> */}
                </div>
            </div>
        </PageBox>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:8000/u")
    const result = await res.json()
    const paths = result.data.uids.map((item) => {
        return { params: { uid: item } }
    })
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({ params }) => {
    const res = await fetch(`http://localhost:8000/u/${params.uid}`)
    const result = await res.json()
    const data = result.data
    return {
        props: {
            data,
        },
    }
}

export default UserProfile
