<script>
    import { createEventDispatcher } from "svelte";

    import Item from "./Item.svelte";

    /** @type {import(".").ListItem []} */
    export let items = [];

    export let single = false;
    export let multiple = false;

    /** @type {import(".").ListItem []} */
    export let group = [];

    const dispatch = createEventDispatcher();
</script>

<span class="list">
    {#each items as item}
        <Item
            primary={item.primary}
            secondary={item.secondary}
            useRipple
            checked={(single || multiple) && !!group.find(i => i.value === item.value)}
            on:click={() => {
                if (single) dispatch("change", item);
                if (multiple) {
                    const index = group.findIndex(i => i.value === item.value);
                    if (index > -1) {
                        group = [
                            ...group.slice(0, index),
                            ...group.slice(index+1),
                        ];
                    } else {
                        group = [
                            ...group,
                            item,
                        ];
                    }

                    dispatch("change", group);
                }
            }}
        />
    {/each}
</span>

<style>
    .list :global(> *) {
        border-bottom: var(--border-width) var(--border-style) hsl(var(--border));
    }

    .list :global(> *:first-child) {
        border-top: var(--border-width) var(--border-style) hsl(var(--border));
    }
</style>
