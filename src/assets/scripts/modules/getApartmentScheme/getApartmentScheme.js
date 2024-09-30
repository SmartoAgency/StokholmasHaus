const getApartmentScheme = containerSelector => {
    const $container = document.querySelector(containerSelector);
    const $apartment = document.querySelectorAll('[data-apartment-scheme]');

    const selectedApartment = {
        house: null,
        level: null,
    };

    $container.addEventListener('click', event => {
        const targetElement = event.target;

        if (targetElement.closest('.label-button')) {
            toggleStyleOnActiveButtons(targetElement, '.label-button', 'label-button__active');
            getActiveHouseAndLevel();
            getApartment();
        }

        if (targetElement.closest('[data-apartment-level]')) {
            toggleStyleOnActiveButtons(
                targetElement,
                '[data-apartment-level]',
                'apartment-level-btn__active',
            );
            getActiveHouseAndLevel();
            getApartment();
        }

        if (targetElement.closest('[data-apartment-level-button]')) {
            toggleStyleOnActiveButtons(
                targetElement,
                '[data-apartment-26-a-level]',
                'apartment-level-btn__active',
            );
            getActiveHouseAndLevel(targetElement, targetElement, true);
            getApartment();
        }
    });

    function toggleStyleOnActiveButtons(triggerSelector, triggerAllSelectors, activeSelector) {
        document
            .querySelectorAll(triggerAllSelectors)
            .forEach(button => button.classList.remove(activeSelector));
        triggerSelector.classList.add(activeSelector);
    }

    function getActiveHouseAndLevel(
        activeHouseSelector = '[container-button-scheme] .label-button__active',
        activeLevelSelector = '[data-level-buttons] .apartment-level-btn__active',
        isSingleHouse = false,
    ) {
        let activeHouse;
        let activeLevel;

        if (isSingleHouse) {
            activeHouse = activeHouseSelector.dataset.apartmentLevelButton;
            activeLevel = activeLevelSelector.value;
        } else {
            activeHouse = $container.querySelector(activeHouseSelector).value;
            activeLevel = $container.querySelector(activeLevelSelector).value;
        }

        selectedApartment.house = activeHouse;
        selectedApartment.level = activeLevel;
    }

    function getApartment() {
        const $apartmentBlock = selectedApartment.house.includes('stokholmas-26-a')
            ? $apartment[1]
            : $apartment[0];
        const apartmentHeight = $apartmentBlock.clientHeight;
        const apartmentWidth = $apartmentBlock.clientWidth;

        $apartmentBlock.innerHTML = '';
        const $spinner = createSpinner(apartmentWidth, apartmentHeight);
        $apartmentBlock.appendChild($spinner);

        setTimeout(() => {
            $apartmentBlock.removeChild($spinner);
            const image = document.createElement('img');
            image.src = './assets/images/home/home-screen8-scheme.png';
            $apartmentBlock.appendChild(image);
        }, 500);
    }

    function createSpinner(width, height) {
        const $spinnerInner = document.createElement('div');
        const $spinner = document.createElement('div');

        $spinner.classList.add('spinner');
        $spinnerInner.classList.add('spinner-inner');

        $spinnerInner.style.cssText = `height: ${height}px; width:${width}px;`;

        $spinnerInner.appendChild($spinner);

        return $spinnerInner;
    }

    document.querySelector('.label-button').click();
    // Current version
    // const $containers = document.querySelectorAll(containerSelector);
    // const $buttons = document.querySelectorAll('.label-button');
    // const $apartment = document.querySelector('[data-apartment-scheme]');
    // // const $apartment = document.querySelector('.home-screen8-apartment');

    // $containers.forEach(container => {
    //     container.addEventListener('click', e => {
    //         console.log('message');
    //         const $button = e.target.closest('.label-button');
    //         if (!$button) return;

    //         toggleStyleOnButton(e, $button);
    //         getApartment();
    //     });
    // });

    // function toggleStyleOnButton(e, trigger) {
    //     $buttons.forEach(button => button.classList.remove('label-button__active'));
    //     trigger.classList.add('label-button__active');
    //     // const $div = document.createElement('div');
    //     // $div.classList.add('spinner');
    //     // $apartment.innerHTML = `<div class="spinner"></div>`;
    // }

    // function getApartment() {
    //     const $div = document.createElement('div');
    //     $div.classList.add('spinner');
    //     console.log($apartment.clientHeight);
    //     const apartmentHeight = $apartment.clientHeight;
    //     const apartmentWidth = $apartment.clientWidth;
    //     $apartment.innerHTML = `<div style="height: ${apartmentHeight}px;width:${apartmentWidth}px;display: flex; align-items: center"; class="spinner"></div>`;
    //     setTimeout(() => {
    //         $apartment.innerHTML = `

    //                         <img src="./assets/images/home/home-screen8-scheme.png" title="foto" alt="foto">

    //         `;
    //         // $apartment.innerHTML = `
    //         //             <div class="apartment-info" data-apartment-info-table="">
    //         //                 <table>
    //         //                     <thead>
    //         //                         <tr>
    //         //                             <td>Общая площадь:</td>
    //         //                             <td>154.6 м2</td>
    //         //                         </tr>
    //         //                         <tr>
    //         //                             <td>Количество комнат:</td>
    //         //                             <td>4</td>
    //         //                         </tr>
    //         //                     </thead>
    //         //                     <tbody>
    //         //                         <tr>
    //         //                             <td>Кухня:</td>
    //         //                             <td>32.8 м2</td>
    //         //                         </tr>
    //         //                         <tr>
    //         //                             <td>Ванная комната:</td>
    //         //                             <td>12.4 м2</td>
    //         //                         </tr>
    //         //                         <tr>
    //         //                             <td>Спальня:</td>
    //         //                             <td>24.9 м2</td>
    //         //                         </tr>
    //         //                         <tr>
    //         //                             <td>Детская комната:</td>
    //         //                             <td>16.2 м2</td>
    //         //                         </tr>
    //         //                     </tbody>
    //         //                 </table>
    //         //             </div>
    //         //             <div class="apartment-scheme" data-apartment-scheme="">
    //         //                 <img src="./assets/images/home/home-screen8-scheme.png" title="foto" alt="foto">
    //         //             </div>
    //         //             <div class="apartment-level">
    //         //                 <h3>Етаж</h3>
    //         //                 <div class="apartment-level-buttons" data-level-buttons="">
    //         //                     <button value="1">1</button>
    //         //                     <button class="apartment-level-btn__active" value="2">2</button>
    //         //                 </div>
    //         //             </div>
    //         // `;
    //     }, 500);
    // }
};

export default getApartmentScheme;
