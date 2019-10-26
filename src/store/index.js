import { createStore, combineReducers } from 'redux';
import auth from './ducks/auth/reducers';

const reducers = combineReducers({
  auth,
});

export const Store = createStore(reducers);