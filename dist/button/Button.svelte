<script>
    let _class = "";
    export { _class as class };

    /** @type {"primary" | "secondary" | "destructive"} */
    export let color = "primary";
    /** @type {"full" | "outline" | "ghost"} */
    export let variant = "full";
</script>

<button
    {...$$restProps}
    class={`button ${color || ""} ${variant || ""}` + _class}
    on:click
>
    <slot />
</button>
