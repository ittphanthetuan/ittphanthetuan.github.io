/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { SET_DATA_CV } from './constants';

// The initial state of the App
export const initialState = fromJS({
  dataCV: {
    titleHeader: '',
    info: {},
    categories: [],
  },
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA_CV:
      // Delete prefixed '@' from the github username
      return state.set('dataCV', fromJS(action.dataCV));
    default:
      return state;
  }
}

export default homeReducer;
