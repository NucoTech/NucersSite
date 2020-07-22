/**
 * 热地图模拟数据
 */
const HeatDataMocks: Array<any> = [
    ["2020-01-01", 40043],
    ["2020-01-05", 4340],
    ["2020-01-06", 430],
    ["2020-01-07", 40],
    ["2020-02-08", 50],
    ["2020-04-08", 450],
    ["2020-06-08", 432450],
    ["2020-07-08", 45230],
    ["2020-08-08", 4530],
]

/**
 * 动作雷达模拟数据
 */
const ActsRadarMocks: Array<number> = [4464, 5555, 6666, 7666, 3243]

/**
 * 热门标签模拟数据
 */
import { IWordCloud } from "@components/charts/WordCloud"
const HotTagsMocks: Array<IWordCloud> = [
    { text: "测试", value: 70 },
    { text: "前端", value: 50 },
    { text: "开发", value: 90 },
    { text: "Nucers", value: 90 },
    { text: "话题", value: 90 },
    { text: "React", value: 90 },
    { text: "Vue", value: 90 },
    { text: "娱乐", value: 100 },
]

/**
 * 广告投放模拟数据
 */
import { IAds } from "@components/common/AdsSide"
const AdsMocks: Array<IAds> = [
    {
        title: "NUCOSC",
        src:
            "https://pic1.zhimg.com/v2-3711565b5584098ca748b50be91acdf5_xl.jpg",
        url: "https://www.nucosc.com",
    },
    {
        title: "NUCOSC",
        src:
            "https://pic1.zhimg.com/v2-3711565b5584098ca748b50be91acdf5_xl.jpg",
        url: "https://www.nucosc.com",
    },
    {
        title: "NUCOSC",
        src:
            "https://pic1.zhimg.com/v2-3711565b5584098ca748b50be91acdf5_xl.jpg",
        url: "https://www.nucosc.com",
    },
]

/**
 * 新加入成员模拟数据
 */
import { IUser } from "@components/common/Newers"
const NewersMocks: Array<IUser> = [
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

export { HeatDataMocks, ActsRadarMocks, HotTagsMocks, AdsMocks, NewersMocks }
