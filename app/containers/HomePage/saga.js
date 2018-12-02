/**
 * Gets the gifs for the keyword from Giphy API
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_GIFS } from 'containers/App/constants';
import { gifsLoaded, gifLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectKeyword } from 'containers/HomePage/selectors';

/**
 * Giphy API gifs request/response handler
 */
export function* getGifs() {
  // Select keyword from store
  const baseAPIURL = 'https://api.giphy.com';
  const APIKEY = 'Z5XiFHOYMn8y8muarg2Bg8PCmpxQZyWz';
  const keyword = yield select(makeSelectKeyword());
  const requestURL = `${baseAPIURL}/v1/gifs/search?api_key=${APIKEY}&q=${keyword}`;

  try {
    // Call our request helper (see 'utils/request')
    const gifs = yield call(request, requestURL);
    yield put(gifsLoaded(gifs.data, keyword));
  } catch (err) {
    yield put(gifLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* giphyData() {
  // Watches for LOAD_GIFS actions and calls getGifs when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_GIFS, getGifs);
}
