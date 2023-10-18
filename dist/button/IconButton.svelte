<script>
    import "./icon-button.css";

    let _class = "";
    export { _class as class };
    /** @type {"primary" | "secondary" | "destructive"} */
    export let color = "primary";
</script>

<button
    {...$$restProps}
    class={`icon-button ${color || ""} ` + _class}
    on:click
>
    <slot />
</button>
