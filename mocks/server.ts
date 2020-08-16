/**
 * mock服务器
 */
import { Application } from "https://deno.land/x/oak/mod.ts"
import router from "./router.ts"

const app = new Application()
const port: number = 8000

console.log(`本地mock服务器启动成功，端口: ${port}...\n`)

app.use(router.routes())
app.use(router.allowedMethods())

await app.listen({ port })
