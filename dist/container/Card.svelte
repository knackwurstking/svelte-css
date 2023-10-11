<script>
    let _class = "";
    export { _class as class };
</script>

<div {...$$restProps} class={"card " + _class}>
    <slot></slot>
</div>