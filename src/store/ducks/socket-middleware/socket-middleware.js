import openSocket from 'socket.io-client'

const socketMiddleware = () => {
    let socket = null

    return store => next => (action) => {
        switch (action.type) {
            case 'WS_CONNECT':
                if (socket !== null) {
                    socket.close()
                }
                socket = openSocket("http://localhost:3003", { transports: ['websocket'], upgrade: false })
                
                //join to a socket channel room
                socket.emit('join', 'room-1-id')
                //handle socket connection error
                socket.on('connect_error', (error) => {
                    console.error('ERRO AO CONECTAR COM SOCKET', error)
                    socket.close()
                })
                //Listen to channel message and receive message
                socket.on('receiveMessageChannelName', receivedMessage => {
                    console.log(receivedMessage)
                })
                break
            case 'WS_DISCONNECT':
                if (socket !== null) {
                    console.warn('FECHANDO SOCKET')
                    socket.close()
                  }
                  socket = null
                break
            case 'SEND_MESSAGE':
                //sendo message on socket channel
                socket.emit('sendMessage', action.payload.message)
                break
            default:
                return next(action)
        }
    }
}

export default socketMiddleware()