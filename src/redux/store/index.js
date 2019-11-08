import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { logger } from 'redux-logger';

import reducers from '../reducers';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
  logger,
];

const store = createStore(
  reducers,
  compose(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(sagas);

export default store;
