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
    IUserCard,
    IUserDisplay,
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
export interface IUserDataReq extends IUserCard, IUserDisplay {
    acts: ICalendarHeatmaps
}
