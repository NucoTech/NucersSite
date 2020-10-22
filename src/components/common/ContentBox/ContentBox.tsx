/**
 * 内容展示盒子
 */
import React from "react"

import style from "./ContentBox.less"

interface ContentPropsType {
    header?: string
    children?: any
}

export default ({ header = "", children }: ContentPropsType) => (
    <div className={style.contentBox}>
        {header && <div className={style.header}>{header}</div>}
        {children}
    </div>
)
