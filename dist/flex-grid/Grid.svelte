<script>
    export let gap = "0";
</script>

<div
    {...$$restProps}
    class={"ui-grid flex " + ($$restProps.class || "")}
    style={`--gap: ${gap};` + ($$restProps.style || "")}
>
    <slot />
</div>
