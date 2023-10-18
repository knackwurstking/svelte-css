<script>
    export let style = "";
</script>

<span
    {...$$restProps}
    style={`
        font-size: 1.2em;
        font-weight: 400;
    ` + style}
>
    <slot />
</span>
