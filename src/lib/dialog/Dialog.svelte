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

<dialog {...$$restProps} bind:this={dialog} class:fullscreen>
    <article>
        <slot name="header" />
        <slot />
        <slot name="footer" />
    </article>
</dialog>
