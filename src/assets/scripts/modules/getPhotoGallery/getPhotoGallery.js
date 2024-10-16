const getPhotoGallery = triggersSelector => {
    const $buttons = document.querySelectorAll(triggersSelector);

    $buttons.forEach(button => {
        button.addEventListener('click', () => toggleStyleOnActiveButtons(button));
    });

    function toggleStyleOnActiveButtons(triggerSelector, activeSelector = 'label-button__active') {
        $buttons.forEach(button => button.classList.remove(activeSelector));
        triggerSelector.classList.add(activeSelector);
    }
};
export default getPhotoGallery;
