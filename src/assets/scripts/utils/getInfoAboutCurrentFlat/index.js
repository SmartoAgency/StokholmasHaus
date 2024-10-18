export async function getInfoAboutCurrentFlat($tableContainer, id) {
    const flatsData = JSON.parse(localStorage.getItem('flats'));
    const selectedFlat = flatsData.find(flat => flat.id == id);
    let tableRows = '';

    Object.keys(selectedFlat.properties).forEach(key => {
        tableRows += `<tr>
                            <td>${selectedFlat.properties[key].property_name}</td>
                            <td>${selectedFlat.properties[key].property_flat} м2</td>
                        </tr>`;
    });

    $tableContainer.querySelector('[data-apartment-label="all_room"]').innerHTML =
        selectedFlat.area + ' м2';
    $tableContainer.querySelector('[data-apartment-label="rooms"]').innerHTML = selectedFlat.rooms;

    $tableContainer.querySelector('tbody').innerHTML = '';
    $tableContainer.querySelector('tbody').innerHTML = tableRows;
}
