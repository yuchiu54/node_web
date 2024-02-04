const express = require("express")
server = express()

server.get("/", (req, res) => {
    res.send("Request passes WAF")
})

server.listen(3000, () => {
    console.log("server is listen to port 3000")
})
