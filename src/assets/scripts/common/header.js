import Headroom from 'headroom.js';
// import menu from './menu3d';

new Headroom(document.querySelector('header')).init();
document.querySelector('.header').addEventListener('mouseenter', e => {
    document.querySelector('.header').classList.remove('headroom--unpinned');
});
