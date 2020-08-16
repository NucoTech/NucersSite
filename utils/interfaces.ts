/**
 * 通用新闻类型
 */
export interface ICommonNews {
    title: string
    time: string
    href: string
}

export type ICommonNewss = Array<ICommonNews>

/**
 * 一言Hitokoto
 */
export interface IHitokoto {
    hitokoto: string
    from: string
}

/**
 * 轮播图类型
 */
export interface ICarousel {
    title: string
    src: string
    href?: string
}

export type ICarousels = Array<ICarousel>

/**
 * 版权声明类型
 */
export interface ICopyright {
    address: string
    ICP: string
    GongAn?: string
    email: string
}

/**
 * 帖子信息类型
 */
export interface IPostInfo {
    poid: string
    title: string
    time: string
}

export type IPostInfos = Array<IPostInfo>

/**
 * 通用短文类型，可能会废弃
 */
export interface ICommonMsg {
    name: string
    uid: string
    id: string
    content: string
}

export type ICommonMsgs = Array<ICommonMsg>

/**
 * 新人类型
 */
export interface INewer {
    name: string
    uid: string
    avatar: string
}

export type INewers = Array<INewer>

/**
 * 公告
 */
export interface INotice {
    noid: string
    title: string
}

export type INotices = Array<INotice>

/**
 * 社交媒体
 */
export type ISocialSupported =
    | "github"
    | "gitee"
    | "segmentfault"
    | "npm"
    | "leetcode"
    | "zhihu"
    | "stackoverflow"
    | "gitlab"
    | "juejin"
    | "bilibili"
    | "csdn"

export interface IUserSocial {
    type: ISocialSupported
    href: string
}

export type IUserSocials = Array<IUserSocial>

/**
 * 日历热力图数据
 */
export interface ICalendarHeatmap {
    day: string
    value: number
}

export interface ICalendarHeatmaps {
    year: string
    data: Array<ICalendarHeatmap>
}

/**
 * 词云
 */
export interface IWordCloud {
    text: string
    value: number
}

export type IWordClouds = Array<IWordCloud>

/**
 * 申请Group的信息
 */
export interface IApply4Group {
    name: string
    type: string
    incharge: string
    email: string
    password: string
    emergency: string
}

/**
 * 用户认证的信息
 */
export interface IUserVerify {
    verified: boolean
    info: string
}

/**
 * 用户卡片
 */
export interface IUserCard {
    uid: string
    name: string
    avatar: string
    verify: any
    following: string
    followers: string
    slogan: string
    socials: IUserSocials
}

export interface IUserDisplay {
    target: string
    datas: Array<any>
}

/**
 * 组织卡片
 */
export interface IGroupVerify {
    verified: boolean
    info: string
    type: "official" | "community" | "lab"
}

export interface IGroupCard {
    gid: string
    title: string
    avatar: string
    verify: IGroupVerify
    tags: Array<string>
    email: string
    address: string
    description: string
}

export interface IGroupMember {
    name: string
    uid: string
    avatar: string
}

export type IGroupMembers = {
    members: Array<IGroupMember>
}

export interface IGroupContent {
    notices: INotices
    activities: ICarousels
}
