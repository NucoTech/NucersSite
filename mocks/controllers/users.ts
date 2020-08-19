export const getUsers = (context: any) => {
    console.log(`访问 mock api--> ${context.matched[0].path}`)
    context.response.status = 200
    context.response.body = {
        success: "ok",
        data: {
            uids: ["u123123", "u321212", "u432234", "u0", "u1"],
        },
    }
}

const UserSocialMocks = [
    { type: "github", url: "#" },
    { type: "gitee", url: "#" },
    { type: "segmentfault", url: "#" },
    { type: "npm", url: "#" },
    { type: "leetcode", url: "#" },
    { type: "zhihu", url: "#" },
    { type: "stackoverflow", url: "#" },
    { type: "gitlab", url: "#" },
    { type: "juejin", url: "#" },
    { type: "bilibili", url: "#" },
    { type: "csdn", url: "#" },
]

const ActsMocks = [
    {
        day: "2020-02-07",
        value: 83,
    },
    {
        day: "2020-07-18",
        value: 85,
    },
    {
        day: "2020-11-27",
        value: 213,
    },
    {
        day: "2020-06-05",
        value: 314,
    },
    {
        day: "2020-05-22",
        value: 43,
    },
    {
        day: "2020-07-17",
        value: 45,
    },
]

export const getUserProfile = ({ params, response, matched }: any) => {
    console.log(`访问 mock api--> ${matched[0].path}`)
    response.status = 200
    response.body = {
        success: "ok",
        data: {
            uid: params.uid,
            name: "Herbert",
            avatar:
                "https://pic1.zhimg.com/v2-3711565b5584098ca748b50be91acdf5_xl.jpg",
            socials: UserSocialMocks,
            acts: {
                year: "2020",
                data: ActsMocks,
            },
            verify: {
                verified: true,
                info: "Nucers联合创始人",
            },
            following: "3252234",
            followers: "2344524",
            slogan: "测试测试测试数据",
            timeline: [],
        },
    }
}

export const getUserPosts = ({ params, response, matched }: any) => {
    console.log(`访问 mock api--> ${matched[0].path}`)

    response.status = 200
    response.body = {
        success: "ok",
        data: {
            uid: params.uid,
            name: "Herbert",
            avatar:
                "https://pic1.zhimg.com/v2-3711565b5584098ca748b50be91acdf5_xl.jpg",
            socials: UserSocialMocks,
            acts: {
                year: "2020",
                data: ActsMocks,
            },
            verify: {
                verified: true,
                info: "Nucers联合创始人",
            },
            following: "3252234",
            followers: "2344524",
            slogan: "测试测试测试数据",
            timeline: [],
            datas: [],
        },
    }
}

export const getUserIdeas = ({ params, response, matched }: any) => {
    console.log(`访问 mock api--> ${matched[0].path}`)

    response.status = 200
    response.body = {
        success: "ok",
        data: {
            uid: params.uid,
            name: "Herbert",
            avatar:
                "https://pic1.zhimg.com/v2-3711565b5584098ca748b50be91acdf5_xl.jpg",
            socials: UserSocialMocks,
            acts: {
                year: "2020",
                data: ActsMocks,
            },
            verify: {
                verified: true,
                info: "Nucers联合创始人",
            },
            following: "3252234",
            followers: "2344524",
            slogan: "测试测试测试数据",
            timeline: [],
            datas: [],
        },
    }
}
