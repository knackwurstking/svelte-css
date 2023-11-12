<script>
    import { Text, Ripple } from "..";

    export let primary = "";
    export let secondary = "";
</script>

<div
    class="item no-user-select"
    use:Ripple.Root
>
    <Text.Label
        {primary}
        {secondary}
        useLabel
    >
       <input type="checkbox"  style="display: none" />
    </Text.Label>
</div>

<style>
    .item {
        padding: var(--spacing);
        overflow: hidden;
    }
</style>
