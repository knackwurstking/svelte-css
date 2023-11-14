<script>
    import { Button } from "..";

    export let active = false;
</script>

<li
    {...$$restProps}
    class={"ui-drawer-group-item no-border " + ($$restProps.class || "")}
    style={"display: block;" + ($$restProps.stykle || "")}
>
    <Button.Root
        style="width: 100%; height: 100%;"
        variant="ghost"
        color="foreground"
        {active}
        on:click
    >
        <slot style="width: 100%; height: 100%;" />
    </Button.Root>
</li>
