import Head from "next/head"

const searchPageStyle = require("@styles/pages/search.module.css")

import NavBar from "@components/common/NavBar"
import PageBox from "@components/common/tools/PageBox"
import NavBarMobile from "@components/common/NavBarMobile"
import IconFont from "@components/common/tools/IconFont"

const Search = () => {
    return (
        <PageBox>
            <Head>
                <title>Nucers社区全站搜索</title>
            </Head>
            <NavBar />
            <NavBarMobile />
            <div className={searchPageStyle.header}>
                <h1 className={searchPageStyle.h1}>Nucers Search</h1>
                <div className={searchPageStyle.form_box}>
                    <input type="text" name="keyword" id="keyword" className={searchPageStyle.search_field} placeholder="告诉我你想搜什么..."/>
                    <button className={searchPageStyle.search_btn} type="button">Search</button>
                </div>
            </div>
        </PageBox>
    )
}

export const getServerSideProps = async ({ query }) => {
    console.log(query)
    return { props: {} }
}

export default Search
