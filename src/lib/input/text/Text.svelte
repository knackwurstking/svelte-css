<script>
    /******************************
     * Variable Export Definitions
     ******************************/

    export let title = "";
    export let placeholder = "";
    export let value = "";
    export let invalid = false;

    /***********************
     * Variable Definitions
     ***********************/

    let focus = false;
</script>

<div
    {...$$restProps}
    class={"input " + $$restProps.class || ""}
    class:focus={focus}
    class:invalid={invalid}
>
    {#if !!title}
        <span class="title">{title}</span>
    {/if}
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
        width: 100%;

        border-bottom: var(--border-width) var(--border-color) hsl(var(--border));

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
        width: 100%;

        margin: 0;
        padding-top: calc(var(--spacing) / 1.5);

        border: none;
        outline-offset: 0 !important;
        outline: none !important;
    }
</style>
