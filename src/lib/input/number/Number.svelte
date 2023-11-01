<script>
    /** @type {string} */
    export let title = "";

    /** @type {string} */
    export let placeholder = "";

    /** @type {number} */
    export let min = undefined;
    /** @type {number} */
    export let max = undefined;

    /** @type {number} */
    export let value = undefined;

    export let invalid = false;

    let focus = false;
</script>

<div
    {...$$restProps}
    class={"input " + $$restProps.class || ""}
    class:focus={focus}
    class:invalid={invalid}
>
    <span class="title">{title}</span>
    <input
        type="number"
        {placeholder}
        {min}
        {max}
        bind:value
        on:change
        on:focus={() => focus = true}
        on:blur={() => focus = false}
    />
</div>

<style>
    .input {
        min-width: fit-content;
        width: 100%;

        border-bottom: var(--border-width) solid hsl(var(--border));

        transition: border-color .25s linear;
    }

    .input.focus {
        border-color: hsl(var(--primary));
    }

    .input.invalid {
        border-color: hsl(var(--destructive));
    }

    .input .title {
        font-size: 0.85em;
        font-weight: 300;
        font-style: italic;
        padding-left: var(--spacing);
        padding-right: var(--spacing);
    }

    input {
        min-width: fit-content;
        width: 100%;

        margin: 0;
        padding-top: calc(var(--spacing) / 1.5);

        border: none;
        outline-offset: 0 !important;
        outline: none !important;
    }
</style>
