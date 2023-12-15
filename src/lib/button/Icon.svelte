<script>
    import { Ripple } from "..";

    /**
     * @type {HTMLButtonElement}
     */
    let button

    /** @type {"foreground" | "primary" | "secondary" | "destructive"} */
    export let color = "primary";

    export let ghost = false;

    /** @type {import("../ripple").RippleOptions} */
    export let ripple = {};

    export let noRipple = false;

    export function click() {
        button.click()
    }
</script>

<button
    bind:this={button}

    {...$$restProps}

    class={`ui-icon-button ${color || ""} ` + ($$restProps.class || "")}
    class:ghost

    use:Ripple.Root={noRipple ? null : { centered: true, ...ripple }}

    on:click
>
    <slot />
</button>
