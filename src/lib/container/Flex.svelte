<script>
    /**
     * @type {"center" | "flex-start" | "flex-end"}
     */
    export let justify = undefined;

    /**
     * @type {"center" | "flex-start" | "flex-end"}
     */
    export let align = undefined;

    /** @type {string} */
    export let width = undefined;
    /** @type {string} */
    export let height = undefined;
</script>

<div
    {...$$restProps}
    style={
        "display: flex;" +
        $$restProps.style || ""
    }
    style:justify-content={justify}
    style:align-items={align}
    style:width={width}
    style:height={height}
>
    <slot />
</div>
