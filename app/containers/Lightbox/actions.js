/*
 * Lightbox Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
    OPEN_LIGHTBOX,
    CLOSE_LIGHTBOX,
    SET_SLIDE 
} from './constants';

/**
 * Set the current slide
 *
 * @param  {number} slide The number of the new current slide
 *
 * @return {object}    An action object with a type of CHANGE_KEYWORD
 */
export function setCurrentSlide(slide) {
  return {
    type: SET_SLIDE,
    slide
  };
}
/**
 * Open the Lightbox Modal
 *
 * @return {object}    An action object with a type of CHANGE_KEYWORD
 */
export function openLightbox() {
  return {
    type: OPEN_LIGHTBOX,
  };
}
/**
 * Close the Lightbox Modal
 *
 * @return {object}    An action object with a type of CHANGE_KEYWORD
 */
export function closeLightbox() {
  return {
    type: CLOSE_LIGHTBOX,
  };
}
