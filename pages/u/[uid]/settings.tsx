import Head from "next/head"

import PageBox from "@components/common/tools/PageBox"
import NavBar from "@components/common/NavBar"
import NavBarMobile from "@components/common/NavBarMobile"

import UserAuthedPageBox from "@components/auth/UserAuthedPageBox"

const UserSettings = () => (
    <UserAuthedPageBox>
        <PageBox>
            <Head>
                <title>Nucers用户设置</title>
            </Head>
            <NavBar />
            <NavBarMobile />
            <div>
                <UserSettings />
            </div>
        </PageBox>
    </UserAuthedPageBox>
)

// export const getStaticPaths = async () => {
//     const res = await fetch("http://localhost:8000/u")
//     const result = await res.json()
//     const paths = result.data.uids.map(item => {
//         return { params: { uid: item } }
//     })
//     return {
//         paths,
//         fallback: false,
//     }
// }

// export const getStaticProps = async ({ params }) => {
//     const res = await fetch(`http://localhost:8000/u/${params.uid}`)
//     const result = await res.json()
//     const data = result.data
//     return {
//         props: {
//             data,
//         },
//     }
// }

export default UserSettings
