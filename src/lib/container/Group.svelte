<script>
    export let column = false;
</script>

<span {...$$restProps} class={"group " + $$restProps.class || ""} class:column>
    <slot />
</span>
