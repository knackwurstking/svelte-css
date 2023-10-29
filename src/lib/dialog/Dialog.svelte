<script>
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

<dialog {...$$restProps} bind:this={dialog} class:fullscreen>
    <article>
        <slot name="header" />
        <slot />
        <slot name="footer" />
    </article>
</dialog>

<style>
    dialog {
        position: fixed;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        max-width: 100%;
        max-height: 100%;

        padding: var(--spacing);

        border: none;
        border-radius: var(--radius);

        background-color: transparent;

        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    dialog::-webkit-scrollbar {
        display: none;
    }

    dialog::backdrop {
        background-color: hsl(0, 0%, 0%, 0.4);
        backdrop-filter: blur(.5rem);
    }

    dialog.fullscreen,
    dialog.fullscreen > article {
        width: 100%;
        height: 100%;
    }

    dialog > article {
        background-color: hsl(var(--popover));
        color: hsl(var(--popover-foreground));
        border: var(--border-width, .1em) solid hsl(var(--border));
        border-radius: var(--radius);
    }

    dialog :global(> section),
    dialog > article :global(> section) {
        padding-left: calc(var(--spacing) * 2);
        padding-right: calc(var(--spacing) * 2);
    }
</style>
