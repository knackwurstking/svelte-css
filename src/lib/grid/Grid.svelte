<script>
    export let width = "100%";
    export let height = "fit-content";
    export let display = "flex";
    export let flexDirection = "column";
    export let gap = "0";
</script>

<div
    {...$$restProps}
    class={"ui-grid " + ($$restProps.class || "")}
    style={`--gap: ${gap};` + ($$restProps.style || "")}
    style:width
    style:height
    style:display
    style:flex-direction={flexDirection}
>
    <slot />
</div>

<style>
    div :global(> *) {
        margin: var(--gap) 0;
    }

    div :global(> *:first-child) {
        margin-top: 0;
    }

    div :global(> *:last-child) {
        margin-bottom: 0;
    }
</style>
