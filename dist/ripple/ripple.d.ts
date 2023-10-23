/**
 * @typedef RippleOptions
 * @type {import(".").RippleOptions}
 */
/**
 * @param {Element} el
 * @param {RippleOptions} options
 */
export function Ripple(el: Element, options?: RippleOptions): {
    /**
     * @param {RippleOptions} _options
     */
    update(_options: RippleOptions): void;
    destroy: () => void;
};
export type RippleOptions = import(".").RippleOptions;
