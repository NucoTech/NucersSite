const IdeasMocks = [
    {
        name: "werwerwerwe",
        uid: "3245345234fsddafa",
        id: "sdfsdfsdfsdfsasdadfsdf",
        content: "# 测试内容",
    },
    {
        name: "werwerwerwe",
        uid: "3245345234fsasdfda",
        id: "asdasdasdasasdfasdfd",
        content: '`console.log("Hello World")`',
    },
    {
        name: "werwerwerwe",
        uid: "3245345234fsda",
        id: "aasdasxsdfaasdfadsdqe",
        content: "* cease \n * sdfsdfs",
    },
    {
        name: "werwerwerwe",
        uid: "3245345234fsda",
        id: "sdafsdafaasdfadsdfssdf",
        content: "cEshcadasdfasd",
    },
    {
        name: "werwerwerwe",
        uid: "3245345234fsda",
        id: "sdfasdfasdfasdfadsdfasasd",
        content: "策划赛哈桑带深代售点",
    },
    {
        name: "测试",
        uid: "3gwerggw45trgqr",
        id: "efqggwedfbsdf",
        content: '```js\nconsole.log("Hello World")\n```\n',
    },
    {
        name: "Ceeeeaad",
        uid: "sadadadaasdfa",
        id: "5131rgqrgsdasgagas",
        content: [
            "$$",
            "\\nabla \\times H = J + \\frac{\\partial D}{\\partial t} \\newline",
            "\\nabla \\times E = - \\frac{\\partial B}{\\partial t} \\newline",
            "\\nabla \\cdot B = 0 \\newline",
            "\\nabla \\cdot D = \\rho",
            "$$",
        ].join("\n"),
    },
]

const HotTagsMocks = [
    { text: "测试", value: 70 },
    { text: "前端", value: 50 },
    { text: "开发", value: 90 },
    { text: "Nucers", value: 90 },
    { text: "话题", value: 90 },
    { text: "React", value: 90 },
    { text: "Vue", value: 90 },
    { text: "娱乐", value: 100 },
]

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

const NewersMocks = [
    {
        name: "Zenith",
        uid: "123123",
        avatar:
            "https://pic1.zhimg.com/v2-3711565b5584098ca748b50be91acdf5_xl.jpg",
    },
    {
        name: "Zenith",
        uid: "1123",
        avatar:
            "https://pic1.zhimg.com/v2-3711565b5584098ca748b50be91acdf5_xl.jpg",
    },
    {
        name: "Zenith",
        uid: "1223",
        avatar:
            "https://pic1.zhimg.com/v2-3711565b5584098ca748b50be91acdf5_xl.jpg",
    },
    {
        name: "Zenith",
        uid: "12",
        avatar:
            "https://pic1.zhimg.com/v2-3711565b5584098ca748b50be91acdf5_xl.jpg",
    },
    {
        name: "Zenith",
        uid: "113",
        avatar:
            "https://pic1.zhimg.com/v2-3711565b5584098ca748b50be91acdf5_xl.jpg",
    },
]

const TopicsMocks = [
    "话题一",
    "话题二",
    "话题三",
    "话题四",
    "话题五",
    "话题六",
    "话题七",
    "话题八",
    "话题九",
    "话题十",
    "话题十一",
    "话题十二",
    "话题十三",
    "话题十四",
    "话题十五测试测试测试测试",
]

const PostsMocks = [
    { poid: "po324234234", title: "测试", time: "2020-08-02" },
    { poid: "po2346223423t234", title: "公告", time: "2020-08-02" },
    { poid: "posdfadadfasdfa", title: "测试公告", time: "2020-08-02" },
    {
        poid: "poqwrwerqwrqwer",
        title:
            "啊实打实dfsdfsdfsdffffffgsdfg dsfgs dfg sdfg sdfg dsfgsdfgsdfgsdfg sdfgs fgsfg sdfg sdfg sdfg sdfg sdfg sdfg sfffffffffffffffffffffffffffsdfsdfsdfsdf大苏打锕",
        time: "2020-08-02",
    },
    { poid: "powerawerawera", title: "ASDFASDFASDF", time: "2020-08-02" },
    { poid: "podxcasdfasd", title: "GQWWEQWERQWEW", time: "2020-08-02" },
    {
        poid: "poasdfafadfadfasdf",
        title: "QWERQWERQWERQWE",
        time: "2020-08-02",
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

/**
 * 用户模拟数据
 */
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

/**
 * 组织模拟数据
 */

export default {
    "/": {
        topics: TopicsMocks,
        posts: PostsMocks,
        notices: NoticesMocks,
        tags: HotTagsMocks,
        newers: NewersMocks,
        ideas: IdeasMocks,
        acts: AdsMocks,
    },
    "/u": {
        uids: ["u123123", "u321212", "u432234", "u0", "u1"],
    },
    "/u/u0": {
        uid: "u0",
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
    "/u/u0/posts": {
        uid: "u0",
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
    "/u/u0/ideas": {
        uid: "u0",
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
    "/g": {
        gids: ["g0", "g1", "g2", "g3"],
    },
    "/g/g0": {
        gid: "g0",
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
    // "/g/oa/g0": ,
    // "POST /p/new": ,
    // "POST /p/new/picture": ,
    // "POST /p/new/repicture": ,
    "/codes": {
        codes: [
            {
                id: "123123",
            },
            {
                id: "22334",
            },
            {
                id: "432452345324523452345",
            },
        ],
    },
    "/codes/123123": {
        id: "123123",
        title: "测试代码",
        mode: "text/javascript",
        code: "console.log('Hello World')",
    },
}
