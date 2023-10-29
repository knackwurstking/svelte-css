<footer {...$$restProps}>
    <slot />
</footer>

<style>
    footer {
        padding: var(--spacing);
        margin-top: var(--spacing);
        border-bottom-right-radius: var(--radius);
        border-bottom-left-radius: var(--radius);
        display: flex;
        justify-content: flex-end;
    }

    :global(footer > *) {
        margin: auto calc(var(--spacing) / 2);
    }

    :global(footer *:last-child) {
        margin-right: 0;
    }
</style>
