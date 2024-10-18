import { getInfoAboutCurrentFlat } from '../getInfoAboutCurrentFlat';

export function getDefaultInfoAboutFlat($parentContainer) {
    const $tableContainer = $parentContainer.querySelector('table');
    const activePolygonId = $parentContainer.querySelector('.polygon-flat-scheme.active').dataset
        .id;

    getInfoAboutCurrentFlat($tableContainer, activePolygonId);
}
