import { put, takeLatest, all } from 'redux-saga/effects'

import { toast } from 'react-toastify';
import history from '../../../history/history'

export function * login(action) {
    try {
    //    const user = yield call(Api.fetchUser, action.payload.userId);
    //    yield put({type: "USER_FETCH_SUCCEEDED", user: user});
        console.log(action.payload.username)
        toast.success('login success')
        history.push('/home')
    } catch (e) {
       yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

export function * logout() {
   try {
         history.push('/')
         toast.info('logout success')
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

export default all([
   takeLatest('auth/LOGIN', login),
   takeLatest('auth/LOGOUT', logout)
])