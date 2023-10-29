<span {...$$restProps} class={"secondary-text " + ($$restProps.class || "")}>
    <slot />
</span>

<style>
    .secondary-text {
        font-size: 0.85em;
        font-weight: 300;
        font-style: italic;
    }
</style>
