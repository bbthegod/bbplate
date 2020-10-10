/*
 *
 * Asd reducer
 *
 */
import produce from 'immer';
import * as CONST from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const asdReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case CONST.GET:
        return {
          ...state,
          loading: true,
          errorr: false,
          success: false,
        };
      case CONST.GET_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          success: true,
          data: action.data,
        };
      case CONST.GET_FAIL:
        return {
          ...state,
          loading: false,
          error: true,
          success: false,
        };
      default:
        return state;
    }
  });

export default asdReducer;
