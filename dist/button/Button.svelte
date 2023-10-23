<script>
    import { Ripple } from "../ripple";

    /** @type {"primary" | "secondary" | "destructive"} */
    export let color = "primary";
    /** @type {"full" | "outline" | "ghost"} */
    export let variant = "full";
    /** @type {import("../ripple").RippleOptions} */
    export let ripple = {};
    export let noRipple = false;
</script>

<button
    {...$$restProps}
    class={`button ${color || ""} ${variant || ""} ` +
        ($$restProps.class || "")}
    use:Ripple={noRipple ? null : ripple}
    on:click
>
    <slot />
</button>
