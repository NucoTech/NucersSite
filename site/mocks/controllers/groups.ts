export const getGroups = (context: any) => {
    console.log(`访问 mock api--> ${context.matched[0].path}`)
    context.response.status = 200
    context.response.body = {
        success: "ok",
        data: {
            gids: ["g0", "g1", "g2", "g3"],
        },
    }
}

const AdsMocks = [
    {
        title: "NUCOSC",
        src:
            "https://pic1.zhimg.com/v2-3711565b5584098ca748b50be91acdf5_xl.jpg",
        href: "https://www.nucosc.com",
    },
    {
        title: "NUCOSC",
        src:
            "https://pic1.zhimg.com/v2-3711565b5584098ca748b50be91acdf5_xl.jpg",
        href: "https://www.nucosc.com",
    },
    {
        title: "NUCOSC",
        src:
            "https://pic1.zhimg.com/v2-3711565b5584098ca748b50be91acdf5_xl.jpg",
        href: "https://www.nucosc.com",
    },
]

const NoticesMocks = [
    { noid: "324234234", title: "测试" },
    { noid: "2346223423t234", title: "公告" },
    { noid: "sdfadadfasdfa", title: "测试公告" },
    {
        noid: "qwrwerqwrqwer",
        title:
            "啊实dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd打实大苏打锕",
    },
    { noid: "werawerawera", title: "ASDFASDFASDF" },
    { noid: "dxcasdfasd", title: "GQWWEQWERQWEW" },
    { noid: "asdfafadfadfasdf", title: "QWERQWERQWERQWE" },
]

export const getGroupProfile = ({ params, response, matched }: any) => {
    console.log(`访问 mock api--> ${matched[0].path}`)
    response.status = 200
    response.body = {
        success: "ok",
        data: {
            gid: params.gid,
            title: "进击的测试Nucers",
            avatar:
                "https://pic1.zhimg.com/v2-3711565b5584098ca748b50be91acdf5_xl.jpg",
            email: "support@nucosc.com",
            address: "山西省太原市尖草坪区学院路三号中北大学",
            members: [
                {
                    name: "Zenith",
                    uid: "u0",
                    avatar:
                        "https://pic1.zhimg.com/v2-3711565b5584098ca748b50be91acdf5_xl.jpg",
                },
                {
                    name: "Zenith",
                    uid: "u1",
                    avatar:
                        "https://pic1.zhimg.com/v2-3711565b5584098ca748b50be91acdf5_xl.jpg",
                },
                {
                    name: "Zenith",
                    uid: "u2",
                    avatar:
                        "https://pic1.zhimg.com/v2-3711565b5584098ca748b50be91acdf5_xl.jpg",
                },
            ],
            notices: NoticesMocks,
            activities: AdsMocks,
            tags: ["测试", "Nucers", "官方"],
            verify: {
                verified: true,
                type: "lab",
                info: "Nucers官方",
            },
            description: "这是一个测试的官方号",
        },
    }
}

export const getGroupOAProfile = ({ params, response, matched }: any) => {
    console.log(`访问 mock api--> ${matched[0].path}`)
}
