import React from "react"
import { Carousel } from "antd"
import { AdsMocks } from "@mocks/datas"
import { ICarousel } from "@utils/interfaces"

const AdsStyle = require("@styles/components/common/Ads.module.css")

interface IAdsSideProps {}

interface IAdsSideStates {
    ads: Array<ICarousel>
}

/**
 * 广告轮播图组件
 * 修复中
 */
export default class AdsSide extends React.Component<
    IAdsSideProps,
    IAdsSideStates
> {
    constructor(props: IAdsSideProps) {
        super(props)
        this.state = {
            ads: [],
        }
    }
    componentDidMount() {
        this.setState({
            ads: AdsMocks,
        })
    }
    render() {
        const { ads } = this.state
        return (
            <div className={AdsStyle.adsSide}>
                <Carousel dotPosition="bottom" autoplay={true}>
                    {ads.map((item: ICarousel, index: number) => (
                        <div key={`ads-side-${index}`}>
                            <img
                                src={item.src}
                                alt={item.title}
                                title={item.title}
                                width="100%"
                                height="200px"
                                onClick={() => {
                                    if (item.href) {
                                        window.open(item.href, "_blank")
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
