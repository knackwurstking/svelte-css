<script>
    let _class = "";
    export { _class as class };
</script>

<div {...$$restProps} class={"container " + _class}>
    <slot></slot>
</div>