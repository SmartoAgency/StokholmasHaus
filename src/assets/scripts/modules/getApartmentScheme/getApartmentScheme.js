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
            if (selectedApartment.house === 'stokholmas-26-a') {
                image.src = './assets/images/home/home-screen8-scheme__1.png';
            } else {
                image.src = './assets/images/home/home-screen8-scheme.png';
            }
            $apartmentBlock.appendChild(image);
        }, 500);

        console.log(selectedApartment);
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
};

export default getApartmentScheme;
