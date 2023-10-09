<script>
    let _class = "";
    export {_class as class};
    /** @type {"" | "primary" | "secondary"} */
    export let color = "";
</script>

<button
    {...$$restProps}

    class={
        `icon-button ${color || ""} ` + _class
    }

    on:click
>
    <slot />
</button>
