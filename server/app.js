const http = require('http')
const Websocket = require('websocket').server

const port = process.env.WEBSOCKET_PORT || 3000;

const httpServer = http.createServer(require('./httpServer'));
httpServer.listen(port, () => console.log("Listen server on port " + port))

new (require('./WebsocketServerService'))(httpServer, Websocket).set()