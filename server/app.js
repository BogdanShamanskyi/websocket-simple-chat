const http = require('http')
const Websocket = require('websocket').server
const port = 3000;
const ConnectionHandler = require('./ConnectionHandler')

const httpServer = http.createServer((req, res) => {
    res.writeHead(200);
    res.end()
})

httpServer.listen(port, () => {
    console.log("Listen server on port " + port)
})

const connection = new ConnectionHandler(httpServer, Websocket)

connection.set()