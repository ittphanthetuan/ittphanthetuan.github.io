import { CALL_DATA_CV, SET_DATA_CV } from './constants';
export function callDataCV() {
  return {
    type: CALL_DATA_CV,
  };
}

export function setDataCV(dataCV) {
  return {
    type: SET_DATA_CV,
    dataCV,
  };
}
