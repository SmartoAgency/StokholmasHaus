import { asyncReturn } from '../asyncReturn';
import { createSpinner } from '../createSpinner';

export async function getApartment(selectedApartment, $apartmentsScheme) {
    const $apartmentBlock = selectedApartment.build.includes(3)
        ? $apartmentsScheme[1]
        : $apartmentsScheme[0];

    const $spinner = createSpinner($apartmentBlock);
    $apartmentBlock.appendChild($spinner);
    const image = await asyncReturn(1, selectedApartment.build, selectedApartment.section);

    $apartmentBlock.removeChild($spinner);
    $apartmentBlock.appendChild(image);
}
