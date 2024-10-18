export function getActiveHouseAndLevel(
    selectedApartment,
    activeHouseSelector,
    activeLevelSelector,
) {
    let activeHouse;
    let activeLevel;
    const $container = document.querySelector('[data-apartment-section]');

    activeHouse = $container.querySelector(activeHouseSelector).dataset.build;
    activeLevel = $container.querySelector(activeLevelSelector).value;

    selectedApartment.build = activeHouse;
    selectedApartment.section = activeLevel;
}
