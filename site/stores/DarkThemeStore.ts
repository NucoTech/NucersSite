import { observable, action } from "mobx"
import { isNightNow } from "@utils/utils"

interface DarkTheme {
    darkNow?: boolean
    setDark?: () => {}
}

export interface OnlyDarkThemeStoreType {
    darkThemeStore?: DarkTheme
}

class DarkThemeStore {
    @observable darkNow: boolean = isNightNow()
    @action setDark = () => {
        this.darkNow = !this.darkNow
    }
}

export default DarkThemeStore
