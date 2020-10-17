export const getCodes = ({ response, matched }: any) => {
    console.log(`访问 mock api--> ${matched[0].path}`)
    response.status = 200
    response.body = {
        success: "ok",
        data: {
            codes: [
                {
                    id: "123123",
                },
                {
                    id: "22334",
                },
                {
                    id: "432452345324523452345",
                },
            ],
        },
    }
}

export const getCodeId = ({ response, matched }: any) => {
    console.log(`访问 mock api--> ${matched[0].path}`)
    response.status = 200
    response.body = {
        id: "123123",
        title: "测试代码",
        mode: "text/javascript",
        code: "console.log('Hello World')",
    }
}
