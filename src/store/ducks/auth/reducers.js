// store/ducks/auth.js

// Action Types
export const Types = {
    LOGIN: 'auth/LOGIN',
    LOGOUT: 'auth/LOGOUT',
};

// Reducer
const initialState = {
    isLogged: false,
    token: null,
    user: {},
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case Types.LOGIN:
        return {...state,
                isLogged: true
            };
    case Types.LOGOUT:
        return {...state,
                isLogged: false
            };
    default:
        return state;
    }
}