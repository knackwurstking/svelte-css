<span {...$$restProps} class={"primary-text " + ($$restProps.class || "")}>
    <slot />
</span>

<style>
    .primary-text {
        font-size: 1.1em;
        font-weight: 400;
    }
</style>
