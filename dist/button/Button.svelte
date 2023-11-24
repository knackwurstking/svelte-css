<script>
    import { Ripple } from "..";

    /** @type {"foreground" | "primary" | "secondary" | "destructive"} */
    export let color = "primary";

    /** @type {"full" | "outline" | "ghost"} */
    export let variant = "full";

    /** @type {import("../ripple").RippleOptions} */
    export let ripple = {};

    export let noRipple = false;

    export let active = false;
</script>

<button
    {...$$restProps}

    class={`ui-button ${color || ""} ${variant || ""} ` +
        ($$restProps.class || "")}
    class:active

    use:Ripple.Root={noRipple ? null : ripple}

    on:click
>
    <div class="background"></div>
    <slot />
</button>
