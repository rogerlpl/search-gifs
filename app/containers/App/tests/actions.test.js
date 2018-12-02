import {
  LOAD_GIFS,
  LOAD_GIFS_SUCCESS,
  LOAD_GIFS_ERROR,
} from '../constants';

import {
  loadGifs,
  gifsLoaded,
  gifLoadingError,
} from '../actions';

describe('App Actions', () => {
  describe('loadGifs', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_GIFS,
      };

      expect(loadGifs()).toEqual(expectedResult);
    });
  });

  describe('gifsLoaded', () => {
    it('should return the correct type and the passed gifs', () => {
      const fixture = ['Test'];
      const keyword = 'test';
      const expectedResult = {
        type: LOAD_GIFS_SUCCESS,
        gifs: fixture,
        keyword,
      };

      expect(gifsLoaded(fixture, keyword)).toEqual(expectedResult);
    });
  });

  describe('gifLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_GIFS_ERROR,
        error: fixture,
      };

      expect(gifLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
