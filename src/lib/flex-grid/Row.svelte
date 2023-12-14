<script>
    export let gap = "0";
</script>

<div
    {...$$restProps}
    class={"ui-grid-row " + ($$restProps.class || "")}
    style={`--gap: ${gap};` + ($$restProps.style || "")}
>
    <slot />
</div>
