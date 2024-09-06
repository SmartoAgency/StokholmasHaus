const getApartmentScheme = containerSelector => {
    const $containers = document.querySelectorAll(containerSelector);
    const $buttons = document.querySelectorAll('.label-button');
    const $apartment = document.querySelector('.home-screen8-apartment');

    $containers.forEach(container => {
        container.addEventListener('click', e => {
            const $button = e.target.closest('.label-button');
            if (!$button) return;

            toggleStyleOnButton(e, $button);
            getApartment();
        });
    });

    function toggleStyleOnButton(e, trigger) {
        $buttons.forEach(button => button.classList.remove('label-button__active'));
        trigger.classList.add('label-button__active');
        // const $div = document.createElement('div');
        // $div.classList.add('spinner');
        // $apartment.innerHTML = `<div class="spinner"></div>`;
    }

    function getApartment() {
        const $div = document.createElement('div');
        $div.classList.add('spinner');
        $apartment.innerHTML = `<div class="spinner"></div>`;
        setTimeout(() => {
            $apartment.innerHTML = `
                        <div class="apartment-info" data-apartment-info-table="">
                            <table>
                                <thead>
                                    <tr>
                                        <td>Общая площадь:</td>
                                        <td>154.6 м2</td>
                                    </tr>
                                    <tr>
                                        <td>Количество комнат:</td>
                                        <td>4</td>
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
                        </div>
                        <div class="apartment-scheme" data-apartment-scheme="">
                            <img src="./assets/images/home/home-screen8-scheme.png" title="foto" alt="foto">
                        </div>
                        <div class="apartment-level">
                            <h3>Етаж</h3>
                            <div class="apartment-level-buttons" data-level-buttons="">
                                <button value="1">1</button>
                                <button class="apartment-level-btn__active" value="2">2</button>
                            </div>
                        </div>
            `;
        }, 500);
    }
};

export default getApartmentScheme;
