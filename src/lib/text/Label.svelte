<script>
    import Primary from "./Primary.svelte";
    import Secondary from "./Secondary.svelte";

    import { Grid } from "..";

    export let primary = "";
    export let secondary = "";
    export let useLabel = false;
    export let row = false;
</script>

{#if useLabel}
    <label
        {...$$restProps}
        class={"ui-text-label " + ($$restProps.class || "")}
        class:row
    >
        <Grid.Col class="no-user-select">
            {#if !!primary}
                <Primary>
                    <span>{primary}</span> <slot name="primary" />
                </Primary>
            {/if}

            {#if !!secondary || !!$$slots.secondary}
                <Secondary>
                    <span>{secondary}</span> <slot name="secondary" />
                </Secondary>
            {/if}
        </Grid.Col>

        <span>
            <slot />
        </span>
    </label>
{:else}
    <span
        {...$$restProps}
        class={"ui-text-label " + ($$restProps.class || "")}
        class:row
    >
        <Grid.Col class="no-user-select">
            {#if !!primary}
                <Primary>
                    <span>{primary}</span> <slot name="primary" />
                </Primary>
            {/if}

            {#if !!secondary || !!$$slots.secondary}
                <Secondary>
                    <span>{secondary}</span> <slot name="secondary" />
                </Secondary>
            {/if}
        </Grid.Col>

        <span>
            <slot />
        </span>
    </span>
{/if}

<style>
    .ui-text-label {
        width: 100%;
        padding: calc(var(--spacing) / 4) calc(var(--spacing) / 2);
    }

    .ui-text-label:not(.row) {
        display: flex;
        flex-direction: column;
    }

    .ui-text-label > span:nth-child(1) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .ui-text-label.row > span:nth-child(1) {
        margin-right: var(--spacing);
        width: 100%;
    }

    .ui-text-label:not(.row) > span:nth-child(1) {
        margin-left: calc(var(--spacing) / 2);
    }

    .ui-text-label > span:nth-child(2) {
        display: flex;
        align-items: center;
    }
</style>
