import './animation';

import accordion from '../modules/accordion';
import menu from '../modules/menu';
import upScroll from '../modules/upScroll/upScroll';
import addAnimationToMap from '../modules/map/animationMap';
import getApartmentScheme from '../modules/getApartmentScheme/getApartmentScheme';
import draggableMap from '../modules/draggableMap/draggableMap';
import getPhotoGallery from '../modules/getPhotoGallery/getPhotoGallery';
import redirectTo3dModule from '../modules/redirectTo3dModule/redirectTo3dModule';
import loadIframeOnVisible from '../modules/loadIframeOnVisible/loadIframeOnVisible';
import drawLocationMap from '../modules/drawLocationMap';
import slider from '../modules/slider';
import { saveSitePosition } from '../utils/saveSitePosition';
import restoreScrollPosition from '../modules/restoreScrollPosition/restoreScrollPosition';

// import deviceInfo from 'current-device';
// import { lenis } from './modules/scroll/leniscroll';

// const scroller = lenis;

document.addEventListener('DOMContentLoaded', () => {
    drawLocationMap();
    restoreScrollPosition();
    accordion(
        '.answer-list__item',
        '[answer-item__answer]',
        '[answer-item__label]',
        '[answer-list__item-icon]',
    );
    upScroll();
    menu();
    addAnimationToMap('.home-screen10-container svg g circle:first-of-type');
    getApartmentScheme('[data-apartment-section]');
    draggableMap(
        '.home-screen10-container',
        '.home-screen10-map.map-visible',
        '.map-visible .main-map-animation',
    );
    getPhotoGallery('.gallery-slider', '[data-button-image]');
    slider('[gallery-slider__26]');
    slider('[gallery-slider-26__c]');
    slider('[gallery-slider-26__a]');
    redirectTo3dModule('[data-3d-link-btn]');
    loadIframeOnVisible('.home-screen6-map iframe');
    document
        .querySelectorAll('.sl-nav li')
        .forEach(lang => lang.addEventListener('click', saveSitePosition));
});
