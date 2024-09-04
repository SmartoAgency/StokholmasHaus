import './animation';
import accordion from '../modules/accordion';
import upScroll from '../modules/upScroll/upScroll';

// import deviceInfo from 'current-device';
// import { lenis } from './modules/scroll/leniscroll';
const { default: googleMap } = require('../modules/map/map');

// const scroller = lenis;

document.addEventListener('DOMContentLoaded', () => {
    accordion(
        '.answer-list__item',
        '[answer-item__answer]',
        '[answer-item__label]',
        '[answer-list__item-icon]',
    );
    upScroll();
    googleMap();
});
