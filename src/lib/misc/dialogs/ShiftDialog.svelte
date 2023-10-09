<script>
    import { createEventDispatcher } from "svelte";

    import Close from "svelte-material-icons/Close.svelte";

    import { Button, IconButton, SecondaryText } from "../..";

    const dispatch = createEventDispatcher();

    /** @type {HTMLDialogElement} */
    let dialog;

    let id;
    let name = "";
    let shortName = "";
    let hidden = false;
    let color;

    let disableColor = false;

    /**
     * @param {import("../../../js/settings").Shift | null | undefined} shift
     */
    export async function open(shift = null) {
        if (shift) {
            id = shift.id;
            name = shift.name;
            shortName = shift.shortName;
            hidden = !shift.visible;
            color = shift.color;
            disableColor = shift.color === "transparent";
        } else {
            id = undefined;
            name = "";
            shortName = "";
            hidden = false;
            color = undefined;
            disableColor = false;
        }

        dialog.showModal();
    }

    export async function close() {
        dialog.close();
    }
</script>

<style>
    dialog {
        width: 75%;
        max-width: 20rem;
    }
</style>

<dialog bind:this={dialog}>
    <article>
        <header>
            <h4>{id ? "Edit" : "New"} Shift</h4>
            <IconButton
                class="close-button"
                on:click={() => dispatch("close")}
            >
                <Close />
            </IconButton>
        </header>

        <section>
            <label>
                <SecondaryText>Shift name</SecondaryText>
                <input style="width: 100%;" type="text" bind:value={name} />
            </label>
        </section>

        <section>
            <label>
                <SecondaryText>Short shift name</SecondaryText>
                <input style="width: 100%;" type="text" bind:value={shortName} />
            </label>
        </section>

        <section><hr /></section>

        <section>
            <label>
                <input type="checkbox" bind:checked={hidden} />
                Hide the shift (short) name
            </label>
        </section>

        <section><hr /></section>

        <section>
            <label>
                <SecondaryText>Pick a background color</SecondaryText>
                <input style="width: 100%;" type="color" bind:value={color} disabled={disableColor} />
            </label>

            <div class="spacer"></div>

            <label>
                <input type="checkbox" bind:checked={disableColor} />
                Disable color
            </label>
        </section>

        <section><hr /></section>

        <footer>
            <Button
                color="primary"
                on:click={async () => {
                    dispatch("submit", {
                        id,
                        name,
                        shortName: shortName || name[0] || "",
                        color: disableColor ? "transparent" : color,
                        visible: !hidden,
                    });
                }}
            >
                OK
            </Button>
        </footer>
    </article>
</dialog>
