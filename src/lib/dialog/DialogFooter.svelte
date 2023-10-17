<script>
    export let style = "";
</script>

<footer
    style={`
        background-color: var(--color-bg-secondary-color);
        padding: var(--spacing);
        margin-top: var(--spacing);
        border-bottom-right-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
        display: flex;
        justify-content: flex-end;
    ` + style}
>
    <slot />
</footer>

<style>
    :global(dialog article > footer *) {
        margin: auto calc(var(--spacing) / 2);
    }

    :global(dialog article > footer *:last-child) {
        margin-right: 0;
    }
</style>
