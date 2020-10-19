/**
 * 内容展示盒子
 */
import React from "react"

import style from "./ContentBox.less"

export default (props: any) => (
    <div className={style.contentBox}>{props.children}</div>
)
