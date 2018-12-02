/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_GIFS } from 'containers/App/constants';
import { gifsLoaded, gifLoadingError } from 'containers/App/actions';

import giphyData, { getGifs } from '../saga';

const keyword = 'cats';

/* eslint-disable redux-saga/yield-effects */
describe('getGifs Saga', () => {
  let getGifsGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getGifsGenerator = getGifs();

    const selectDescriptor = getGifsGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getGifsGenerator.next(keyword).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the gifsLoaded action if it requests the data successfully', () => {
    const response = [{
      name: 'First gif',
    }, {
      name: 'Second gif',
    }];
    const putDescriptor = getGifsGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(gifsLoaded(response, keyword)));
  });

  it('should call the gifLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getGifsGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(gifLoadingError(response)));
  });
});

describe('giphyDataSaga Saga', () => {
  const giphyDataSaga = giphyData();

  it('should start task to watch for LOAD_GIFS action', () => {
    const takeLatestDescriptor = giphyDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_GIFS, getGifs));
  });
});
