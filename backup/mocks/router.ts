import { postPicture, postRePicture, postNewPost } from "./controllers/posts.ts"
import { getCodes, getCodeId } from "./controllers/codes.ts"

const router = new Router()

router
    .post("/p/new", postNewPost)
    .post("/p/new/picture", postPicture)
    .post("/p/new/repicture", postRePicture)

export default router
