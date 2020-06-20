import openSocket from 'socket.io-client'
import {Types} from '../socket/reducers'
import { toast } from 'react-toastify'

const socketMiddleware = () => {
    let socket = null

    return store => next => (action) => {
        switch (action.type) {
            case Types.WS_CONNECT:
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
            case Types.WS_DISCONNECT:
                if (socket !== null) {
                    console.warn('FECHANDO SOCKET')
                    socket.close()
                  }
                  socket = null
                break
            case Types.SEND_MESSAGE:
                //send message on socket channel
                if(socket !== null) {
                    socket.emit('sendMessage', action.payload.message)
                } else {
                    toast.info('socket não está conectado: ' + action.payload.message)
                }
                break
            default:
                return next(action)
        }
    }
}

export default socketMiddleware()