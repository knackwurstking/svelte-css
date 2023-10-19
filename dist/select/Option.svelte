<script>
    import { createEventDispatcher } from "svelte";

    /** @type {string} */
    export let value;
    /** @type {string} */
    export let label = "";

    const dispatch = createEventDispatcher();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    {...$$restProps}
    class={"option " + ($$restProps.class || "")}
    on:click={() => {
        dispatch("click", value);
    }}
>
    {label || value}
</div>

<style>
    .option {
        width: 100%;
        padding: var(--spacing, 0.5em) calc(var(--spacing, 0.5) * 1.5);
    }
</style>
