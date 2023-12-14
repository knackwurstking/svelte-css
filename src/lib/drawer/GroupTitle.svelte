<script>
    import { GroupItem } from "."
</script>

<GroupItem>
    <h2
        {...$$restProps}
        class={"ui-drawer-group-title " + ($$restProps.class || "")}
    >
        <slot />
    </h2>
</GroupItem>
