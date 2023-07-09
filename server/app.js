const http = require('http')
const Websocket = require('websocket').server
const port = 3000;
const ConnectionHandler = require('./ConnectionHandler')

const httpServer = http.createServer((req, {end, writeHead}) => {
    writeHead(200);
    end()
})

httpServer.listen(port, () => {
    console.log("Listen server on port " + port)
})

const connection = new ConnectionHandler(httpServer, Websocket)

connection.set()