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

    const dispatch = createEventDispatcher();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="select" on:click={() => (visible = !visible)}>
    <span class="selected">
        {selectedItem?.label || selectedItem?.value || ""}
    </span>

    <span class="options" class:visible>
        {#each items as item}
            <Option
                {...item}
                on:click={({ detail }) => {
                    selectedItem = item;
                    dispatch("change", detail);
                }}
            />
        {/each}
    </span>
</div>

<style>
    .select {
        border: 0.1em solid hsl(var(--border, currentColor));
        border-radius: var(--radius, 0);
        width: 100%;
        height: calc(1em + (var(--spacing) * 2));
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: hsl(var(--background));
        cursor: pointer;
    }

    .select .selected {
        width: 100%;
        padding: var(--spacing, 0.5em);
    }

    .select .options {
        z-index: 10;
        display: none;
        position: absolute;
        top: 100%;
        margin-top: var(--spacing);
        left: 0;
        width: 100%;
        height: 0;
        background-color: hsl(var(--background));
        border: 0.1em solid hsl(var(--border, currentColor));
        border-radius: var(--radius, 0);
    }

    .select .options.visible {
        display: block;
        height: fit-content;
    }
</style>
