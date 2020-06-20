import { put, takeLatest, all } from 'redux-saga/effects'

import { toast } from 'react-toastify';
import history from '../../../history/history'
// import api from 'services/api'

export function * login(action) {
    try {
      // const response = yield call(
      //    api.post,
      //    `/v1/companies/${payload.companyId}/numbers`,
      //    payload.formNumber
      //  )
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