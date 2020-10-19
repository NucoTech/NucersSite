import { defineConfig } from "umi"

export default defineConfig({
    nodeModulesTransform: {
        type: "none",
    },
    // ssr: {},
    cssLoader: {
        localsConvention: "camelCase",
    },
    cssModulesTypescriptLoader: {},
})
