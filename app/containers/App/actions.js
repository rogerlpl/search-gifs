/*
 * App Actions
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
  LOAD_GIFS,
  LOAD_GIFS_SUCCESS,
  LOAD_GIFS_ERROR,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_GIFS
 */
export function loadGifs() {
  return {
    type: LOAD_GIFS,
  };
}

/**
re loaded by the request saga * Dispatched when the gifs a
 *
 * @param  {array} gifs The gifs data
 * @param  {string} keyword The current keyword
 *
 * @return {object}      An action object with a type of LOAD_GIFS_SUCCESS passing the gifs
 */
export function gifsLoaded(gifs, keyword) {
  return {
    type: LOAD_GIFS_SUCCESS,
    gifs,
    keyword,
  };
}

/**
 * Dispatched when loading the gifs fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_GIFS_ERROR passing the error
 */
export function gifLoadingError(error) {
  return {
    type: LOAD_GIFS_ERROR,
    error,
  };
}
