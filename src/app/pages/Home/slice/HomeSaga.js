import { homeActions as actions } from './HomeSlice';
import { takeLatest, put } from 'redux-saga/effects';

function* test(action) {
  console.log(action);
  yield put({
    type: actions.testSuccess.type,
    payload: 'ok',
  });
}

export function* homeSaga() {
  yield takeLatest(actions.test.type, test);
}
