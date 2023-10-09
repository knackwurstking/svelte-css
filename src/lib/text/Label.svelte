<script>
    import PrimaryText from "./PrimaryText.svelte";
    import SecondaryText from "./SecondaryText.svelte";

    export let primaryText = "";
    export let secondaryText = "";
</script>

<style>
    .label {
        width: 100%;
        padding: calc(var(--spacing, 0.5rem) / 2) var(--spacing, 0.5rem);
    }

    .label > *:first-child {
        margin-right: var(--spacing, 0.5rem);
    }
</style>

<span class="label row">
    <span class="col" style="display: flex; flex-direction: column; justify-content: center;">
        <PrimaryText>{primaryText}</PrimaryText>
        {#if !!secondaryText}
            <SecondaryText>{secondaryText}</SecondaryText>
        {/if}
    </span>

    <span style="display: flex; align-items: center;">
        <slot />
    </span>
</span>