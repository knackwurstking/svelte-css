/**
 * @param {PointerEvent & { currentTarget: HTMLElement }} ev
 * @param {import(".").RippleOptions} options
 * @returns {HTMLElement}
 */
export function rippleStart(ev: PointerEvent & {
    currentTarget: HTMLElement;
}, options: import(".").RippleOptions): HTMLElement;
