<script>
    export let style = "";
    export let fullscreen = false;

    /** @type {HTMLDialogElement} */
    let dialog;

    export async function show() {
        dialog.show();
    }

    export async function showModal() {
        dialog.showModal();
    }

    export async function close() {
        dialog.close();
    }
</script>

<dialog
    {...$$restProps}
    bind:this={dialog}
    style={`
        position: fixed;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        max-width: 100%;
        max-height: 100%;

        padding: var(--spacing);

        border: none;
        border-radius: var(--border-radius);

        background-color: transparent;

        -ms-overflow-style: none;
        scrollbar-width: none;
    ` + style}
    style:width={fullscreen && "100%"}
    style:height={fullscreen && "100%"}
>
    <article
        style={`
            padding: 0;
            background-color: var(--color-bg-color);
            border-radius: var(--border-radius);
            box-shadow: 0 0 .3px var(--color-grey), 0 0 .35rem var(--color-grey);
        `}
        style:width={fullscreen && "100%"}
        style:height={fullscreen && "100%"}
    >
        <slot name="header" />
        <slot />
        <slot name="footer" />
    </article>
</dialog>

<style>
    dialog::-webkit-scrollbar {
        display: none;
    }

    dialog::backdrop {
        background-color: hsl(0, 0%, 0%, 0.5);
    }

    :global(dialog article > section) {
        padding-left: calc(var(--spacing) * 2);
        padding-right: calc(var(--spacing) * 2);
    }
</style>
