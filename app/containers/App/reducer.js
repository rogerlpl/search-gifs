/*
 * AppReducer
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

import {
  LOAD_GIFS_SUCCESS,
  LOAD_GIFS,
  LOAD_GIFS_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentKeyword: false,
  gifData: {
    gifs: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_GIFS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['gifData', 'gifs'], false);
    case LOAD_GIFS_SUCCESS:
      return state
        .setIn(['gifData', 'gifs'], action.gifs)
        .set('loading', false)
        .set('currentKeyword', action.keyword);
    case LOAD_GIFS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
