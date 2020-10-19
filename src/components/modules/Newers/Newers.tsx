import React from "react"
import { INewer, INewers } from "@/utils/interfaces"
import ContentBox from "@/components/common/ContentBox/ContentBox"
import style from "./Newers.less"

interface INewersProps {
    newers?: INewers
}

/**
 * 新加入成员组件，组件复用
 */
export default ({ newers = [] }: INewersProps) => (
    <ContentBox header="新成员">
        <ul className={style.gridAvatar}>
            {newers &&
                newers.map((item: INewer) => (
                    <li key={item.uid}>
                        <a href={`/u/${item.uid}`} title={item.name}>
                            <img
                                src={item.avatar}
                                width="50px"
                                height="50px"
                                alt="avatar"
                            />
                        </a>
                    </li>
                ))}
        </ul>
    </ContentBox>
)
