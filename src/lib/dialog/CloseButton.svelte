<script>
    import { createEventDispatcher } from "svelte";

    import Close from "svelte-material-icons/Close.svelte";

    import { Button } from "..";

    const dispatch = createEventDispatcher();
</script>

<Button.Icon
    on:click={() => dispatch("close")}
>
    <Close />
</Button.Icon>
