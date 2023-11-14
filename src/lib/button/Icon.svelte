<script>
    import { Ripple } from "..";

    /** @type {"normal"| "primary" | "secondary" | "destructive"} */
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
    use:Ripple.Root={noRipple ? null : { centered: true, ...ripple }}
    on:click
>
    <slot />
</button>

<style>
    .icon-button {
        position: relative;
        width: 2.5em;
        height: 2.5em;

        padding: var(--spacing);

        background-color: transparent;

        border: var(--border-width) var(--border-style) hsl(var(--border));
        border-radius: var(--radius);

        outline: none;

        overflow: hidden;
        transition: background-color .2s ease;

        box-shadow: none;

        cursor: pointer;
    }

    .icon-button :global(> *) {
        width: 100%;
        height: 100%;
    }

    .icon-button.ghost {
        border: none;
    }

    .icon-button.normal {
        color: hsl(var(--fg));
        border-color: hsl(var(--fg));
    }

    .icon-button.primary {
        color: hsl(var(--primary));
        border-color: hsl(var(--primary));
    }

    .icon-button.secondary {
        color: hsl(var(--secondary));
        border-color: hsl(var(--secondary));
    }

    .icon-button.destructive {
        color: hsl(var(--destructive));
        border-color: hsl(var(--destructive));
    }

    /* :disabled */

    .icon-button:disabled,
    .icon-button:disabled:hover,
    .icon-button:disabled:active {
        background-color: transparent;
        opacity: 0.25;
        cursor: default;
    }
</style>
