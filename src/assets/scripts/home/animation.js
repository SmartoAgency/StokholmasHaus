import { gsap, ScrollTrigger } from 'gsap/all';
import splitToLinesAndFadeUp from '../modules/effects/splitLinesAndFadeUp';
import { lenis } from '../modules/scroll/leniscroll';
import '../modules/effects/initParallaxBlock';

const frontAnimation = () => {
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

    gsap.timeline({
        scrollTrigger: {
            trigger: '.home-screen4',
            start: '42% top',
            end: 'bottom',
        },
    })
        .fromTo(
            '.home-screen5-title h2',
            {
                opacity: 0,
                x: -300,
            },
            {
                opacity: 1,
                x: 0,
            },
        )
        .fromTo(
            '.home-screen5-title span',
            {
                opacity: 0,
                x: 300,
            },
            {
                opacity: 1,
                x: 0,
            },
            '< 10%',
        );

    gsap.timeline({
        scrollTrigger: {
            trigger: '.home-screen9',
            start: '42% top',
        },
    })
        .fromTo(
            '.home-screen10-title h2',
            {
                opacity: 0,
                x: -300,
            },
            {
                opacity: 1,
                x: 0,
            },
        )
        .fromTo(
            '.home-screen10-title > span',
            {
                opacity: 0,
                x: 300,
            },
            {
                opacity: 1,
                x: 0,
            },
            '< 10%',
        );

    gsap.timeline({
        scrollTrigger: {
            trigger: '.home-screen6',
            start: 'top 50%',
            end: 'bottom',
        },
    }).from('.answer-list__item', {
        ease: 'back',
        autoAlpha: 0,
        duration: 1.5,
        y: 80,
        stagger: 0.2,
    });

    gsap.timeline({
        scrollTrigger: {
            trigger: '.home-screen5',
            start: 'top 50%',
            end: 'bottom',
        },
    }).from('.home-screen5-list li', {
        ease: 'back',
        autoAlpha: 0,
        duration: 1.5,
        y: 80,
        stagger: 0.2,
    });

    gsap.timeline({
        scrollTrigger: {
            trigger: '.home-screen3',
            scrub: true,
            start: '-70% top',
            end: 'bottom bottom',
        },
    }).from('.home-screen3-desc .decoration-line .active', {
        scaleX: 0,
        transformOrigin: 'right',
        ease: 'none',
    });

    gsap.timeline({
        scrollTrigger: {
            trigger: '.home-screen4',
            scrub: true,
            start: '-70% top',
            end: 'bottom bottom',
        },
    }).from('.home-screen4-desc .decoration-line .active', {
        scaleX: 0,
        transformOrigin: 'left',
        ease: 'none',
    });
};

export default frontAnimation;
