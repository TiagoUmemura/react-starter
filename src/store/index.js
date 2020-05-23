import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import auth from './ducks/auth/reducers';
import rootSaga from './rootSaga'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'] //Persists auth when browser refresh
}

const sagaMiddleware = createSagaMiddleware()
export const rootReducers = combineReducers({
  auth,
});

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const Store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
export const Persistor = persistStore(Store);

sagaMiddleware.run(rootSaga)