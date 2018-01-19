import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas-registration';
import rootReducer from './index-reducers';

const saga = createSagaMiddleware();

const initializeStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(saga)
  );

  saga.run(rootSaga);

  return store;
};

export default initializeStore;