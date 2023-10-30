<script>
    import { onDestroy } from "svelte";

    /***********
     * Bindings
     ***********/

    /** @type {HTMLElement} */
    let slider;

    /** @type {HTMLElement} */
    let range;

    /** @type {HTMLElement} */
    let thumb;

    $: !initialized && slider && thumb && initializeSlider();

    /******************************
     * Variable Export Definitions
     ******************************/

    /** @type {number} */
    export let min = 0;
    /** @type {number} */
    export let max = 100;
    /** @type {number} */
    export let value = 0;

    /** @type {string} */
    export let width = "100%";
    /** @type {string} */
    export let height = "1.25em";

    /***********************
     * Variable Definitions
     ***********************/

    let cleanUp = [];
    let initialized = false;
    let rangeWidth;

    let thumbLeft;

    /***********************
     * Function Definitions
     ***********************/

    async function initializeSlider() {
        const thumbWidth = getComputedStyle(thumb).fontSize;

        /**
         * @param {number} width
         * @param {number} range
         */
        function moveThumb(width, range) {
            value = Math.round(100 / (width / range));
            rangeWidth = `${100 / (width / range)}%`;
            thumbLeft = `calc(${(100 / (width / range))}% - (${thumbWidth} / 2))`;
        }

        /** @param {PointerEvent} ev */
        const move = async (ev) => {
            const parentRangeRect = range.parentElement.getBoundingClientRect();

            const left = parentRangeRect.left;
            const right = parentRangeRect.right;
            const currentY = ev.clientX;

            let _rangeWidth = currentY - left;
            if (currentY > right) {
                _rangeWidth = parentRangeRect.width;
            } else if (currentY < left) {
                _rangeWidth = 0;
            }

            moveThumb(parentRangeRect.width, _rangeWidth);
        };

        const end = async () => {
            thumb.style.transform = "scale(1)";

            window.removeEventListener("pointermove", move);
            window.removeEventListener("pointerup", end);
            window.removeEventListener("pointercancel", end);
        };

        /** @param {PointerEvent} ev */
        const start = async (ev) => {
            thumb.style.transform = "scale(1.25)";

            window.addEventListener("pointermove", move);
            window.addEventListener("pointerup", end);
            window.addEventListener("pointercancel", end);

            move(ev);
        };

        initialized = true;

        moveThumb(max-min, value-min);
        slider.addEventListener("pointerdown", start);

        cleanUp.push(() => {
            slider.removeEventListener("pointerdown", start);
            end();
        });
    }

    /********************
     * Mount and Destroy
     ********************/

    onDestroy(() => cleanUp.forEach(fn => fn()));
</script>

<div
    bind:this={slider}
    class="slider"
    style:position="relative"
    style:width={width}
    style:height={height}
    style:display="flex"
    style:align-items="center"
    style:cursor="pointer"
>
    <div
        class="range-container"
        style:width="100%"
        style:height=".35em"
        style:background-color="hsl(var(--secondary))"
        style:border-radius="var(--radius)"
    >
        <div
            bind:this={range}
            class="range"
            style:width={rangeWidth || "0"}
            style:height="100%"
            style:background-color="hsl(var(--primary))"
            style:border-radius="var(--radius)"
        />
    </div>

    <div
        bind:this={thumb}
        class="thumb"
        style:position="absolute"
        style:left={thumbLeft || "-.625em"}
        style:width="1.25em"
        style:height="1.25em"
        style:border-radius="50%"
        style:background-color="hsl(var(--primary))"
        style:transition="transform .25s ease"
    />
</div>