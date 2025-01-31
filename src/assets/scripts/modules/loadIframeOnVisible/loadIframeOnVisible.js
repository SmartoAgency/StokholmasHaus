const loadIframeOnVisible = iframeSelector => {
    const iframe = document.querySelector(iframeSelector);

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            const url = window.location.href.includes('localhost')
                ? 'https://fincorum-wp.smartorange.com.ua/'
                : window.location.href.replace(/#.*$/, '');

            if (entry.isIntersecting) {
                iframe.src = url + '3d/';
                observer.unobserve(iframe);
            }
        });
    };

    const observer = new IntersectionObserver(callback);

    observer.observe(iframe);
};

export default loadIframeOnVisible;
