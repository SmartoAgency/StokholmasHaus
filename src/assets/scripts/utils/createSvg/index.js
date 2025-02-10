export function createSvg(imgURL, width, height, polygons = '', apartments = []) {
    const isPolygonsFromServer = typeof polygons === 'object';
    let polygonsFromServer = '';
    let flatId;
    let previousApartmentId;

    if (JSON.parse(localStorage.getItem('flatId'))) {
        flatId = JSON.parse(localStorage.getItem('flatId'));
        previousApartmentId = polygons.flatsIds.find(id => Number(id) == flatId);
    }

    if (isPolygonsFromServer) {
        polygonsFromServer = Object.entries(polygons.cords).reduce((acc, [key, value], index) => {
            const apartment = apartments.find(
                apartment => apartment.id == polygons.flatsIds[index],
            );

            let isActive = null;

            if (previousApartmentId) {
                isActive = previousApartmentId === key;
            } else {
                isActive = index === 0;
                if (flatId == 9 || flatId == 10) {
                    key == 12 ? (isActive = true) : (isActive = false);
                }
                if (flatId == 13) {
                    key == 11 ? (isActive = true) : (isActive = false);
                }
                if (flatId == 12) {
                    key == 9 ? (isActive = true) : (isActive = false);
                }
                if (flatId == 11) {
                    key == 13 ? (isActive = true) : (isActive = false);
                }
            }

            if (!flatId && !previousApartmentId) {
                key == 13 ? (isActive = true) : (isActive = false);
            }

            const sale = apartment ? apartment.sale : 0;

            return (
                acc +
                `<polygon class="polygon-flat-scheme ${
                    isActive ? 'active' : ''
                }"  data-id="${key}" points="${value}" />`
                // `<polygon data-sale="${sale}" data-id="${polygons.flatsIds[index]}" points="${value}" />`
            );
        }, '');

        localStorage.removeItem('flatId');
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.classList.add('interactive-scheme');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.setAttribute('viewBox', `0 0 ${polygons.size[0]} ${polygons.size[1]}`);
        svg.insertAdjacentHTML(
            'beforeend',
            `<image href="${document.documentElement.dataset.base}/assets${polygons['url']}" width="${polygons.size[0]}" height="${polygons.size[1]}" />`,
        );
        svg.insertAdjacentHTML('beforeend', isPolygonsFromServer ? polygonsFromServer : polygons);

        return svg;
    } else {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.classList.add('interactive-map');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
        svg.insertAdjacentHTML(
            'beforeend',
            `<image href="${imgURL}" width="${width}" height="${height}" />`,
        );
        svg.insertAdjacentHTML('beforeend', isPolygonsFromServer ? polygonsFromServer : polygons);
        return svg;
    }
}
