<script>
    import { Text, Ripple } from "..";

    export let primary = "";
    export let secondary = "";
    export let useRipple = false;
    export let checked = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="item no-user-select"
    class:checked
    use:Ripple.Root={useRipple ? undefined : null}
    on:click
>
    <div class="background" />
    <Text.Label {primary} {secondary} />
</div>

<style>
    .item {
        padding: var(--spacing);
        overflow: hidden;
    }

    .item.checked .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: currentColor;
        opacity: .2;
    }
</style>
