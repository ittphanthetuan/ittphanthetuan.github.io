/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const makeSelectDataCV = () =>
  createSelector(selectHome, homeState => homeState.get('dataCV').toJS());

export { selectHome, makeSelectDataCV };
