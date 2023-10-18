<script>
    let _class = "";
    export { _class as class };
</script>

<div {...$$restProps} class={"row " + _class}>
    <slot />
</div>
