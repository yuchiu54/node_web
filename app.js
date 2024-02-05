const express = require("express")
require("dotenv").config()
server = express()

function check_ip(ip) {
    if (ip == process.env.IP_ONE) return true;
    if (ip == process.env.IP_TWO) return true;
    if (ip == process.env.IP_THREE) return true;
    return false;
}

server.get("/", (req, res) => {
    var ip = req.ip.split(":").pop()
    if (check_ip(ip)) {
        console.log("[ log ] visited");
        res.send("Request passes WAF");
    } else {
        console.log("Unknown ip tend to connect: ", req.ip)
        res.send("Forbidden");
    }
})

server.listen(3000, () => {
    console.log("server is listen to port 3000")
})
