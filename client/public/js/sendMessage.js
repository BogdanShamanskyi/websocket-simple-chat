const socket = new WebSocket('ws://localhost:3000')

document.addEventListener('DOMContentLoaded', () => {
    const chat = document.querySelector('.messages_list')
    const message = document.querySelector('.message')
    message.focus()

    const writeLine = text => {
        const line = document.createElement('div')
        line.innerHTML = `<li>${text}</li>`
        chat.appendChild(line)
    }

    socket.onopen = () => {
        writeLine('connected')
    }
    socket.onmessage = (event) => {
        writeLine(event.data)
    }
    socket.onclose = () => {
        writeLine('closed')
    }
    socket.onerror = () => {
        console.log('Socket error')
    }

    const button = document.querySelector('button')

    button.addEventListener('click', event => {
        writeLine(message.value)
        socket.send(message.value)
        message.value = ''
    })

})
