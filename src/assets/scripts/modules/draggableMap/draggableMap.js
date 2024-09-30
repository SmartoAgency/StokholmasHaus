import { gsap, Draggable } from 'gsap/all';
gsap.registerPlugin(Draggable);

const draggableMap = (mapContainer, mapSelector, markerMapSelector) => {
    const container = document.querySelector(mapContainer);
    let bigImage = document.querySelector(mapSelector),
        marker = document.querySelector(markerMapSelector),
        smallX = gsap.quickSetter(marker, 'x', 'px'),
        smallY = gsap.quickSetter(marker, 'y', 'px'),
        imageScale;

    let bigDraggable = Draggable.create(bigImage, {
        bounds: container,
        onDrag: alignSmall,
        onThrowUpdate: alignSmall,
        inertia: true,
    })[0];

    Draggable.create(marker, {
        onClick: openMapInNewTab,
    });

    function alignSmall() {
        smallX(-bigDraggable.x * imageScale);
        smallY(-bigDraggable.y * imageScale);
    }

    marker.addEventListener('click', openMapInNewTab);

    function openMapInNewTab() {
        window.open(
            'https://www.google.com/maps/dir//Stokholmas+iela+26,+Zieme%C4%BCu+rajons,+R%C4%ABga,+LV-1014',
            '_blank',
        );
    }

    alignSmall();
};

export default draggableMap;
