import React from "react"
import { Carousel } from "antd"
import { ICarousel } from "@utils/interfaces"

interface IAdsSideProps {
    acts: Array<ICarousel>
}
/**
 * 活动轮播图
 */
export default class Activities extends React.Component<IAdsSideProps> {
    render() {
        const { acts } = this.props
        return (
            <div
                style={{
                    width: "100%",
                }}
            >
                <Carousel dotPosition="right" autoplay={true}>
                    {acts.map((item: ICarousel, index: number) => (
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
