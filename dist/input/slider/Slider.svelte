<script>
    /** @type {string} */
    export let width = "20px"; // TODO: using em instead of px
    /** @type {string} */
    export let height = "200px"; // TODO: using em instead of px
</script>

<span
    class="slider"
    style:position="relative"
    style:width={width}
    style:height={height}
    style:display="flex"
    style:align-items="center"
>
    <span
        class="range-container"
        style:display="block"
        style:width="100%"
        style:height="3px"
        style:background-color="black"
    >
        <span
            class="range"
            style:height="3px"
            style:background-color="white"
        />
    </span>
    <span
        class="thumb"
        style:display="block"
        style:width="1.25em"
        style:height="1.25em"
        style:border-radius="50%"
        style:background-color="white"
    />
</span>

<style>
    .thumb:focus {
        transform: scale(1.25);
    }
</style>
