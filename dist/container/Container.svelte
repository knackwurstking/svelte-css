<script>
    /** @type {string} */
    export let width = undefined;
    /** @type {string} */
    export let height = undefined;
</script>

<div
    {...$$restProps}
    style:width={width}
    style:height={height}
>
    <slot />
</div>

<style>
    div {
        max-width: 65em;
        margin: 0 auto;
        width: 100%;
        padding: var(--spacing);
    }
</style>
