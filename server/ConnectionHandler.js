class ConnectionHandler {
    #clients
    #httpServer
    #websocketServer

    constructor(httpServer, Websocket) {
        this.#httpServer = httpServer
        this.#clients = []
        this.connectionCounter = 0
        this.Websocket = Websocket
    }

    set() {
        this.createWebsocket()
        this.createRequest()
    }

    createRequest() {
        this.#websocketServer.on('request', req => {
            const connection = req.accept('', req.origin)
            this.#clients.push(connection)

            this.onMessage(connection)
            this.onClose(connection)

            console.log('Connected number ' + ++this.connectionCounter)
        })
    }

    onMessage(connection) {
        connection.on('message', message => {
            const data = this.dataHandler(message)

            console.log('Received: ' + data);

            this.#clients.forEach(client => {
                if(connection !== client) {
                    client.send(data)
                }
            })
        })
    }

    onClose(connection) {
        connection.on('close', (reasonCode, description) => {
            console.log('Disconnected ' + connection.remoteAddress)
            console.dir({reasonCode, description})
        })
    }

    dataHandler(data) {
        const key = data.type + 'Data'

        return data[key]
    }

    createWebsocket() {
        this.#websocketServer = new this.Websocket({
            httpServer: this.#httpServer,
            autoAcceptConnections: false
        })
    }
}

module.exports = ConnectionHandler