/**
 * @typedef RippleOptions
 * @type {import(".").RippleOptions}
 */
/**
 * @param {Element | HTMLElement | Node} el
 * @param {RippleOptions} options
 */
export function ripple(el: Element | HTMLElement | Node, options?: RippleOptions): {
    /**
     * @param {RippleOptions} _options
     */
    update(_options: RippleOptions): void;
    destroy: () => void;
};
export type RippleOptions = import(".").RippleOptions;
