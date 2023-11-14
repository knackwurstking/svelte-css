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
    class={`button ${color || ""} ${variant || ""} ` +
        ($$restProps.class || "")}
    class:active
    use:Ripple.Root={noRipple ? null : ripple}
    on:click
>
    <div class="background"></div>
    <slot />
</button>

<style>
    .button {
        padding: var(--spacing) calc(var(--spacing) * 1.5);
        border: var(--border-width) var(--border-style) currentColor;
        border-radius: var(--radius);
        box-shadow: none;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: background-color .2s ease;
    }

    .button .background {
        background-color: currentColor;
        transition: background-color .25s ease;
        opacity: 0;

        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    /* variant: full */

    .button.full.active .background {
        transition: opacity .25s ease .4s;
        opacity: .2;
    }

    .button.full.foreground:not(.outline, .none) {
        background-color: hsl(var(--fg));
        color: hsl(var(--bg));
        border: none;
    }

    .button.full.primary:not(.outline, .none) {
        background-color: hsl(var(--primary));
        color: hsl(var(--primary-fg));
        border: none;
    }

    .button.full.secondary:not(.outline, .none) {
        background-color: hsl(var(--secondary));
        color: hsl(var(--secondary-fg));
        border: none;
    }

    .button.full.destructive:not(.outline, .none) {
        background-color: hsl(var(--destructive));
        color: hsl(var(--destructive-fg));
        border: none;
    }

    /* variant: outline */

    .button.outline.active .background {
        transition: opacity .25s ease .4s;
        opacity: .2;
    }

    .button.outline {
        border-color: currentColor;
        background-color: transparent;
    }

    .button.outline.foreground {
        color: hsl(var(--fg));
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

    .button.ghost.active .background {
        transition: opacity .25s ease .4s;
        opacity: .2;
    }

    .button.ghost {
        border-color: transparent;
        background-color: transparent;
    }

    .button.ghost.foreground {
        color: hsl(var(--fg));
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
