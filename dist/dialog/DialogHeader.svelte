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
        background-color: var(--color-bg-color);
        padding: var(--spacing);
        padding-right: calc(2.5rem + var(--spacing));
        margin-bottom: var(--spacing);
        border-top-right-radius: var(--border-radius);
        border-top-left-radius: var(--border-radius);
        display: flex;
        align-items: center;
    ` + style}
>
    <h4>{title || ""}</h4>

    <IconButton
        on:click={() => dispatch("close")}
        style={`
            position: absolute;
            top: calc(var(--spacing) / 2);
            right: calc(var(--spacing) / 2);
        `}
    >
        <Close />
    </IconButton>
</header>
