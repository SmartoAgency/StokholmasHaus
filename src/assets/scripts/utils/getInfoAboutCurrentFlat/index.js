import { getAllFlats } from '../../api';

const typesOfPremisesOnOtherLanguage = {
    lv: {
        apartment: 'dzīvoklis',
        store: 'veikals',
        office: 'birojs',
        basement: 'pagrabs',
    },
    en: {
        apartment: 'apartment',
        store: 'store',
        office: 'office',
        basement: 'basement',
    },
    ru: {
        apartment: 'квартира',
        store: 'магазин',
        office: 'офис',
        basement: 'подвал',
    },
};

export async function getInfoAboutCurrentFlat($tableContainer, id) {
    const flatsData = await getAllFlats();
    // const flatsData = JSON.parse(localStorage.getItem('flats'));
    const selectedFlat = await flatsData.find(flat => flat.id === id);
    let tableRows = '';
    let currentLangObj;

    try {
        currentLangObj = typesOfPremisesOnOtherLanguage[document.documentElement.lang];
    } catch (e) {}

    Object.keys(selectedFlat.properties).forEach(key => {
        tableRows += `<tr>
                            <td>${selectedFlat.properties[key].property_name}: </td>
                            <td>${selectedFlat.properties[key].property_flat} м2</td>
                        </tr>`;
    });

    if (currentLangObj) {
        $tableContainer.querySelector('[data-apartment-type]').innerHTML =
            currentLangObj[selectedFlat?.type];
    }

    $tableContainer.querySelector('[data-apartment-number="number"]').innerHTML =
        selectedFlat.number;

    $tableContainer.querySelector('[data-apartment-label="all_room"]').innerHTML =
        selectedFlat.area + ' м2';

    $tableContainer.querySelector('[data-apartment-label="rooms"]').innerHTML = selectedFlat.rooms;

    $tableContainer.querySelector('tbody').innerHTML = '';
    $tableContainer.querySelector('tbody').innerHTML = tableRows;
}
