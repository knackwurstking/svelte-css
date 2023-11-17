<script>
    export let height = "3em";
    export let uiContainer = false;
</script>

<header
    {...$$restProps}
    class={"ui-top-app-bar flex " + ($$restProps.class || "")}
    style:height={height}
>
    <div
        class="flex nowrap align-center is-max-height"
        class:ui-container={uiContainer}
        class:ui-container-full={!uiContainer}
    >
        <span class="left">
            <slot name="left" />
        </span>

        <span class="center">
            <slot name="center" />
        </span>

        <span class="right">
            <slot name="right" />
        </span>
    </div>
</header>

<style>
    header {
        z-index: 999;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;

        border-bottom: var(--border-width) var(--border-style) hsl(var(--border));

        background-color: hsla(var(--bg), .4);
        backdrop-filter: blur(5px);
    }

    header span {
        margin: 0 var(--spacing);
    }

    header span.left {
        display: flex;
        flex-wrap: nowrap;
    }

    header span:first-child :global(> *),
    header span:last-child :global(> *) {
        margin: 0 var(--spacing);
    }

    header span.center {
        width: 100%;
    }

    header span:last-child {
        display: flex;
        flex-wrap: nowrap;
    }
</style>
