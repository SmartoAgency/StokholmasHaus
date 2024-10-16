import './animation';

import accordion from '../modules/accordion';
import menu from '../modules/menu';
import upScroll from '../modules/upScroll/upScroll';
import addAnimationToMap from '../modules/map/animationMap';
import getApartmentScheme from '../modules/getApartmentScheme/getApartmentScheme';
import draggableMap from '../modules/draggableMap/draggableMap';
import getPhotoGallery from '../modules/getPhotoGallery/getPhotoGallery';

// import deviceInfo from 'current-device';
// import { lenis } from './modules/scroll/leniscroll';

// const scroller = lenis;

document.addEventListener('DOMContentLoaded', () => {
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
    draggableMap('.home-screen10-container', '.home-screen10-map', '.main-map-animation');
    getPhotoGallery('[data-button-photo]');
});
