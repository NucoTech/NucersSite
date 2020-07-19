import React from "react"

const hitokotoStyle = require("@styles/components/common/Hitokoto.module.css")

interface IHitokotoProps {}

interface IHitokotoStates {
    hitokoto: string
    from: string
}

/**
 * 一言组件
 * 接口由https://hitokoto.cn/提供
 */
export default class Hitokoto extends React.Component<
    IHitokotoProps,
    IHitokotoStates
> {
    constructor(props: IHitokotoProps) {
        super(props)
        this.state = {
            hitokoto: "",
            from: "",
        }
    }

    getHitokoto = async () => {
        const res = await fetch(
            "https://v1.hitokoto.cn?encode=json&chartset=utf-8&c=a&c=b&c=c&c=d&c=e&c=h&c=i&c=j"
        )
        const result = await res.json()
        this.setState({
            hitokoto: result.hitokoto,
            from: result.from,
        })
    }

    async componentDidMount() {
        this.getHitokoto()
    }
    render() {
        const { hitokoto, from } = this.state
        return (
            <>
                {hitokoto && (
                    <div
                        className={hitokotoStyle.content}
                        title="语料由一言Hitokoto提供"
                    >
                        <div>{hitokoto}</div>
                        <div className={hitokotoStyle.from}>——『{from}』</div>
                    </div>
                )}
            </>
        )
    }
}
