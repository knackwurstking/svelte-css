<script>
    /** @type {string} */
    export let title = "";

    /** @type {string} */
    export let placeholder = "";

    /** @type {string} */
    export let value = "";

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
        bind:value
        {placeholder}
        on:change
        on:input
        on:focus={() => focus = true}
        on:blur={() => focus = false}
    />
</div>

<style>
    .input {
        width: fit-content;

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
        width: fit-content;

        margin: 0;
        padding-top: calc(var(--spacing) / 1.5);

        border: none;
        outline-offset: 0 !important;
        outline: none !important;
    }
</style>
