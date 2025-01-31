export default function restoreScrollPosition() {
    const restorePosition = () => {
        if (!JSON.parse(localStorage.getItem('sitePosition'))) {
            return;
        }

        const { isReturnFrom3D, position } = JSON.parse(localStorage.getItem('sitePosition'));
        if (isReturnFrom3D) {
            window.scrollTo(0, parseInt(position, 10));
            localStorage.setItem(
                'sitePosition',
                JSON.stringify({
                    isReturnFrom3D: false,
                    position,
                }),
            );
        }
    };

    window.addEventListener('load', () => {
        restorePosition();
    });
}
