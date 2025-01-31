import Swiper from 'swiper/bundle';

const slider = (
    sliderSelector,
    prevBtnSelector = '[slider-btn__prev]',
    nextBtnSelector = '[slider-btn__next]',
) => {
    return new Swiper(sliderSelector + ' > .swiper', {
        speed: 400,
        watchSlidesProgress: true,
        simulateTouch: true,
        direction: 'horizontal',
        effect: 'fade',
        autoplay: {
            delay: 3000,
        },
        fadeEffect: {
            crossFade: true,
        },
        loop: true,
        parallax: false,

        navigation: {
            nextEl: sliderSelector + '>' + nextBtnSelector,
            prevEl: sliderSelector + '>' + prevBtnSelector,
        },
    });
};

export default slider;
