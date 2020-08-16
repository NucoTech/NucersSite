import PageBox from "@components/common/tools/PageBox"
import NavBar from "@components/common/NavBar"
import NavBarMobile from "@components/common/NavBarMobile"
import Head from "next/head"
import UserAuthedPageBox from "@components/auth/UserAuthedPageBox"

const UserSettings = () => (
    <UserAuthedPageBox>
        <PageBox>
            <Head>
                <title>Nucers用户设置</title>
            </Head>
            <NavBar />
            <NavBarMobile />
        </PageBox>
    </UserAuthedPageBox>
)

export default UserSettings
