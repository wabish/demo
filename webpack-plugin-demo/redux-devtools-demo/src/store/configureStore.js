import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers.js';

import DevTools from '../containers/DevTools';

const enhancer = compose(
  // 要使用的中间件，放在前面
  // applyMiddleware(thunk),

  DevTools.instrument()
);

export default function createStoreWithMiddleware(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  return store;
};