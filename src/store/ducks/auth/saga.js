import { put, takeLatest } from 'redux-saga/effects'
import history from '../../../history/history'

function * login(action) {
    try {
    //    const user = yield call(Api.fetchUser, action.payload.userId);
    //    yield put({type: "USER_FETCH_SUCCEEDED", user: user});
        console.log(action.payload.username)
        history.push('/home')
    } catch (e) {
       yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
 }

 function * logout() {
   try {
       history.push('/')
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

 function * authSaga() {
    yield takeLatest('auth/LOGIN', login);
    yield takeLatest('auth/LOGOUT', logout);

  }
  
  export default authSaga;