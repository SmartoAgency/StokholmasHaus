import { gsap } from 'gsap/all';

const addAnimationToMap = selector => {
    const badges = document.querySelectorAll(selector);
    badges.forEach(badge => badge.classList.add('circle-animation'));

    gsap.to('.circle-animation', {
        repeat: Infinity,
        duration: 2,
        opacity: 0,
        scale: 2,
        transformOrigin: '50% 50%',
    });
};

export default addAnimationToMap;
