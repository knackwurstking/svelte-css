<script>
    import { createEventDispatcher } from "svelte";

    /**
     * @typedef SelectItem
     * @type {import(".").SelectItem}
     */

    /******************************
     * Variable Export Definitions
     ******************************/

    /** @type {SelectItem[]} */
    export let items = [];

    /** @type {SelectItem | null} */
    export let selected = null;

    /***********************
     * Variable Definitions
     ***********************/

    const dispatch = createEventDispatcher();

    let open = false;

    /***********************
     * Function Definitions
     ***********************/

    async function clickSelect() {
        open = !open;
    }

    /**
     * @param {SelectItem} item
     */
    async function clickOption(item) {
        selected = item;
        dispatch("change", item);
    }
</script>

<div
    {...$$restProps}
    class={"select " + ($$restProps.class || "")}
    class:open
>
    <div
        class="options"
        style:display={(!open && !selected) ? "none" : "block"}
        on:click={() => clickSelect()}
    >
        {#each items as item}
            <div
                class="option"
                style:display={
                    (open || item.value === selected?.value)
                        ? "block"
                        : "none"
                }
                on:click={() => clickOption(item)}
            >
                <span>
                    {item.label}
                </span>
            </div>
        {/each}
    </div>
</div>

<style>
    .select {
        font-size: 0.85em;
        background-color: hsl(var(--input));
        border: .1em solid hsl(var(--border));
        border-radius: var(--radius);
        padding: var(--spacing);
        width: 100%;
        overflow: hidden;
    }

    .select .options {
        cursor: pointer;
    }

    .select .options .option {
        padding: calc(var(--spacing)) 0;
        user-select: none;
        height: 100%;
    }
</style>
