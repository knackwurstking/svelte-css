<script>
    export let width = "100%";
    /** @type {string} */
    export let height = undefined;
    export let display = "flex";
    export let flexFlow = "row wrap";
    export let justifyContent = "flex-start";
    export let gap = "0";
</script>

<div
    {...$$restProps}
    style={`--gap: ${gap};` + ($$restProps.style || "")}
    style:width
    style:height
    style:display
    style:flex-flow={flexFlow}
    style:justify-content={justifyContent}
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
