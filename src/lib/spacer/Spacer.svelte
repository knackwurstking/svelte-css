<script>
    /** @type {"vertical" | "horizontal"} */
    export let align;
</script>

{#if align === "vertical"}
    <span
        class={"ui-spacer " + ($$restProps.class || "")}
        style={
            "margin-left: calc(var(--spacing) / 2);" +
            "margin-right: calc(var(--spacing) / 2);"
        }
    />
{:else if align === "horizontal"}
    <div
        style={
            "margin-top: calc(var(--spacing) / 2);" +
            "margin-bottom: calc(var(--spacing) / 2);"
        }
    />
{/if}
