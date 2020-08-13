/**
 * mock服务器
 */
import { serve } from "https://deno.land/std/http/server.ts"

const port: number = 8000
const server = serve({
    port: port,
})
console.log(`mock服务器启动成功, 端口: ${port}...`)
