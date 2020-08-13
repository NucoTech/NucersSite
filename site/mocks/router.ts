import { Router } from "https://deno.land/x/oak/mod.ts"
import { getIndexDatas } from "./controllers/indexs.ts"
import { getUsers, getUserProfile } from "./controllers/users.ts"

const router = new Router()

router
    .get("/", getIndexDatas)
    .get("/u", getUsers)
    .get("/u/:uid", getUserProfile)

export default router
