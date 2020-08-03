import React from "react"
import { Carousel } from "antd"

/**
 * @param {string} title 活动方名称
 * @param {string} src 活动方宣传图
 * @param {string} url 活动方链接
 */
export interface IActs {
    title: string
    src: string
    url?: string
}

interface IAdsSideProps {
    acts: Array<IActs>
}
/**
 * 活动轮播图
 */
export default class Activities extends React.Component<IAdsSideProps> {
    render() {
        const { acts } = this.props
        return (
            <div>
                <Carousel dotPosition="right" autoplay={true}>
                    {acts.map((item: IActs, index: number) => (
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
