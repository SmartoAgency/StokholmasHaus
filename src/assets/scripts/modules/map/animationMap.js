import { gsap } from 'gsap/all';

const addAnimationToMap = selector => {
    const badges = document.querySelectorAll(selector);
    badges.forEach((badge, i) => {
        badge.classList.add('circle-animation');
        if (i === 0) {
            badge.parentElement.classList.add('main-map-animation');
        }
    });

    gsap.to('.circle-animation', {
        repeat: Infinity,
        duration: 2,
        opacity: 0,
        scale: 2,
        transformOrigin: '50% 50%',
    });
};

export default addAnimationToMap;
