<script>
    import "./primary-text.css";
</script>

<span {...$$restProps} class={"primary-text " + ($$restProps.class || "")}>
    <slot />
</span>
