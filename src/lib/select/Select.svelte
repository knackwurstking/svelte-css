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

    $: !width && items.length && setWidth();
    $: !!visible &&
        !!items &&
        !!optionsContainer &&
        setOptionsContainerPosition();
    $: !visible && resetOptionsContainerPosition();

    const dispatch = createEventDispatcher();

    /** @type {HTMLSpanElement} */
    let optionsContainer;
    let autoWidth = "100%";
    let optionsOnTop = false;

    async function setWidth() {
        let charsCount = 0;
        for (const item of items) {
            if ((item.label || item.value).length > charsCount) {
                charsCount = (item.label || item.value).length;
            }
        }
        autoWidth = `calc((${charsCount} * 1em) + 1em)`;
    }

    async function setOptionsContainerPosition() {
        if (!optionsContainer) return;

        if (
            window.innerHeight -
                optionsContainer.getBoundingClientRect().bottom <=
            0
        ) {
            optionsOnTop = true;
        } else {
            optionsOnTop = false;
        }
    }

    async function resetOptionsContainerPosition() {
        optionsOnTop = false;
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    {...$$restProps}
    class={"select " + $$restProps.class}
    style={$$restProps.style}
    style:width={width || autoWidth}
    on:click={() => (visible = !visible)}
>
    <span class="selected">
        {selectedItem?.label || selectedItem?.value || ""}
    </span>

    {#if visible}
        <span
            bind:this={optionsContainer}
            class="options"
            class:top={optionsOnTop}
        >
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
    {/if}
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
        user-select: none;
    }

    .select .selected {
        width: 100%;
        padding: var(--spacing, 0.5em) calc(var(--spacing, 0.5) * 1.5);
    }

    .select .options {
        z-index: 10;
        display: block;
        height: fit-content;
        position: absolute;
        left: 0;
        width: 100%;
        background-color: hsl(var(--background));
        border: 0.1em solid hsl(var(--border, currentColor));
        border-radius: var(--radius, 0);
    }

    .select .options:not(.top) {
        margin-top: var(--spacing);
        top: 100%;
    }

    .select .options.top {
        margin-bottom: var(--spacing);
        bottom: 100%;
    }
</style>
