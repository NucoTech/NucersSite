import {
    IPostInfos,
    INotices,
    INewers,
    ICommonMsgs,
    ICarousels,
    IWordClouds,
    IUserSocials,
    IUserVerify,
    ICalendarHeatmaps,
} from "./interfaces"

/**
 * index结果的数据结构
 */
export interface IIndexDataReq {
    topics: Array<string>
    posts: IPostInfos
    notices: INotices
    tags: IWordClouds
    newers: INewers
    ideas: ICommonMsgs
    acts: ICarousels
}

/**
 * user结果的数据结构
 */
export interface IUserDataReq {
    uid: string
    name: string
    avatar: string
    socials: IUserSocials
    verify: IUserVerify
    following: string
    followers: string
    slogan: string
    acts: ICalendarHeatmaps
    timeline: Array<any>
}
