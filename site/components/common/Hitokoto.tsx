import React from "react"
import { inject, observer } from "mobx-react"
import { OnlyDarkThemeStoreType } from "stores/DarkThemeStore"

const hitokotoStyle = require("@styles/components/common/Hitokoto.module.css")

interface IHitokotoProps extends OnlyDarkThemeStoreType {}

interface IHitokotoStates {
    hitokoto: string
    from: string
}

/**
 * 一言组件
 * 接口由https://hitokoto.cn/提供
 */
@inject("darkThemeStore")
@observer
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

    static async getServerSideProps({ mobxState }) {
        return {
            darkThemeStore: mobxState.darkThemeStore,
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
        const { darkNow } = this.props.darkThemeStore
        return (
            <>
                {hitokoto && (
                    <div
                        className={
                            darkNow
                                ? hitokotoStyle.contentDark
                                : hitokotoStyle.contentLight
                        }
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
