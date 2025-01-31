const drawLocationMap = () => {
    const map = [
        {
            lang: 'ru',
            elementClass: '.map-ru',
        },
        {
            lang: 'en',
            elementClass: '.map-en',
        },
        {
            lang: 'lv',
            elementClass: '.map-lv',
        },
    ];

    const documentLang = document.documentElement.lang;
    const { elementClass } = map.find(item => item.lang === documentLang);

    document.querySelectorAll('.location-map').forEach(map => map.classList.remove('map-visible'));
    document.querySelector(`.location-map${elementClass}`).classList.add('map-visible');
};

export default drawLocationMap;
