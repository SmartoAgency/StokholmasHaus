import { toggleStyleOnActiveElement } from '../toggleStyleOnActiveElement';
import { getActiveHouseAndLevel } from '../getActiveHouseAndLevel';
import { getApartment } from '../getApartment';
import { getDefaultInfoAboutFlat } from '../getDefaultInfoAboutFlat';

export async function drawInformation(
    parentElement,
    targetElement,
    allClasses,
    activeClass,
    apartmentsScheme,
    selectedApartmentInfo,
    activeHouseSelector = '[container-button-scheme] .label-button__active',
    activeLevelSelector = '[data-level-buttons] .apartment-level-btn__active',
) {
    await toggleStyleOnActiveElement(targetElement, allClasses, activeClass);
    await getActiveHouseAndLevel(selectedApartmentInfo, activeHouseSelector, activeLevelSelector);
    await getApartment(selectedApartmentInfo, apartmentsScheme);
    await getDefaultInfoAboutFlat(parentElement);
}
