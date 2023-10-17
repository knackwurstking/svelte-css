<script>
    import PrimaryText from "./PrimaryText.svelte";
    import SecondaryText from "./SecondaryText.svelte";

    let _class = "";
    export { _class as class };

    export let primaryText = "";
    export let secondaryText = "";
    export let row = false;
</script>

<span {...$$restProps} class={"label " + _class} class:row>
    <span
        class="col"
        style="display: flex; flex-direction: column; justify-content: center;"
    >
        <PrimaryText>
            {primaryText}
            <slot name="primaryText" />
        </PrimaryText>
        {#if !!secondaryText || !!$$slots.secondaryText}
            <SecondaryText>
                {secondaryText}
                <slot name="secondaryText" />
            </SecondaryText>
        {/if}
    </span>

    <span style="display: flex; align-items: center;">
        <slot />
    </span>
</span>

<style>
    .label {
        width: 100%;
        padding: calc(var(--spacing, 0.5rem) / 2) var(--spacing, 0.5rem);
    }

    .label:not(.row) {
        display: flex;
        flex-direction: column;
    }

    .label:not(.row) > span:first-child {
        width: 100%;
    }

    .label.row > span:first-child {
        margin-right: var(--spacing, 0.5rem);
    }
</style>
