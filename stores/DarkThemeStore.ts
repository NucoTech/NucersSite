import { observable, action } from "mobx"

interface DarkTheme {
    darkNow?: boolean
    setDark?: () => {}
    setLocalDark?: (ifDark: boolean) => {}
}

export interface OnlyDarkThemeStoreType {
    darkThemeStore?: DarkTheme
}

class DarkThemeStore {
    @observable darkNow: boolean = false
    @action setDark = () => {
        this.darkNow = !this.darkNow
    }
    @action setLocalDark = (ifDark: boolean) => {
        this.darkNow = ifDark
    }
}

export default DarkThemeStore
