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
        class={
            "ui-text-label " +
            !row ? "flex column" : "" +
            ($$restProps.class || "")
        }
        class:row
        style={
            "width: 100%;" +
            "padding: calc(var(--spacing) / 4) calc(var(--spacing) / 2);"
        }
    >
        <Grid.Col
            class={"flex column justify-center no-user-select"}
            style={
                row
                    ? "margin-right: var(--spacing); width: 100%;"
                    : "margin-left: calc(var(--spacing) / 2);"
            }
        >
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

        <span class="flex align-center">
            <slot />
        </span>
    </label>
{:else}
    <span
        {...$$restProps}
        class={
            "ui-text-label " +
            !row ? "flex column" : "" +
            ($$restProps.class || "")
        }
        class:row
        style={
            "width: 100%;" +
            "padding: calc(var(--spacing) / 4) calc(var(--spacing) / 2);"
        }
    >
        <Grid.Col
            class={"flex column justify-center no-user-select"}
            style={
                row
                    ? "margin-right: var(--spacing); width: 100%;"
                    : "margin-left: calc(var(--spacing) / 2);"
            }
        >
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

        <span class="flex align-center">
            <slot />
        </span>
    </span>
{/if}
