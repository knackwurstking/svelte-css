<script>
    import { createEventDispatcher } from "svelte";

    import Close from "svelte-material-icons/Close.svelte";

    import { Button, IconButton, SecondaryText } from "../../../components";

    import * as db from "../../../js/db";
    import * as utils from "../../../js/utils";

    const dispatch = createEventDispatcher();

    /** @type {HTMLDialogElement} */
    let dialog;

    /** @type {number} */
    let year;
    /** @type {number} */
    let month;
    /** @type {number} */
    let date;

    /** @type {import("../../../js/settings").Shift | null} */
    let defaultShift;
    /** @type {import("../../../js/settings").Shift | null} */
    let shift;
    /** @type {string} */
    let note;

    /** @type {string} */
    let current = "-1";

    /** @type {import("../../../js/settings").Settings} */
    let settings = JSON.parse(
        localStorage.getItem("settings") || '{ "shifts": [], "startDate": "", "shiftRhythm": []}'
    );

    /**
     * @param {number} _year
     * @param {number} _month
     * @param {number} _date
     */
    export async function open(_year, _month, _date) {
        year = _year;
        month = _month;
        date = _date;

        const data = (await db.get(year, month))[`${year}-${month}-${date}`];

        defaultShift = utils.calcShiftStep(new Date(year, month, date));

        shift = data?.shift || null;
        if (shift) current = settings.shifts.findIndex((s) => s.name === shift?.name).toString();
        else current = "-1";

        note = data?.note || "";

        dialog.showModal();
    }

    export async function close() {
        dialog.close();
    }
</script>

<style>
    textarea {
        resize: none;
    }
</style>

<dialog bind:this={dialog}>
    <article>
        {#if !!date}
            <header>
                <h4>
                    {year} / {
                        (month + 1).toString().padStart(2, "0")
                    } / {
                        date.toString().padStart(2, "0")
                    }
                </h4>
                <IconButton
                    class="close-button"
                    on:click={() => dispatch("close")}
                >
                    <Close />
                </IconButton>
            </header>
        {/if}

        <section class="row">
            <select bind:value={current} class="col">
                <option value="-1" selected={current === "-1"}>
                    (Default) {defaultShift?.name || ""}
                </option>

                {#each settings.shifts as shift, index}
                    <option value={index.toString()} selected={current === index.toString()}>
                        {shift.name}
                    </option>
                {/each}
            </select>
        </section>

        <section>
            <span style="width: 100%;">
                <SecondaryText>Note</SecondaryText>
                <textarea cols="30" rows="10" bind:value={note} />
            </span>
        </section>

        <footer>
            <Button
                color="primary"
                on:click={() =>
                    dispatch("submit", {
                        date: { year, month, date },
                        shift: settings.shifts.find((_s, i) => i.toString() === current) || null,
                        note: note,
                    })}
            >
                OK
            </Button>
        </footer>
    </article>
</dialog>
