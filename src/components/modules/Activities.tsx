import React from "react"
import { Carousel } from "antd"
import { ICarousel, ICarousels } from "@/utils/interfaces"

interface IAdsSideProps {
    acts: ICarousels
}
/**
 * 活动轮播图
 */
export default ({ acts = [] }: IAdsSideProps) => (
    <div
        style={{
            width: "100%",
            borderRadius: "5px",
            overflow: "hidden",
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
