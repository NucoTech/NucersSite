import Head from "next/head"

const userStyle = require("@styles/pages/user.module.css")

import PageBox from "@components/common/tools/PageBox"
import NavBar from "@components/common/NavBar"
import NavBarMobile from "@components/common/NavBarMobile"
import UserCard from "@components/users/UserCard"
import CalendarHeatmapChart from "@components/charts/CalendarHeatmapChart"
import UserDisplay from "@components/users/UserDisplay"
import AdsSide from "@components/common/AdsSide"

const UserProfile = () => {
    return (
        <PageBox>
            <Head>
                <title>Nucers用户</title>
            </Head>
            <NavBar />
            <NavBarMobile />
            <div className={userStyle.content}>
                <div className={userStyle.left}>
                    <CalendarHeatmapChart />
                    <UserDisplay uid="23423423" />
                </div>
                <div className={userStyle.right}>
                    <UserCard uid="234234" />
                    <AdsSide />
                </div>
            </div>
        </PageBox>
    )
}

export const getServerSideProps = async (context) => {
    // console.log(context)
    // const res = await fetch("https://api.github.com/repos/zeit/next.js")
    // const json = await res.json()
    return {
        props: {
            stars: 0,
        },
    }
}

export default UserProfile
