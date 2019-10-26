 // Action Creators
import { Types } from './reducers';

export function login(username, password) {
    return {
        type: Types.LOGIN,
        payload: {
            username,
            password
        }
    }
}
  
export function logout() {
    return {
        type: Types.LOGOUT,
    }
}