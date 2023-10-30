<script>
    import { onDestroy } from "svelte";

    /** @type {HTMLElement} */
    let slider;

    /** @type {HTMLElement} */
    let range;

    /** @type {HTMLElement} */
    let thumb;

    $: slider && thumb && initializeSlider();

    /** @type {string} */
    export let width = "100%";
    /** @type {string} */
    export let height = "1.25em";

    let cleanUp = [];

    async function initializeSlider() {
        const move = async () => {
            // TODO: moving thumb and range (y-axis)
        };

        const end = async () => {
            thumb.style.transform = "scale(1)";

            window.removeEventListener("pointermove", move);
            window.removeEventListener("pointerup", end);
            window.removeEventListener("pointercancel", end);
        };

        const start = async () => {
            thumb.style.transform = "scale(1.25)";

            window.addEventListener("pointermove", move);
            window.addEventListener("pointerup", end);
            window.addEventListener("pointercancel", end);
        };

        thumb.addEventListener("pointerdown", start);
        cleanUp.push(() => {
            thumb.removeEventListener("pointerdown", start);
            end();
        });
    }

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
        style:background-color="red"
    >
        <div
            bind:this={range}
            class="range"
            style:height="100%"
            style:background-color="green"
        />
    </div>

    <div
        bind:this={thumb}
        class="thumb"
        style:width="1.25em"
        style:height="1.25em"
        style:border-radius="50%"
        style:background-color="yellow"
        style:transition="transform .25s ease"
    />
</div>
