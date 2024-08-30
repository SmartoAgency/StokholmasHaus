import { gsap, ScrollTrigger } from 'gsap/all';
import splitToLinesAndFadeUp from '../modules/effects/splitLinesAndFadeUp';
import { lenis } from '../modules/scroll/leniscroll';
import '../modules/effects/initParallaxBlock';

gsap.registerPlugin(ScrollTrigger);
splitToLinesAndFadeUp('.home-screen-title');

gsap.timeline({
    scrollTrigger: {
        trigger: '.home-screen1',
        start: '62% top',
    },
})
    .from('.home-screen2-info__count', {
        innerText: 0,
        duration: 0.5,
        snap: {
            innerText: 1,
        },
    })
    .fromTo(
        '.home-screen2-info__title',
        {
            opacity: 0,
            y: 10,
        },
        {
            opacity: 1,
            y: 0,
        },
        '< 80%',
    );
