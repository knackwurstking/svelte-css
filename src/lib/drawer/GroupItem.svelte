<script>
    import { Button } from "..";

    // TODO: set custom button color var(--fg)
    export let active = false;
</script>

<li
    {...$$restProps}
    class={"no-border " + ($$restProps.class || "")}
    style={"display: block;" + ($$restProps.stykle || "")}
>
    <Button.Root
        style="width: 100%; height: 100%;"
        variant="ghost"
        {active}
        on:click
    >
        <slot style="width: 100%; height: 100%;" />
    </Button.Root>
</li>
