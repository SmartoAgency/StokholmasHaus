import { getInfoAboutCurrentFlat, drawInformation } from '../../utils/index.js';

const getApartmentScheme = containerSelector => {
    const $container = document.querySelector(containerSelector);
    const $apartmentsScheme = document.querySelectorAll('[data-apartment-scheme]');

    const selectedApartmentFirstBuild = {
        build: null,
        section: null,
    };

    const selectedApartmentSecondBuild = {
        build: null,
        section: null,
    };

    $container.addEventListener('click', event => {
        const targetElement = event.target;

        if (targetElement.closest('.label-button')) {
            const $parentElement = document.querySelector('.home-screen8-apartment');
            drawInformation(
                $parentElement,
                targetElement,
                '.label-button',
                'label-button__active',
                $apartmentsScheme,
                selectedApartmentFirstBuild,
            );
        }

        if (targetElement.closest('[data-apartment-level]')) {
            const $parentElement = targetElement.closest('.home-screen8-apartment');
            drawInformation(
                $parentElement,
                targetElement,
                '[data-apartment-level]',
                'apartment-level-btn__active',
                $apartmentsScheme,
                selectedApartmentFirstBuild,
            );
        }

        if (targetElement.closest('[data-apartment-level-button]')) {
            const $parentElement = targetElement.closest('[data-apartment-info]');
            drawInformation(
                $parentElement,
                targetElement,
                '[data-apartment-26-a-level]',
                'apartment-level-btn__active',
                $apartmentsScheme,
                selectedApartmentSecondBuild,
                '[data-level-buttons-26-a] .apartment-level-btn__active',
                '[data-level-buttons-26-a] .apartment-level-btn__active',
            );
        }

        if (targetElement.closest('.interactive-scheme polygon')) {
            const $polygons = targetElement
                .closest('.apartment-scheme')
                .querySelectorAll('polygon');
            const $tableContainer = targetElement
                .closest('[data-apartment-info]')
                .querySelector('[data-apartment-info-table]');

            const flatId = targetElement.getAttribute('data-id');
            getInfoAboutCurrentFlat($tableContainer, flatId);

            $polygons.forEach(polygon => {
                polygon.classList.remove('active');
            });

            targetElement.classList.add('active');
        }
    });

    document.querySelector('.label-button').click();
    document.querySelector('[data-apartment-level-button]').click();
};

export default getApartmentScheme;
