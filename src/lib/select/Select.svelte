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

    /***********************
     * Variable Definitions
     ***********************/

    const dispatch = createEventDispatcher();

    /** @type {SelectItem | null} */
    let selected = null;

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
    on:click={() => clickSelect()}
>
    <div class="options">
        {#each items as item}
            <div
                class="option"
                class:display={
                    (open && item.value === selected?.value)
                        ? "block"
                        : "none"
                }
            >
                <span class="label" on:click={() => clickOption(item)}></span>
            </div>
        {/each}
    </div>
</div>

<style>
    .select {
        border: .1em solid hsl(var(--border));
        border-radius: var(--radius);
        padding: var(--spacing);
        width: 100%;
        height: fit-content;
        transition: height .25s ease;
        cursor: pointer; 
    }

    .select .options {}

    .select .options .option {}

    .select .options .option .label {}
</style>
