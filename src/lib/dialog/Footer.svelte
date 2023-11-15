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
