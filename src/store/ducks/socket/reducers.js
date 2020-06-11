export const Types = {
    WS_CONNECT: 'socket/connect',
    WS_DISCONNECT: 'socket/disconnect',
    SEND_MESSAGE: 'socket/send-message'
}

const initialState = {
    currentMessage: '',
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case Types.WS_CONNECT:
        return {...state };
    case Types.WS_DISCONNECT:
        return {...state };
    case Types.SEND_MESSAGE:
        return {
            ...state,
            currentMessage: action.payload.message
        };
    default:
        return state;
    }
}