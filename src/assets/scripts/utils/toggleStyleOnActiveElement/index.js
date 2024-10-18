export function toggleStyleOnActiveElement(triggerSelector, triggerAllSelectors, activeSelector) {
    document
        .querySelectorAll(triggerAllSelectors)
        .forEach(element => element.classList.remove(activeSelector));
    triggerSelector.classList.add(activeSelector);
}
