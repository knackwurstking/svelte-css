<script>
    import { createEventDispatcher } from "svelte";

    import Close from "svelte-material-icons/Close.svelte";

    import { IconButton } from "../button";

    const dispatch = createEventDispatcher();

    export let title;
</script>

<header>
    <h4>{title || ""}</h4>
    <IconButton class="close-button" on:click={() => dispatch("close")}>
        <Close />
    </IconButton>
</header>
