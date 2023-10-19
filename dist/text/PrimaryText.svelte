<script>
    let _class = "";
    export { _class as class };
</script>

<span {...$$restProps} class={"primary-text " + _class}>
    <slot />
</span>
