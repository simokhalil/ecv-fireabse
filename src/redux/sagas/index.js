import { all, fork } from 'redux-saga/effects';

import postsSaga from './posts-saga';

const sagas = [
  postsSaga,
];

function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)));
}

export default rootSaga;
