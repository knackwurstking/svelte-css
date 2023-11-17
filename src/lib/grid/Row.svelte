<script>
    export let width = "100%";
    /** @type {string} */
    export let height = undefined;
    export let display = "flex";
    export let flexFlow = "row wrap";
    export let justify = "flex-start";
    /** @type {string} */
    export let align = undefined;
    export let gap = "0";
</script>

<div
    {...$$restProps}
    class={"ui-grid-row " + ($$restProps.class || "")}
    style={`--gap: ${gap};` + ($$restProps.style || "")}
    style:width
    style:height
    style:display
    style:flex-flow={flexFlow}
    style:justify-content={justify}
    style:align-items={align}
>
    <slot />
</div>

<style>
    div :global(> *) {
        margin: 0 var(--gap);
    }

    div :global(> *:first-child) {
        margin-left: 0;
    }

    div :global(> *:last-child) {
        margin-right: 0;
    }
</style>
