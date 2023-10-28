<script>
    import { Ripple } from "../ripple";

    /** @type {"primary" | "secondary" | "destructive"} */
    export let color = "primary";

    export let ghost = false;

    /** @type {import("../ripple").RippleOptions} */
    export let ripple = {};

    export let noRipple = false;
</script>

<button
    {...$$restProps}
    class={`icon-button ${color || ""} ` + ($$restProps.class || "")}
    class:ghost
    use:Ripple={noRipple ? null : { centered: true, ...ripple }}
    on:click
>
    <slot />
</button>
