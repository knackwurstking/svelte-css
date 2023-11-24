<script>
    import { Ripple } from "..";

    /** @type {"foreground" | "primary" | "secondary" | "destructive"} */
    export let color = "primary";

    export let ghost = false;

    /** @type {import("../ripple").RippleOptions} */
    export let ripple = {};

    export let noRipple = false;
</script>

<button
    {...$$restProps}

    class={`ui-icon-button ${color || ""} ` + ($$restProps.class || "")}
    class:ghost

    use:Ripple.Root={noRipple ? null : { centered: true, ...ripple }}

    on:click
>
    <slot />
</button>
