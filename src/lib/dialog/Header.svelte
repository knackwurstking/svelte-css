<script>
    import { createEventDispatcher } from "svelte";

    import CloseButton from "./CloseButton.svelte";

    const dispatch = createEventDispatcher();

    export let title;
</script>

<header
    {...$$restProps}
>
    <h3>{title || ""}</h3>

    <CloseButton on:close={() => dispatch("close")} />
</header>

<style>
    header {
        display: flex;
        align-items: center;

        height: calc(2.5rem + var(--spacing));
        margin-bottom: var(--spacing);

        border-top-right-radius: var(--radius);
        border-top-left-radius: var(--radius);
    }

    header h3 {
        padding-right: calc(4rem + var(--spacing));
        margin: auto 0;
        margin-left: var(--spacing);
    }
</style>
