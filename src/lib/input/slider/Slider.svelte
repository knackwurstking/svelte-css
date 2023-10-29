<script>
    /** @type {string} */
    export let width = "20px"; // TODO: using em instead of px
    /** @type {string} */
    export let height = "200px"; // TODO: using em instead of px

    // TODO: simple slider component
</script>

<span
    class="slider"
    style:position="relative"
    style:width={width}
    style:height={height}
    style:display="flex"
    style:align-items="center"
>
    <span class="range-container">
        <span class="range" />
    </span>
    <span class="thumb" />
</span>

<style>
</style>
