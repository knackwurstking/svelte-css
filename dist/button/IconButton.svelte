<script>
    /** @type {"primary" | "secondary" | "destructive"} */
    export let color = "primary";
</script>

<button
    {...$$restProps}
    class={`icon-button ${color || ""} ` + ($$restProps.class || "")}
    on:click
>
    <slot />
</button>
