<span {...$$restProps} class={"ui-text-secondary " + ($$restProps.class || "")}>
    <slot />
</span>

<style>
    .ui-text-secondary {
        font-size: 0.85em;
        font-weight: 300;
        font-style: italic;
    }
</style>
