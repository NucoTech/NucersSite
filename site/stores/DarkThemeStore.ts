import { observable, action } from "mobx"
import { isNightNow } from "@utils/utils"

class DarkThemeStore {
    @observable darkNow: boolean = isNightNow()
    @action setDark = () => {
        this.darkNow = !this.darkNow
    }
}

export default DarkThemeStore
