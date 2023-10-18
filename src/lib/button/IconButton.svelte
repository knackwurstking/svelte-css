<script>
    import "./icon-button.css";

    let _class = "";
    export { _class as class };
    /** @type {"" | "primary" | "secondary" | "error" | "success"} */
    export let color = "";
</script>

<button
    {...$$restProps}
    class={`icon-button ${color || ""} ` + _class}
    on:click
>
    <slot />
</button>
