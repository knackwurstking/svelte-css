<script>
    export let height = "3.5em";
</script>

<header {...$$restProps} style:height={height}>
    <div style="width: 100%;">
        <section class="left">
            <slot name="left" />
        </section>

        <section class="center">
            <slot name="center" />
        </section>

        <section class="right">
            <slot name="right" />
        </section>
    </div>
</header>

<style>
    header {
        width: 100%;

        border-bottom: var(--border-width) var(--border-style) hsl(var(--border));
    }

    header > div {
        height: 100%;

        display: inline-flex;
        flex-wrap: nowrap;
        align-items: center;

        padding: auto var(--spacing);
    }

    header section {
        margin: auto var(--spacing);
    }

    header section.left {
        display: flex;
        flex-wrap: nowrap;
    }

    header section:first-child > :global(> *),
    header section:last-child > :global(> *) {
        margin: 0 var(--spacing);
    }

    header section.center {
        width: 100%;
    }

    header section:last-child {
        display: flex;
        flex-wrap: nowrap;
    }
</style>
