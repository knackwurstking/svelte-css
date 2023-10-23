<script>
    import { createEventDispatcher } from "svelte";

    /**
     * @typedef SelectItem
     * @type {import(".").SelectItem}
     */

    /** @type {SelectItem[]} */
    export let items = [];

    /** @type {SelectItem | SelectItem[] | null} */
    let selected = null;

    const dispatch = createEventDispatcher();
</script>

<div class="select">
    <div class="options">
        {#each items as item}
            <div class="option">
                <!-- TODO: create the options -->
            </div>
        {/each}
    </div>
</div>

<style>
</style>
