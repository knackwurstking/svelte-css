<script>
    import { FlexGrid } from "..";

    export let height = "3em";
    export let uiContainer = false;
</script>

<header
    {...$$restProps}
    class={"ui-top-app-bar flex " + ($$restProps.class || "")}
    style:height={height}
>
    <FlexGrid.Row
        class={
            "no-padding is-max-height align-center " +
            (uiContainer ? "ui-container ": "")
        }
        gap=".1em"
    >
        <FlexGrid.Row class="justify-start" style="width: fit-content;" gap=".1em">
            <slot name="left" />
        </FlexGrid.Row>

        <FlexGrid.Row class="justify-start" gap=".1em">
            <slot name="center" />
        </FlexGrid.Row>

        <FlexGrid.Row class="justify-end" gap=".1em">
            <slot name="right" />
        </FlexGrid.Row>
    </FlexGrid.Row>
</header>

<style>
    header {
        z-index: 999;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;

        border-bottom: var(--border-width) var(--border-style) hsl(var(--border));

        background-color: hsla(var(--bg), .4);
        backdrop-filter: blur(5px);
    }
</style>
