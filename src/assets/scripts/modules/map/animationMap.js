import { gsap } from 'gsap/all';

const addAnimationToMap = selector => {
    const badges = document.querySelectorAll(selector);
    badges.forEach((badge, i) => {
        badge.classList.add('circle-animation');
        if (i === 0) {
            badge.parentElement.classList.add('main-map-animation');
            openMapInNewTab(badge.parentElement);
        }
    });

    gsap.to('.circle-animation', {
        repeat: Infinity,
        duration: 2,
        opacity: 0,
        scale: 2,
        transformOrigin: '50% 50%',
    });

    function openMapInNewTab(trigger) {
        trigger.addEventListener('click', e => {
            window.open(
                'https://www.google.com/maps/dir//Stokholmas+iela+26,+Zieme%C4%BCu+rajons,+R%C4%ABga,+LV-1014',
                '_blank',
            );
        });
    }
};

export default addAnimationToMap;
