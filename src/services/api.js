import axios from 'axios'
import { toast } from 'react-toastify'

import { Store } from 'store/index'
import { logout } from 'store/ducks/auth/actions'

const api = axios.create({
  baseURL: "http://127.0.0.1:3333"
});

api.interceptors.request.use(async config => {
  const auth = JSON.parse(localStorage.getItem('persist:authKey'))
  const token = JSON.parse(auth.auth)
  if (auth) {
    config.headers.Authorization = `Bearer ${token.token}`
  }
  return config
})

api.interceptors.response.use(response => { return response }, error => {
  if (error.response.data.message) {
    toast.error(JSON.stringify(error.response.data.message))
  } else {
    toast.error(`${error.response.statusText} - ${error.response.config.url}`)
  }

  if (error.response.status === 401) {
    Store.dispatch(logout())
  }
  throw error
})

export default api;