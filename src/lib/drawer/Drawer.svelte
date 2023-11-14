<script>
    export let open = false;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    {...$$restProps}
    class={"ui-drawer " + ($$restProps.class || "")}
    class:open
    on:click={(ev) => {
        ev.stopPropagation();
        open = false;
    }}
>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <aside
        style:left={open ? "0" : "-100%"}
        on:click={(ev) => ev.stopPropagation()}
    >
        <slot />
    </aside>
</div>

<style>
    div {
        z-index: 999;

        position: absolute;

        width: 100%;
        height: 100%;
        top: 0;
        left: -100%;

        transition: left 0s ease .5s;
    }

    div.open {
        left: 0;

        background-color: hsl(0, 0%, 0%, 0.4);
        backdrop-filter: blur(.5rem);

        transition: none;
    }

    aside {
        z-index: 999;

        position: absolute;
        top: 0;
        left: 0;
        width: 18em;
        max-width: 100%;
        height: 100%;

        transition: left .5s ease;

        background-color: hsl(var(--bg));
        color: hsl(var(--fg));
    }
</style>
