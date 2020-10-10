/*
 *
 * Asd actions
 *
 */
import * as CONST from './constants';

export function get() {
  return {
    type: CONST.GET,
  };
}

export function getSuccess(data) {
  return {
    type: CONST.GET_SUCCESS,
    data,
  };
}

export function getFail() {
  return {
    type: CONST.GET_FAIL,
  };
}
