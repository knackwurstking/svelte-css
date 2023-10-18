<script>
    export let style = "";
</script>

<span
    {...$$restProps}
    style={`
        font-size: 0.85em;
        font-style: italic;
        font-weight: 300;
    ` + style}
>
    <slot />
</span>
