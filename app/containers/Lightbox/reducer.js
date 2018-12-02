/*
 * Lightbox
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
    OPEN_LIGHTBOX,
    CLOSE_LIGHTBOX,
    SET_SLIDE 
} from './constants';

// The initial state of the App
const initialState = fromJS({
  visible: false,
  currentSlide: null,
});

function lightboxReducer(state = initialState, action) {
  switch (action.type) {
      case OPEN_LIGHTBOX:
        return state.set('visible', true);
      case CLOSE_LIGHTBOX:
        return state
        .set('visible', false)
      case SET_SLIDE:
        return state.set('currentSlide', action.slide);
      default:
      return state;
  }
}

export default lightboxReducer;
