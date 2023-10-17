<script>
    import "./dialog.css";

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
    style:width={fullscreen && "100%"}
    style:height={fullscreen && "100%"}
>
    <article
        style:width={fullscreen && "100%"}
        style:height={fullscreen && "100%"}
    >
        <slot name="header" />
        <slot />
        <slot name="footer" />
    </article>
</dialog>
