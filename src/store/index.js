import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import auth from './ducks/auth/reducers'
import socket from './ducks/socket/reducers'
import socketMiddleware from './ducks/socket-middleware/socket-middleware'
import rootSaga from './rootSaga'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'] //Persists auth when browser refresh
}

export const rootReducers = combineReducers({
  auth,
  socket
})
const persistedReducer = persistReducer(persistConfig, rootReducers)

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware, socketMiddleware]

export const Store = createStore(persistedReducer, applyMiddleware(...middlewares))
export const Persistor = persistStore(Store);

sagaMiddleware.run(rootSaga)