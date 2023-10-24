<script>
    import "./secondary-text.css";
</script>

<span {...$$restProps} class={"secondary-text " + ($$restProps.class || "")}>
    <slot />
</span>
