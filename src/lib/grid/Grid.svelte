<script>
    export let width = "100%";
    export let height = "fit-content";
</script>

<div
    {...$$restProps}
    style:width
    style:height
>
    <slot />
</div>
