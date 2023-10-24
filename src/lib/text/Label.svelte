<script>
    import "./label.css";

    import PrimaryText from "./PrimaryText.svelte";
    import SecondaryText from "./SecondaryText.svelte";

    export let primaryText = "";
    export let secondaryText = "";
    export let useLabel = false;
    export let row = false;
</script>

{#if useLabel}
    <label
        {...$$restProps}
        class={"label " + ($$restProps.class || "")}
        class:row
    >
        <span class="col">
            {#if !!primaryText}
                <PrimaryText>
                    {primaryText}
                    <slot name="primaryText" />
                </PrimaryText>
            {/if}

            {#if !!secondaryText || !!$$slots.secondaryText}
                <SecondaryText>
                    {secondaryText}
                    <slot name="secondaryText" />
                </SecondaryText>
            {/if}
        </span>

        <span>
            <slot />
        </span>
    </label>
{:else}
    <span
        {...$$restProps}
        class={"label " + ($$restProps.class || "")}
        class:row
    >
        <span class="col">
            {#if !!primaryText}
                <PrimaryText>
                    {primaryText}
                    <slot name="primaryText" />
                </PrimaryText>
            {/if}

            {#if !!secondaryText || !!$$slots.secondaryText}
                <SecondaryText>
                    {secondaryText}
                    <slot name="secondaryText" />
                </SecondaryText>
            {/if}
        </span>

        <span>
            <slot />
        </span>
    </span>
{/if}
