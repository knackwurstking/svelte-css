import { rippleStart } from "./ripple-start";
import { rippleStop } from "./ripple-stop";

/**
 * @typedef RippleOptions
 * @type {import(".").RippleOptions}
 */

/**
 * @param {Element} el
 */
export function ripple(
    el,
    {
        color = "currentColor",
        opacity = 0.1,
        centered = false,
        spreadDuration = ".4s",
        spreadTiming = "linear",
        clearDuration = "1s",
        clearTiming = "ease-in-out"
    } = {}
) {
    /** @type {HTMLElement} */
    let ripple;
    let destroyed = false;

    /** @type {RippleOptions} */
    let options = {
        color,
        opacity,
        centered,
        spreadDuration,
        spreadTiming,
        clearDuration,
        clearTiming,
    }

    /** @param {PointerEvent & { currentTarget: HTMLElement }} ev */
    const _rippleStart = (ev) => {
        ripple = rippleStart(ev, { ...options });
    };

    const _rippleStop = () => {
        if (!!ripple) rippleStop(ripple);
    };

    // Setup ...
    const setup = () => {
        el.classList.add("ripple-container");

        el.addEventListener("pointerdown", _rippleStart);
        el.addEventListener("pointerup", _rippleStop);
        el.addEventListener("pointerleave", _rippleStop);

        destroyed = false;
    }

    const destroy = () => {
        el.classList.remove("ripple-container");
        el.removeEventListener("pointerdown", _rippleStart);
        el.removeEventListener("pointerup", _rippleStop);
        el.removeEventListener("pointerleave", _rippleStop);
        destroyed = true;
    }

    setup()

    return {
        /**
         * @param {RippleOptions} _options
         */
        update(_options) {
            options = _options;
            if (options && destroyed) setup();
            else if (!(options || destroyed)) destroy();
        },
        destroy,
    }
}
