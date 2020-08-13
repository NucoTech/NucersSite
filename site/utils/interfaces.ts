/**
 * 单独导出interface的文件，全面抽离非states和props的interface
 */

import { type } from "os"

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

/**
 * 通用短文类型，可能会废弃
 */
export interface ICommonMsg {
    name: string
    uid: string
    id: string
    content: string
}

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

/**
 * 日历热力图数据
 */
export interface ICalendarHeatmap {
    day: string
    value: number
}

export type ICalendarHeatmaps = Array<ICalendarHeatmap>

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
