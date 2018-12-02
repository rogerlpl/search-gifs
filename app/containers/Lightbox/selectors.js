/**
 * Lightbox selectors
 */

import { createSelector } from 'reselect';

const selectLightbox = (state) => state.get('lightbox');

const makeSelectVisibility = () => createSelector(
    selectLightbox,
    (lightboxState) => lightboxState.get('visible')
);
const makeSelectCurrentSlide = () => createSelector(
    selectLightbox,
    (lightboxState) => lightboxState.get('currentSlide')
);

export {
    selectLightbox,
    makeSelectVisibility,
    makeSelectCurrentSlide,
};
