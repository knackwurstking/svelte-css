<script>
    /** @type {string} */
    export let width = undefined;
    /** @type {string} */
    export let height = undefined;
    export let flex = "1";
    export let padding = "var(--spacing)";
</script>

<div
    {...$$restProps}
    class={"ui-grid-col " + ($$restProps.class || "")}
    style:width
    style:height
    style:flex
    style:padding
>
    <slot />
</div>
