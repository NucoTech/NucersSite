import React, { useState } from "react"
import { IHitokoto } from "@/utils/interfaces"
import ContentBox from "@/components/common/ContentBox/ContentBox"

import style from "./Hitokoto.less"

export default () => {
    const [hitokoto, setHitokoto] = useState({
        value: "",
        from: "",
    } as IHitokoto)

    const getHitokoto = async () => {
        try {
            const res = await fetch(
                "https://v1.hitokoto.cn?encode=json&chartset=utf-8&c=a&c=b&c=c&c=d&c=e&c=h&c=i&c=j",
            )
            const result = await res.json()

            setHitokoto({
                value: result.hitokoto,
                from: result.from,
            })
        } catch (e) {
            console.log(e)
        }
    }

    React.useEffect(() => {
        getHitokoto()
    }, [])

    return (
        <ContentBox>
            {hitokoto.value && (
                <div
                    className={style.hitokotoBox}
                    title="语料由一言Hitokoto提供"
                >
                    <div className={style.hitokotoValue}>{hitokoto.value}</div>
                    <div className={style.hitokotoFrom}>
                        ——『{hitokoto.from}』
                    </div>
                </div>
            )}
        </ContentBox>
    )
}
