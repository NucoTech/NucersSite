import React from "react"

interface IAds {
    title: string
    src: string
    url?: string
}

interface IAdsSideProps {
    ads: Array<IAds>
}

/**
 * 广告轮播图组件
 */
export default class AdsSide extends React.Component<IAdsSideProps> {
    render() {
        return <div>

        </div>
    }
}
