import { takeLatest, call, put } from 'redux-saga/effects';
import { BASE_URL } from 'utils/url';
import request from 'utils/request';
import * as CONST from './constants';
import { getFail, getSuccess } from './actions';

export function* getFunction() {
  try {
    const data = yield call(request, {
      url: `${BASE_URL}/posts`,
      method: 'GET',
    });
    if (data) {
      yield put(getSuccess(data.data));
    } else {
      yield put(getFail());
    }
  } catch (error) {
    yield put(getFail());
  }
}

export default function* asdSaga() {
  yield takeLatest(CONST.GET, getFunction);
}
