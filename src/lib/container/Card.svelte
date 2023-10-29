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
        background-color: hsl(var(--card));
        color: hsl(var(--card-foreground));
        padding: var(--spacing);
        border: var(--border-width, 0.1em) solid hsl(var(--border));
        border-radius: var(--radius);
    }
</style>
