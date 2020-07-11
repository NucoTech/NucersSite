import Head from "next/head"
import NavBar from "@components/common/NavBar"
import MemberHead from "@components/members/MemberHead"

const memberStyle = require("@styles/pages/member.css")

const memberProfile = ({ stars }) => {
    return (
        <div className={memberStyle.memberPage}>
            <Head>
                <title>Nucers用户</title>
            </Head>
            <NavBar />
            {/* <div className={memberStyle}></div> */}
            <MemberHead
                nickname="Zenith"
                avatar="https://pic1.zhimg.com/v2-3711565b5584098ca748b50be91acdf5_xl.jpg"
                type="person"
                typeInfo="xxx社团成员"
            />
            Hello World
        </div>
    )
}

export const getServerSideProps = async (context) => {
    console.log(context)
    // const res = await fetch("https://api.github.com/repos/zeit/next.js")
    // const json = await res.json()
    return {
        props: {
            stars: 0,
        },
    }
}

export default memberProfile
