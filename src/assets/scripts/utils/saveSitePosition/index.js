export const saveSitePosition = () => {
    localStorage.setItem(
        'sitePosition',
        JSON.stringify({
            isReturnFrom3D: true,
            position: window.scrollY,
        }),
    );
};
