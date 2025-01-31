import { saveSitePosition } from '../../utils/saveSitePosition';

const redirectTo3dModule = triggerSelectors => {
    const saveLangOption = url => {
        localStorage.setItem('url', url);
    };

    document.querySelectorAll(triggerSelectors).forEach(btn => {
        btn.addEventListener('click', () => {
            const url = window.location.href.includes('localhost')
                ? `https://fincorum-wp.smartorange.com.ua/`
                : window.location.href;
            // : window.location.href.replace(/#.*$/, '');
            saveSitePosition();
            saveLangOption(url);
            window.open(`${url}3d/`, '_self');
        });
    });
};
export default redirectTo3dModule;
