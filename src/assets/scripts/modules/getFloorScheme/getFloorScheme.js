const getFloorScheme = containerSelector => {
    const $containers = document.querySelectorAll(containerSelector);
    const $apartmentInfoContainers = document.querySelectorAll('[data-apartment-info-table]');
    const $apartmentSchemeContainers = document.querySelectorAll('[data-apartment-scheme]');

    $containers.forEach((container, i) => {
        container.addEventListener('click', e => {
            if (!e.target.closest('[data-level-buttons]') || e.target.tagName !== 'BUTTON') return;
            const $button = e.target;

            toggleStyleOnButton($button);
            getLevelInfo($button.value, i);
            getSchemeInfo($button.value, i);
        });
    });

    function toggleStyleOnButton(trigger) {
        console.log('trigger'.toUpperCase(), trigger);
        const $buttons = Array.from(trigger.parentElement.getElementsByTagName('button'));

        $buttons.forEach(button => button.classList.remove('apartment-level-btn__active'));
        trigger.classList.add('apartment-level-btn__active');
    }

    function getLevelInfo(value, index) {
        if (value === 1) {
            $apartmentInfoContainers[index].innerHTML = `
                    <table>
                        <thead>
                            <tr>
                                <td>Общая площадь:</td>
                                <td>112.3 м2</td>
                            </tr>
                            <tr>
                                <td>Количество комнат:</td>
                                <td>8</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Кухня:</td>
                                <td>32.8 м2</td>
                            </tr>
                            <tr>
                                <td>Ванная комната:</td>
                                <td>12.4 м2</td>
                            </tr>
                            <tr>
                                <td>Спальня:</td>
                                <td>24.9 м2</td>
                            </tr>
                            <tr>
                                <td>Детская комната:</td>
                                <td>16.2 м2</td>
                            </tr>
                        </tbody>
                    </table>
            `;
        } else {
        }
        console.log('apartmentInfoContainers: ');
        console.log($apartmentInfoContainers[index]);
    }

    function getSchemeInfo(value, index) {
        console.log('apartmentSchemeContainers');
        console.log($apartmentSchemeContainers[index]);
    }
};

export default getFloorScheme;
