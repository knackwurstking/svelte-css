<script>
    import { FlexGrid } from "..";

    export let height = "3em";
    export let uiContainer = false;
</script>

<header
    {...$$restProps}
    class={"ui-top-app-bar " + ($$restProps.class || "")}
    style:height={height}
>
    <FlexGrid.Row
        class={uiContainer ? "ui-container ": ""}
    >
        <FlexGrid.Row>
            <slot name="left" />
        </FlexGrid.Row>

        <FlexGrid.Row>
            <slot name="center" />
        </FlexGrid.Row>

        <FlexGrid.Row>
            <slot name="right" />
        </FlexGrid.Row>
    </FlexGrid.Row>
</header>
