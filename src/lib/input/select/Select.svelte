<script>
    import { createEventDispatcher } from "svelte";

    import ChevronDown from "svelte-material-icons/ChevronDown.svelte";

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

    export let alwaysOpen = false;

    /***********************
     * Variable Definitions
     ***********************/

    const dispatch = createEventDispatcher();

    let open = alwaysOpen;

    /******************************
     * Function Export Definitions
     ******************************/

    export async function expand() {
        open = true;
    }

    export async function collapse() {
        open = false;
    }

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
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        class="options"
        style:display={(!open && !selected) ? "none" : "block"}
        on:click={!alwaysOpen ? () => clickSelect() : undefined}
    >
        <div class="icon"><ChevronDown height="100%" width="100%" /></div>

        {#each items as item}
            <div
                class="option no-user-select"
                class:selected={(item.value === selected?.value)}
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
        border: var(--border-width, .1em) solid hsl(var(--border));
        border-radius: var(--radius);
        width: 100%;
        overflow: hidden;
    }

    .select .options {
        cursor: pointer;
        display: block;
    }

    .select .options .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 2.5em;
        color: hsl(var(--primary));
    }

    .select.open .options .icon {
        display: none;
    }

    .select:not(.open) .options .option:not(.selected) {
        display: none;
    }

    .select .options .option {
        height: 100%;
        padding: calc(var(--spacing));
        padding-right: 2.5em;
        transition: background-color .25s linear;
    }

    .select.open .options .option.selected {
        background-color: hsl(var(--primary));
        color: hsl(var(--primary-foreground));
    }

    .select.open .options .option:not(.selected):hover {
        background-color: hsl(var(--foreground), .1);
    }
</style>
