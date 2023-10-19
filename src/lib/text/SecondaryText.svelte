<script>
    let _class = "";
    export { _class as class };
</script>

<span {...$$restProps} class={"secondary-text " + _class}>
    <slot />
</span>
