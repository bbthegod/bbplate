import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the asd state domain
 */

const selectAsdDomain = state => state.asd || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Asd
 */

const makeSelectAsd = () =>
  createSelector(
    selectAsdDomain,
    substate => substate,
  );

export default makeSelectAsd;
export { selectAsdDomain };
