<script>
    let _class = "";
    export { _class as class };
</script>

<div {...$$restProps} class={"Col " + _class}>
    <slot />
</div>
