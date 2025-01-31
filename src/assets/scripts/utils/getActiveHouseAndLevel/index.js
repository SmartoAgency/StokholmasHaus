export function getActiveHouseAndLevel(
    selectedApartment,
    activeHouseSelector,
    activeLevelSelector,
) {
    const $container = document.querySelector('[data-apartment-section]');

    selectedApartment.build = $container.querySelector(activeHouseSelector).dataset.build;
    selectedApartment.section = $container.querySelector(activeLevelSelector).value;
    // let activeHouse;
    // let activeLevel;

    // activeHouse = $container.querySelector(activeHouseSelector).dataset.build;
    // activeLevel = $container.querySelector(activeLevelSelector).value;

    // selectedApartment.build = activeHouse;
    // selectedApartment.section = activeLevel;
}
