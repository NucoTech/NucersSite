import IconFont from "@/components/tools/IconFont"
import React from "react"

import style from "./Footer.less"

export default () => (
    <div className={style.pageFooter}>
        <div className={style.footerContent}>
            <div className={style.beianInfo}>
                <div className={style.icp}>晋ICP备20203002号</div>
                <div className={style.gongan}>
                    <img
                        src={require("@/assets/gongan.png")}
                        alt="gongan.png"
                    />
                    晋网安备324234234234234234234号
                </div>
            </div>
            <div className={style.socialInfo}>
                <div>
                    本站内容遵守『
                    <a href="/p/content-rules">Nucers内容协议规范</a>』&times;
                    Version {require("../../../../package.json").version}
                </div>
                <div className={style.socialMedia}>
                    <a
                        href="https://github.com/NucoTech/NucersSite"
                        title="github"
                    >
                        <IconFont type="nucers-github" />
                    </a>
                </div>
            </div>
        </div>

        <div className={style.pageCopyright}>
            Copyright &copy; 2020 <a href="https://nuco.tech">Nuco.Tech</a> All
            Rights Reserved!
        </div>
    </div>
)
