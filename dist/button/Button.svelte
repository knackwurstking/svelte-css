<script>
    import { Ripple } from "..";

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
    use:Ripple.Root={noRipple ? null : ripple}
    on:click
>
    <slot />
</button>

<style>
    .button {
        padding: var(--spacing) calc(var(--spacing) * 3);
        border: var(--border-width, .1em) solid currentColor;
        border-radius: var(--radius);
        box-shadow: none;
        transition: background-color .2s ease;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    /* variant: full */

    .button.full.primary:not(.outline, .none) {
        background-color: hsl(var(--primary));
        color: hsl(var(--primary-foreground));
        border: none;
    }

    .button.full.secondary:not(.outline, .none) {
        background-color: hsl(var(--secondary));
        color: hsl(var(--secondary-foreground));
        border: none;
    }

    .button.full.destructive:not(.outline, .none) {
        background-color: hsl(var(--destructive));
        color: hsl(var(--destructive-foreground));
        border: none;
    }

    /* variant: outline */

    .button.outline {
        border-color: currentColor;
        background-color: transparent;
    }

    .button.outline.primary {
        color: hsl(var(--primary));
    }

    .button.outline.secondary {
        color: hsl(var(--secondary));
    }

    .button.outline.destructive {
        color: hsl(var(--destructive));
    }

    /* variant: ghost */

    .button.ghost {
        border-color: transparent;
        background-color: transparent;
    }

    .button.ghost.primary {
        color: hsl(var(--primary));
    }

    .button.ghost.secondary {
        color: hsl(var(--secondary));
    }

    .button.ghost.destructive {
        color: hsl(var(--destructive));
    }

    /* :disabled */

    .button:disabled,
    .button:disabled:hover,
    .button:disabled:active {
        background-color: transparent;
        opacity: 0.25;
        cursor: default;
    }
</style>
