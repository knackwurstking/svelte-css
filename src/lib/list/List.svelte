<script>
</script>

<span class="list">
    <slot />
</span>

<style>
    .list {
    }

    .list :global(> *) {
        border-bottom: var(--border-width) var(--border-style) hsl(var(--border));
    }

    .list :global(> *:first-child) {
        border-top: var(--border-width) var(--border-style) hsl(var(--border));
    }
</style>
