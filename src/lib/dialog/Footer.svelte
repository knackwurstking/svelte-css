<footer
    {...$$restProps}
    class={
        "ui-dialog-footer " +
        "flex row nowrap justify-end " +
        ($$restProps.class || "")
    }
>
    <slot />
</footer>

<style>
    footer {
        padding: var(--spacing);
        margin-top: var(--spacing);
        border-bottom-right-radius: var(--radius);
        border-bottom-left-radius: var(--radius);
    }

    footer :global(> *) {
        margin: auto calc(var(--spacing) / 2);
    }

    footer :global(*:last-child) {
        margin-right: 0;
    }
</style>
