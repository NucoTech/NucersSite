import React from "react"
import { Carousel } from "antd"
const AdsStyle = require("@styles/components/common/Ads.module.css")

/**
 * @param {string} title 广告方名称
 * @param {string} src 广告方的宣传图
 * @param {string} url 广告方链接
 */
export interface IAds {
    title: string
    src: string
    url?: string
}

interface IAdsSideProps {
    ads: Array<IAds>
}

/**
 * 广告轮播图组件
 * 修复中
 */
export default class AdsSide extends React.Component<IAdsSideProps> {
    constructor(props: IAdsSideProps) {
        super(props)
    }
    static defaultProps: IAdsSideProps = {
        ads: [],
    }
    render() {
        const { ads } = this.props
        return (
            <div className={AdsStyle.adsSide}>
                <Carousel
                    dotPosition="bottom"
                    autoplay={true}
                >
                    {ads.map((item: IAds, index: number) => (
                        <div key={`ads-side-${index}`}>
                            <img
                                src={item.src}
                                alt={item.title}
                                title={item.title}
                                width="100%"
                                height="200px"
                                onClick={() => {
                                    if (item.url) {
                                        window.open(item.url, "_blank")
                                    }
                                    return
                                }}
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        )
    }
}
