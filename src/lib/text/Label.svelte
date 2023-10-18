<script>
    import PrimaryText from "./PrimaryText.svelte";
    import SecondaryText from "./SecondaryText.svelte";

    let _class = "";
    export { _class as class };

    export let primaryText = "";
    export let secondaryText = "";
    export let useLabel = false;
    export let row = false;
</script>

{#if useLabel}
    <label
        {...$$restProps}
        class={"label " + _class}
        class:row
        style={`
            width: 100%;
            padding: calc(var(--spacing, 0.5em) / 2) var(--spacing, 0.5em);
        `}
        style:display={!row && "flex"}
        style:flex-direction={!row && "column"}
    >
        <span
            class="col"
            style={`
                display: flex;
                flex-direction: column;
                justify-content: center;
                user-select: none;
            `}
            style:margin-right={row && "margin-right: var(--spacing, 0.5em)"}
            style:width={row && "100%"}
        >
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

        <span
            style={`
                display: flex;
                align-items: center;
            `}
        >
            <slot />
        </span>
    </label>
{:else}
    <span
        {...$$restProps}
        class={"label " + _class}
        class:row
        style={`
            width: 100%;
            padding: calc(var(--spacing, 0.5em) / 2) var(--spacing, 0.5em);
        `}
        style:display={!row && "flex"}
        style:flex-direction={!row && "column"}
    >
        <span
            class="col"
            style={`
                display: flex;
                flex-direction: column;
                justify-content: center;
                user-select: none;
            `}
            style:margin-right={row && "margin-right: var(--spacing, 0.5em)"}
            style:width={row && "100%"}
        >
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

        <span
            style={`
                display: flex;
                align-items: center;
            `}
        >
            <slot />
        </span>
    </span>
{/if}
