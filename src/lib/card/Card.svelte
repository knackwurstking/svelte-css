<script>
    export let backgroundColor = "hsl(var(--card-bg))";
    export let color = "hsl(var(--card-fg))";
    export let noBorder = false;
</script>

<article
    {...$$restProps}
    style:padding="var(--spacing)"
    style:background-color={backgroundColor}
    style:color={color}
    style:border={noBorder ? "none" : "var(--border-width) var(--border-style) hsl(var(--border))"}
    style:border-radius="var(--radius)"
    style:overflow="hidden"
>
    <slot />
</article>
