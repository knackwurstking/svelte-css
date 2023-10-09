<script>
    import DeleteOutline from "svelte-material-icons/DeleteOutline.svelte";

    import { createEventDispatcher } from "svelte";

    import Close from "svelte-material-icons/Close.svelte";

    import { Shift, Button, IconButton } from "../..";

    import * as settings from "../../../js/settings";

    const dispatch = createEventDispatcher();

    /** @type {HTMLElement} */
    let scrollContainer;

    /** @type {HTMLDialogElement} */
    let dialog;

    /**
     * @type {import("../../../js/settings").Shift[]}
     */
    let shifts = [];
    /**
     * @type {number[]}
     */
    let rhythm = [];
    $: rhythm && setTimeout(scrollToBottom, 250);

    async function scrollToBottom() {
        scrollContainer.scroll({
            top: scrollContainer.scrollHeight,
            behavior: "smooth",
        })
    }

    /**
     * @param {import("../../../js/settings").Shift[]} _shifts
     * @param {number[]} _rhythm
     */
    export async function open(_shifts, _rhythm) {
        shifts = _shifts;
        rhythm = _rhythm;
        dialog.showModal();
    }

    export async function close() {
        dialog.close();
    }
</script>

<style>
    figure {
        -moz-overflow-style: none;
        scrollbar-width: none;
    }

    figure::-webkit-scrollbar {
        display: none;
    }
</style>

<dialog bind:this={dialog} class="fullscreen">
    <article>
        <header>
            <h4>Shift Rhythm</h4>
            <IconButton
                class="close-button"
                on:click={() => dispatch("close")}
            >
                <Close />
            </IconButton>
        </header>

        <section
            style={`
                height: calc(100% - 7rem);
            `}
        >
            <section bind:this={scrollContainer} style="height: calc(100% - 4.5rem); overflow: auto;">
                <!-- TODO: auto scroll to bottom on shift add -->
                <table>
                    <thead>
                        <tr>
                            <th class="left">Name</th>
                            <th class="left">Short</th>
                            <th class="left">Color</th>
                            <th class="left"></th>
                        </tr>
                    </thead>

                    <tbody>
                        {#each rhythm as id, index}
                            {#if !!settings.getShift(id)}
                                {#await settings.getShift(id) then shift}
                                    <tr>
                                        <td class="left">{shift.name}</td>
                                        <td class="left" style="width: 4rem;">{shift.visible ? shift.shortName : ""}</td>
                                        <td class="left" style="color: {shift.color}; width: 6rem;">{shift.color}</td>
                                        <td class="right" style="width: 3rem;">
                                            <IconButton
                                                on:click={async () => {
                                                    rhythm = [
                                                        ...rhythm.slice(0, index),
                                                        ...rhythm.slice(index+1),
                                                    ];
                                                }}
                                            >
                                                <DeleteOutline />
                                            </IconButton>
                                        </td>
                                    </tr>
                                {/await}
                            {/if}
                        {/each}
                    </tbody>
                </table>
            </section>

            <section>
                <figure style="width: 100%;">
                    <div class="row">
                        {#each shifts as shift}
                            <div class="col" style="user-select: none;">
                                <Shift
                                    {...shift}
                                    on:click={() => rhythm = [...rhythm, shift.id]}
                                />
                            </div>
                        {/each}
                    </div>
                </figure>
            </section>
        </section>

        <footer>
            <Button
                color="primary"
                type="submit"
                on:click={() => dispatch("submit", rhythm)}
            >
               OK 
            </Button>
        </footer>
    </article>
</dialog>
