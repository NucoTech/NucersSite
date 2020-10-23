import { defineConfig } from "umi"

export default defineConfig({
    nodeModulesTransform: {
        type: "none",
    },
    ssr: {
        forceInitial: true,
    },
    // dynamicImport: {},
    // dav: {},
    cssLoader: {
        localsConvention: "camelCase",
    },
    cssModulesTypescriptLoader: {},
})
