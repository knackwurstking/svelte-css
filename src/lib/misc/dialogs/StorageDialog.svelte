<script>
    import { createEventDispatcher } from "svelte";

    import DeleteOutline from "svelte-material-icons/DeleteOutline.svelte";
    import Close from "svelte-material-icons/Close.svelte";

    import { IconButton } from "../../../components";

    import * as db from "../../../js/db";

    const dispatch = createEventDispatcher();

    let dialog

    /** @type {number} */
    let year;
    /** @type {number} */
    let month;

    /**
     *
     * @type {{
     *  key: string;
     *  shift: import("../../../js/settings").Shift | null;
     *  note: string;
     * }[]}
     */
    let data;

    async function loadData() {
        data = [];
        for (let [key, value] of Object.entries(await db.get(year, month))) {
            data.push({
                key,
                ...value,
            });
        }
        data = data;
    }

    /**
     * @param {number} _year
     * @param {number} _month
     */
    export async function open(_year, _month) {
        year = _year;
        month = _month;

        await loadData();

        dialog.showModal();
    }

    export async function close() {
        dialog.close();
    }
</script>

<style>
    tr > *:nth-child(1) {
        width: 2.5rem;
    }

    tr > *:nth-child(2) {
        width: 7.5rem;
    }

    tr > *:nth-child(4) {
        width: 3rem;
    }
</style>

<dialog bind:this={dialog} class="fullscreen">
    <article>
        <header>
            <h4>Data: {year}/{(month + 1).toString().padStart(2, "0")}</h4>
            <IconButton
                class="close-button"
                on:click={() => dispatch("close")}
            >
                <Close />
            </IconButton>
        </header>

        <section style="height: calc(100% - 6rem); overflow-y: auto; padding-left: 0; padding-right: 0;">
            <figure style="width: 100%;">
                <table>
                    <thead>
                        <tr>
                            <th class="left">Day</th>
                            <th class="left">Shift</th>
                            <th class="left">Note</th>
                            <th class="right"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {#if !!data}
                            {#each data.sort( (a, b) => (parseInt(a.key.split("-", 3)[2], 10) > parseInt(b.key.split("-", 3)[2], 10) ? 1 : -1) ) as item}
                                <tr>
                                    <td class="left"><code>{item.key.split("-", 3)[2]}</code></td>
                                    <td class="left"><code>{item.shift?.name || null}</code></td>
                                    <td class="left"><code>{item.note || ""}</code></td>
                                    <td class="right">
                                        <IconButton
                                            on:click={async () => {
                                                if (
                                                    window.confirm(
                                                        `Delete data for "${year}/${month+1}/${item.key.split("-", 3)[2]}" ?`
                                                    )
                                                ) {
                                                    await db.removeData(year, month, item.key);
                                                    await loadData();
                                                }
                                            }}
                                        >
                                            <DeleteOutline />
                                        </IconButton>
                                    </td>
                                </tr>
                            {/each}
                        {/if}
                    </tbody>
                </table>
            </figure>
        </section>
    </article>
</dialog>
