<script>
    import { createEventDispatcher } from "svelte";

    import TextSearch from "svelte-material-icons/TextSearch.svelte";

    import { Button } from "../..";

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

    const dispatch = createEventDispatcher();

    let focus = false;

    /***********************
     * Function Definitions
     ***********************/

    async function click() {
        dispatch("submit", value);
    }
</script>

<div
    {...$$restProps}
    class={"ui-input-search " + ($$restProps.class || "")}
    class:focus={focus}
    class:invalid={invalid}
>
    {#if !!title}
        <span class="title">{title}</span>
    {/if}

    <input
        bind:value
        type="search"
        {placeholder}
        on:change
        on:input
        on:keyup={(ev) => {
            if (ev.key === "Enter") {
                click();
            }
        }}
        on:focus={() => focus = true}
        on:blur={() => focus = false}
    />

    <Button.Icon
        style={
            "position: absolute;" +
            "height: 100%;" +
            "bottom: 0;" +
            "right: 0;" +
            "padding: .25em;" +
            "border-top-left-radius: 0;" +
            "border-bottom-left-radius: 0;"
        }
        ghost
        on:click={() => click()}
    >
        <TextSearch />
    </Button.Icon>
</div>

<style>
    .ui-input-search {
        position: relative;
        width: 100%;

        border: var(--border-width) var(--border-style) hsl(var(--border));
        border-radius: var(--radius);

        transition: border-color .25s linear;
    }

    .ui-input-search.focus {
        border-color: hsl(var(--primary));
    }

    .ui-input-search.invalid {
        border-color: hsl(var(--destructive));
    }

    .ui-input-search .title {
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
        padding-right: calc(2.5em + var(--spacing));

        border: none;
        outline-offset: 0 !important;
        outline: none !important;
    }
</style>
