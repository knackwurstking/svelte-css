<script>
    import { createEventDispatcher } from "svelte";

    import Close from "svelte-material-icons/Close.svelte";

    import { IconButton } from "../button";

    const dispatch = createEventDispatcher();

    export let title;
    export let style = "";
</script>

<header
    {...$$restProps}
    style={`
        height: calc(2.5rem + var(--spacing));
        background-color: hsl(var(--background));
        padding: var(--spacing);
        padding-right: calc(2.5rem + var(--spacing));
        margin-bottom: var(--spacing);
        border-top-right-radius: var(--radius);
        border-top-left-radius: var(--radius);
        display: flex;
        align-items: center;
    ` + style}
>
    <h4>{title || ""}</h4>

    <IconButton
        on:click={() => dispatch("close")}
        style={`
            position: absolute;
            top: var(--spacing);
            right: var(--spacing);
            border: none;
        `}
    >
        <Close />
    </IconButton>
</header>
