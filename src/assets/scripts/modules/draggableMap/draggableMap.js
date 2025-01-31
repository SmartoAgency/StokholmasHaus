import { gsap, Draggable } from 'gsap/all';
import drawLocationMap from '../drawLocationMap';

gsap.registerPlugin(Draggable);

const draggableMap = async (mapContainer, mapSelector, markerMapSelector) => {
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

    function alignSmall() {
        smallX(-bigDraggable.x * imageScale);
        smallY(-bigDraggable.y * imageScale);
    }

    function openMapInNewTab() {
        window.open(
            'https://www.google.com/maps/dir//Stokholmas+iela+26,+Zieme%C4%BCu+rajons,+R%C4%ABga,+LV-1014',
            '_blank',
        );
    }

    function setupSizing() {
        const bigImageWidth = bigImage.getBoundingClientRect().width;

        const imageScale = container.offsetWidth / bigImageWidth;
        const aspectRatio = container.offsetWidth / container.getBoundingClientRect().height;

        gsap.set(bigImage, {
            width: imageScale * bigImage.offsetWidth,
            height: (imageScale * bigImage.offsetWidth) / aspectRatio,
        });
    }

    function resizeMap() {
        setupSizing();
        alignSmall();
        bigDraggable.applyBounds();
    }

    setupSizing();
    alignSmall();

    marker.addEventListener('click', openMapInNewTab);
    window.addEventListener('resize', resizeMap);
};

export default draggableMap;
