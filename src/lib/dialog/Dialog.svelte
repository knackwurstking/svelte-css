<script>
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

<dialog bind:this={dialog}>
    <article>
        <slot name="header" />
        <slot />
        <slot name="footer" />
    </article>
</dialog>
