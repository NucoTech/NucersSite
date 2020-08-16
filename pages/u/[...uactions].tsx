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
    target: string
}

const UserProfile = ({ data, target }: UserProfileProps) => {
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
                    <UserDisplay target={target} />
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

export const getServerSideProps = async ({ query }) => {
    const uid = query.uactions[0]
    const target = query.uactions[1]
    const res = await fetch(`http://localhost:8000/u/${uid}/${target}`)
    const result = await res.json()
    const data = result.data
    return {
        props: {
            data,
            target,
        },
    }
}

export default UserProfile
