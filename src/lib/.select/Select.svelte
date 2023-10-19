<script>
    import { createEventDispatcher } from "svelte";

    import Option from "./Option.svelte";

    /**
     * @typedef Item
     * @type {{
     *  value: string;
     *  label?: string;
     * }}
     */

    /**
     * @type {Item[]}
     */
    export let items = [];

    /**
     * @type {Item | null}
     */
    export let selectedItem = null;

    /**
     * @type {boolean}
     */
    export let visible = false;

    /**
     * @type {string}
     */
    export let width = "";

    /**
     * @type {boolean}
     */
    export let optionsOnTop = false;

    $: !width && setWidth();

    const dispatch = createEventDispatcher();

    let autoWidth = "100%";

    async function setWidth() {
        let charsCount = 0;
        for (const item of items) {
            if ((item.label || item.value).length > charsCount) {
                charsCount = (item.label || item.value).length;
            }
        }
        autoWidth = `${charsCount}em`;
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    {...$$restProps}
    class={"select " + ($$restProps.class || "")}
    style={$$restProps.style}
    style:width={width || autoWidth}
    on:click={() => (visible = !visible)}
>
    <span class="selected">
        {selectedItem?.label || selectedItem?.value || ""}
    </span>

    {#if visible}
        <span class="options" class:top={optionsOnTop}>
            {#each items as item}
                <Option
                    {...item}
                    on:click={({ detail }) => {
                        dispatch("change", (selectedItem = detail));
                    }}
                />
            {/each}
        </span>
    {/if}
</div>

<style>
    .select {
        border: 0.1em solid hsl(var(--border, currentColor));
        border-radius: var(--radius, 0);
        width: 100%;
        height: calc(1em + (var(--spacing, 0.5em) * 2));
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: hsl(var(--background));
        cursor: pointer;
        user-select: none;
    }

    .select .selected {
        width: 100%;
        padding: var(--spacing, 0.5em) calc(var(--spacing, 0.5em) * 1.5);
    }

    .select .options {
        z-index: 999;
        display: block;
        width: 100%;
        height: fit-content;
        position: absolute;
        background-color: hsl(var(--background));
        border: 0.1em solid hsl(var(--border, currentColor));
        border-radius: var(--radius, 0);
    }

    .select .options:not(.top) {
        top: 100%;
        margin-top: var(--spacing, 0.5em);
    }

    .select .options.top {
        bottom: 100%;
        margin-bottom: var(--spacing, 0.5em);
    }
</style>
