import Head from "next/head"

const searchPageStyle = require("@styles/pages/search.module.css")

import NavBar from "@components/common/NavBar"
import PageBox from "@components/common/PageBox"
import NavBarMobile from "@components/common/NavBarMobile"
import IconFont from "@components/common/IconFont"

const Search = () => {
    return (
        <PageBox>
            <Head>
                <title>Nucers社区全站搜索</title>
            </Head>
            <NavBar />
            <NavBarMobile />
            <div className={searchPageStyle.content}>
                <div className={searchPageStyle.title}>Nucers 社区全站搜索</div>
                <div
                    style={{
                        marginTop: "40px",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <input
                        className={searchPageStyle.inputBox}
                        type="search"
                        placeholder="在此开始搜索..."
                    />
                    <IconFont
                        type="nucers-fly"
                        style={{
                            fontSize: "20px",
                            cursor: "pointer",
                        }}
                    />
                </div>
                {/* <div className={searchPageStyle.selectorArea}>
                    <div className={searchPageStyle.selectorBox}>
                        <div className={searchPageStyle.selectorTitle}>
                            用户类型
                        </div>
                        <ul className={searchPageStyle.selectUl}>
                            <li>标签一</li>
                        </ul>
                    </div>
                    <div className={searchPageStyle.selectorBox}>
                        <div className={searchPageStyle.selectorTitle}>
                            内容范围
                        </div>

                        <ul className={searchPageStyle.selectUl}>
                            <li>标签二</li>
                        </ul>
                    </div>
                    <div className={searchPageStyle.selectorBox}>
                        <div className={searchPageStyle.selectorTitle}>
                            热门标签
                        </div>

                        <ul className={searchPageStyle.selectUl}>
                            <li>标签三</li>
                        </ul>
                    </div>
                    <div className={searchPageStyle.selectorBox}>
                        <div className={searchPageStyle.selectorTitle}>
                            热门话题
                        </div>
                        <ul className={searchPageStyle.selectUl}>
                            <li>标签四</li>
                        </ul>
                    </div>
                    <div className={searchPageStyle.selectorBox}>
                        <div className={searchPageStyle.selectorTitle}>
                            结果排序
                        </div>
                        <ul className={searchPageStyle.selectUl}>
                            <li>标签五</li>
                        </ul>
                    </div>
                </div> */}

                {/* 搜索结果区 */}
                <ul className={searchPageStyle.result}>
                    <li>结果</li>
                    <li>结果</li>
                    <li>结果</li>
                    <li>结果</li>
                    <li>结果</li>
                    <li>结果</li>
                    <li>结果</li>
                    <li>结果</li>
                    <li>结果</li>
                    <li>结果</li>
                    <li>结果</li>
                    <li>结果</li>
                    <li>结果</li>
                    <li>结果</li>
                    <li>结果</li>
                    <li>结果</li>
                    <li>结果</li>
                    <li>结果</li>
                    <li>结果</li>
                    <li>结果</li>
                    <li>结果</li>
                    <li>结果</li>
                    <li>结果</li>
                    <li>结果</li>
                    <li>结果</li>
                    <li>结果</li>
                </ul>
            </div>
        </PageBox>
    )
}

export const getServerSideProps = async ({ query }) => {
    console.log(query)
    return { props: {} }
}

export default Search
