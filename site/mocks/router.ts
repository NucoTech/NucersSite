import { Router } from "https://deno.land/x/oak/mod.ts"
import { getIndexDatas } from "./controllers/indexs.ts"
import {
    getUsers,
    getUserProfile,
    getUserPosts,
    getUserIdeas,
} from "./controllers/users.ts"
import {
    getGroups,
    getGroupProfile,
    getGroupOAProfile,
} from "./controllers/groups.ts"

const router = new Router()

router
    .get("/", getIndexDatas)
    .get("/u", getUsers)
    .get("/u/:uid", getUserProfile)
    .get("/u/:uid/posts", getUserPosts)
    .get("/u/:uid/ideas", getUserIdeas)
    .get("/g", getGroups)
    .get("/g/:gid", getGroupProfile)
    .get("/g/oa/:gid", getGroupOAProfile)

export default router
