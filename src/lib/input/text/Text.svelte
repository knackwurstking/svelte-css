<script>
    import { Secondary } from "../../text";

    /** @type {string} */
    export let title = "";
    /** @type {string} */
    export let value = "";
    /** @type {string} */
    export let placeholder = "";
</script>

<div {...$$restProps} class={"input " + $$restProps.class}>
    <span class="title">{title}</span>
    <input bind:value {placeholder} on:change />
</div>

<style>
    .input {
        width: 100%;
        border-bottom: var(--border-width) solid hsl(var(--border));
    }

    .input .title {
        font-size: 0.85em;
        font-weight: 300;
        font-style: italic;
        padding-left: var(--spacing);
        text-decoration: underline;
    }

    input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;

        width: 100%;

        margin: 0;
        padding-top: calc(var(--spacing) / 1.5);

        border: none;
        outline-offset: 0 !important;
        outline: none !important;
    }
</style>
