<script>
    import { Ripple } from "../ripple";

    /** @type {"primary" | "secondary" | "destructive"} */
    export let color = "primary";
    /** @type {import("../ripple").RippleOptions} */
    export let ripple = {};
    export let noRipple = false;
</script>

<button
    {...$$restProps}
    class={`icon-button ${color || ""} ` + ($$restProps.class || "")}
    use:Ripple={noRipple ? null : ripple}
    on:click
>
    <slot />
</button>
