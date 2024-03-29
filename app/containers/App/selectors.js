/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const makeSelectCurrentKeyword = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentKeyword')
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectGifs = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['gifData', 'gifs'])
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

export {
  selectGlobal,
  makeSelectCurrentKeyword,
  makeSelectLoading,
  makeSelectError,
  makeSelectGifs,
  makeSelectLocation,
};
