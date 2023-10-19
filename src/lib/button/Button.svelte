<script>
    /** @type {"primary" | "secondary" | "destructive"} */
    export let color = "primary";
    /** @type {"full" | "outline" | "ghost"} */
    export let variant = "full";
</script>

<button
    {...$$restProps}
    class={`button ${color || ""} ${variant || ""}` + ($$restProps.class || "")}
    on:click
>
    <slot />
</button>
