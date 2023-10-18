<script>
    import "./button.css";

    let _class = "";
    export { _class as class };

    /** @type {"" | "primary" | "secondary"} */
    export let color = "";
    /** @type {"" | "outline" | "none"} */
    export let variant = "";
</script>

<button
    {...$$restProps}
    class={`button ${color || ""} ${variant || ""}` + _class}
    on:click
>
    <slot />
</button>
