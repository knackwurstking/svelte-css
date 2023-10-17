<script>
    export let style = "";
</script>

<span
    {...$$restProps}
    style={"font-size: 0.85em;" + style}
>
    <slot />
</span>
