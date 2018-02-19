import {reducers} from '../Reducer/index';
import {createStore} from 'redux';


export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
};

export const store = configureStore();
