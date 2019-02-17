/**
 * Gets the repositories of the user from Github
 */

import { put, takeLatest } from 'redux-saga/effects';
import dataCV from 'mockup/dataCV';
import { CALL_DATA_CV } from './constants';
import { setDataCV } from './actions';

export function* callDataCV() {
  try {
    yield put(setDataCV(dataCV));
  } catch (err) {
    //
  }
}

export default function* githubData() {
  yield takeLatest(CALL_DATA_CV, callDataCV);
}
