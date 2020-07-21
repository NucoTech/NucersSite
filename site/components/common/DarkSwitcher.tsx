import React from "react"
import { inject, observer } from "mobx-react"

interface IDarkSwitcherProps {
    darkThemeStore?: any
}

@inject("darkThemeStore")
@observer
export default class DarkSwitcher extends React.Component<IDarkSwitcherProps> {
    constructor(props: IDarkSwitcherProps) {
        super(props)
    }
    static async getInitialProps({ mobxStore }) {
        return { darkThemeStore: mobxStore.darkThemeStore }
    }

    render() {
        const { darkThemeStore } = this.props
        return (
            <div>
                <button onClick={() => darkThemeStore.setDark()}>
                    夜间模式
                </button>
            </div>
        )
    }
}
