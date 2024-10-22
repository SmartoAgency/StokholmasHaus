const getPhotoGallery = (imagesSelector, triggersSelector) => {
    const $buttons = document.querySelectorAll(triggersSelector);
    const $images = document.querySelectorAll(imagesSelector);

    $buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            toggleStyleOnActiveButtons(button);
            toggleStyleOnActiveImage($images, $images[index]);
        });
    });

    function toggleStyleOnActiveButtons(triggerSelector, activeSelector = 'label-button__active') {
        $buttons.forEach(button => button.classList.remove(activeSelector));
        triggerSelector.classList.add(activeSelector);
    }

    function toggleStyleOnActiveImage(images, activeImage) {
        images.forEach(image => image.classList.add('none'));
        activeImage.classList.remove('none');
    }

    $buttons[0].click();
};
export default getPhotoGallery;
