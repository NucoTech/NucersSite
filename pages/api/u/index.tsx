const getUsers = (req, res) => {
    req.statusCode = 200
    res.end(
        JSON.stringify({
            success: "ok",
            data: {
                uids: ["u123123", "u321212", "u432234", "u0", "u1"],
            },
        })
    )
}

export default getUsers
