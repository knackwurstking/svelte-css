<script>
    import { createEventDispatcher } from "svelte";

    import CloseButton from "./CloseButton.svelte";

    const dispatch = createEventDispatcher();

    export let title;
</script>

<header {...$$restProps}>
    <h4>{title || ""}</h4>

    <CloseButton on:close={() => dispatch("close")} />
</header>

<style>
    header {
        height: calc(2.5rem + var(--spacing));
        padding: var(--spacing);
        padding-right: calc(4rem + var(--spacing));
        margin-bottom: var(--spacing);
        border-top-right-radius: var(--radius);
        border-top-left-radius: var(--radius);
        display: flex;
        align-items: center;
    }
</style>
