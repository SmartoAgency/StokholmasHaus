import Headroom from 'headroom.js';
import menu from './menu3d';
import accordion from './modules/accordion';
import splitToLinesAndFadeUp from './modules/effects/splitLinesAndFadeUp';

document.addEventListener('DOMContentLoaded', () => {
    accordion(
        '.answer-list__item',
        '[answer-item__answer]',
        '[answer-item__label]',
        '[answer-list__item-icon]',
    );
    splitToLinesAndFadeUp('.home-screen-title');

    new Headroom(document.querySelector('header')).init();
    document.querySelector('.header').addEventListener('mouseenter', e => {
        document.querySelector('.header').classList.remove('headroom--unpinned');
    });

    menu();
});