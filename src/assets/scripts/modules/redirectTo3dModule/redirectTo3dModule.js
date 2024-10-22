const redirectTo3dModule = triggerSelectors => {
    document.querySelectorAll(triggerSelectors).forEach(btn => {
        btn.addEventListener('click', () => {
            const url = window.location.href.includes('localhost')
                ? 'https://fincorum-wp.smartorange.com.ua/'
                : window.location.href;
            window.open(`${url}3d/`, '_blank');
        });
    });
};
export default redirectTo3dModule;
