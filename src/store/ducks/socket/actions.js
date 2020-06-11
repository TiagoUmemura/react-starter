import { Types } from './reducers'

export function socketConnect() {
    return {
        type: Types.WS_CONNECT
    }
}
  
export function socketDisconnect() {
    return {
        type: Types.WS_DISCONNECT,
    }
}

export function sendMessage(message) {
    return {
        type: Types.SEND_MESSAGE,
        payload: {
            message
        }
    }
}