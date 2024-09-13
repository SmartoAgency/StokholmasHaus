import frontAnimation from './animation';
import accordion from '../modules/accordion';
import upScroll from '../modules/upScroll/upScroll';
import addAnimationToMap from '../modules/map/animationMap';
import getApartmentScheme from '../modules/getApartmentScheme/getApartmentScheme';
import getFloorScheme from '../modules/getFloorScheme/getFloorScheme';

// import deviceInfo from 'current-device';
// import { lenis } from './modules/scroll/leniscroll';

// const scroller = lenis;

document.addEventListener('DOMContentLoaded', () => {
    frontAnimation();
    accordion(
        '.answer-list__item',
        '[answer-item__answer]',
        '[answer-item__label]',
        '[answer-list__item-icon]',
    );
    upScroll();
    addAnimationToMap('.home-screen10-container svg g circle:first-of-type');
    getApartmentScheme('[container-button-scheme]');
    getFloorScheme('[data-apartment-info]');
});
