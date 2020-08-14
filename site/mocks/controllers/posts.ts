export const postPicture = (context: any) => {
    console.log(`访问 mock api--> ${context.matched[0].path}`)
    console.log(context)
    context.response.status = 200
    context.response.body = {
        msg: "",
        code: 0,
        data: {
            errFiles: ["filename", "filename2"],
            succMap: {
                filename3: "filepath3",
                filename4: "filepath4",
            },
        },
    }
}

export const postRePicture = (context: any) => {
    console.log(`访问 mock api--> ${context.matched[0].path}`)
    console.log(context)
    context.response.status = 200
    context.response.body = {
        msg: "",
        code: 0,
        data: {
            originalURL: "",
            url: "",
        },
    }
}
