import Head from "next/head"
import NavBar from "@components/common/NavBar"
import PageBox from "@components/common/PageBox"
import UserCard from "@components/users/UserCard"
import UserDisplay from "@components/users/UserDisplay"

const userStyle = require("@styles/pages/user.module.css")

export default () => {
    return (
        <PageBox>
            <Head>
                <title>Nucers用户</title>
            </Head>
            <NavBar />
            <div className={userStyle.content}>
                <div className={userStyle.left}>
                    <UserDisplay uid="23423423" />
                </div>
                <div className={userStyle.right}>
                    <UserCard uid="234234" />
                </div>
                {/* <div className={memberStyle}></div> */}

                {/* <MemberHead
                    nickname="Zenith"
                    avatar="https://pic1.zhimg.com/v2-3711565b5584098ca748b50be91acdf5_xl.jpg"
                    type="person"
                    typeInfo="xxx社团成员"
                /> */}
                {/* <main> */}
                {/* <div className={memberStyle.mainLeft}> */}
                {/* 用户活跃打卡热力日历图 */}
                {/* <div className={memberStyle.charts}> */}
                {/* <span>活跃数据</span> */}
                {/* <HeatCalendar datas={HeatDataMocks} /> */}
                {/* </div> */}

                {/* 用户活跃时间线 */}
                {/* <div className={memberStyle.module}> */}
                {/* <span>时间线</span> */}
                {/* </div> */}
                {/* </div> */}
                {/* <div className={memberStyle.mainRight}> */}
                {/* <div className={memberStyle.charts}> */}
                {/* 用户动作趋向图 */}
                {/* <span>活跃偏好</span> */}
                {/* <ActsRadar datas={ActsRadarMocks} /> */}
                {/* </div> */}
                {/* </div> */}
                {/* </main> */}
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
