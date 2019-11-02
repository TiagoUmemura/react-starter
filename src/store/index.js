import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import auth from './ducks/auth/reducers';
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()
const reducers = combineReducers({
  auth,
});

export const Store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)