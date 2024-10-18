export function createSpinner(block) {
    const blockHeight = block.clientHeight;
    const blockWidth = block.clientWidth;
    block.innerHTML = '';

    const $spinnerInner = document.createElement('div');
    const $spinner = document.createElement('div');
    $spinner.classList.add('spinner');
    $spinnerInner.classList.add('spinner-inner');
    $spinnerInner.style.cssText = `height: ${blockHeight}px; width:${blockWidth}px;`;
    $spinnerInner.appendChild($spinner);

    return $spinnerInner;
}
