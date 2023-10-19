<script>
    export let noShadow = false;
</script>

<div
    {...$$restProps}
    class={"card " + ($$restProps.class || "")}
    class:no-shadow={noShadow}
>
    <slot />
</div>
