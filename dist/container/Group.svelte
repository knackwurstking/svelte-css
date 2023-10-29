<script>
    export let column = false;
</script>

<span
    {...$$restProps}
    class={"group " + $$restProps.class || ""}
    class:column
>
    <slot />
</span>

<style>
    .group {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }

    .group.column {
        flex-direction: column;
    }

    .group :global(> *) {
        margin: 0;
    }

    .group:not(.column) :global(> *:first-child) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .group.column :global(> *:first-child) {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    .group:not(.column) :global(> *:last-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .group.column > :global(*:last-child) {
        border-top-right-radius: 0;
        border-top-left-radius: 0;
    }

    .group > :global(*:not(:first-child,:last-child)) {
        border-radius: 0;
    }
</style>
