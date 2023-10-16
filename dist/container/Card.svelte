<script>
    let _class = "";
    export { _class as class };
    export let noShadow = false;
</script>

<div {...$$restProps} class={"card " + _class} class:no-shadow={noShadow}>
    <slot />
</div>

