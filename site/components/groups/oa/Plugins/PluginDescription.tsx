import React from "react"

const pluginDescriptionStyle = require("@styles/components/groups/oa/PluginDescription.module.css")

interface PluginDescriptionProps {
    gid: string
    pluginId: string
}

export default class PluginDescription extends React.Component<
    PluginDescriptionProps
> {
    render() {
        return (
            <div className={pluginDescriptionStyle.content}>
                <div className={pluginDescriptionStyle.header}>
                    <div className={pluginDescriptionStyle.headerLeft}>
                        <img
                            alt="icon"
                            src="/excel.png"
                            width="50px"
                            height="50px"
                        />
                        <div className={pluginDescriptionStyle.infos}>
                            <div className={pluginDescriptionStyle.name}>
                                测试插件
                            </div>
                            <div>Author: Nuco.Tech</div>
                            <div>
                                Website:
                                <a href="https://nuco.tech">
                                    https://nuco.tech
                                </a>
                            </div>
                        </div>
                    </div>
                    <button className={pluginDescriptionStyle.getPlugin}>获取插件</button>
                </div>
                <div className={pluginDescriptionStyle.description}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ad, dolores, eaque voluptate assumenda natus fuga beatae
                    possimus dicta expedita ut voluptatum officia modi eligendi
                    laboriosam facere. Quasi hic dolor eos. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Dolorum tenetur aut
                    consectetur, eos voluptatibus repellendus ullam voluptates
                    aspernatur architecto commodi ab laboriosam dolore quae!
                    Placeat sint deserunt perferendis quas dolore. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Incidunt fuga
                    voluptatibus error dolorem quo sequi, esse perspiciatis
                    consequatur praesentium, soluta eveniet dolor eos, ratione
                    reiciendis ducimus excepturi corrupti illum consectetur.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus eius sequi modi recusandae architecto, fuga
                    saepe inventore quod vel qui quia reiciendis accusamus dolor
                    soluta similique temporibus itaque exercitationem.
                    Laudantium. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Architecto animi sunt eum est ratione
                    reprehenderit, libero maiores nemo optio molestias itaque
                    officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto animi sunt eum est
                    ratione reprehenderit, libero maiores nemo optio molestias
                    itaque officia, dignissimos dolorem et voluptatibus. Beatae
                    veritatis dignissimos quod?
                </div>
            </div>
        )
    }
}
