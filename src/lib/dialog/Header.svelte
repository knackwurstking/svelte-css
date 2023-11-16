<script>
    import { createEventDispatcher } from "svelte";

    import CloseButton from "./CloseButton.svelte";

    const dispatch = createEventDispatcher();

    export let title;
</script>

<header
    {...$$restProps}
    class={"ui-dialog-header " + ($$restProps.class || "")}
>
    <h3>{title || ""}</h3>

    <CloseButton on:close={() => dispatch("close")} />
</header>
