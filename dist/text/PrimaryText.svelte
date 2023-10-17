<script>
    export let style = "";
</script>

<span
    {...$$restProps}
    style={"font-size: 1.2em;" + style}
>
    <slot />
</span>
