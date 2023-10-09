<script>
    import { createEventDispatcher } from "svelte";

    import Close from "svelte-material-icons/Close.svelte";

    import { Button, IconButton, Label, PrimaryText } from "../../../components";

    import * as utils from "../../../js/utils";
    import SecondaryText from "../../text/SecondaryText.svelte";

    const dispatch = createEventDispatcher();

    /** @type {HTMLDialogElement} */
    let dialog;

    /** @type {number} */
    let year;
    /** @type {number} */
    let month;
    /** @type {string} */
    let dateString;
    /** @type {boolean} */
    let invalidYear = false;
    /** @type {boolean} */
    let invalidMonth = false;

    $: !dateString && year && month && setDate();
    $: dateString && parseDate();

    /**
     *
     * @param {number} _year
     * @param {number} _month
     */
    export async function open(_year, _month) {
        year = _year;
        month = _month + 1;
        dialog.showModal();
    }

    export async function close() {
        dialog.close();
    }

    async function setDate() {
        dateString = `${year}-${month}`;
    }

    async function parseDate() {
        const [y, m] = dateString.split("-", 2);
        year = parseInt(y, 10);
        month = parseInt(m, 10);
    }
</script>

<dialog bind:this={dialog}>
    <article>
        <header>
            <h4>Date Picker</h4>
            <IconButton
                class="close-button"
                on:click={() => dispatch("close")}
            >
                <Close />
            </IconButton>
        </header>

        {#if utils.isAndroid()}
            <section>
                <span style="width: 100%;">
                    <SecondaryText>Pick a Date</SecondaryText>
                    <input bind:value={dateString} style="width: 100%;" type="month" />
                </span>
            </section>
        {:else}
            <section>
                <Label
                    primaryText="Year"
                >
                    <input
                        style="width: 100%;"
                        type="number"
                        bind:value={year}
                        aria-invalid={invalidYear}
                        on:input={async () => {
                            if (year === null) {
                                invalidYear = true;
                            } else {
                                invalidYear = false;
                            }
                        }}
                    />
                </Label>
            </section>

            <section>
                <Label
                    primaryText="Month"
                >
                    <input
                        style="width: 100%;"
                        type="number"
                        min={1}
                        max={12}
                        bind:value={month}
                        aria-invalid={invalidMonth}
                        on:input={async () => {
                            if (month < 1 || month > 12 || month === null) {
                                invalidMonth = true;
                            } else {
                                invalidMonth = false;
                            }
                        }}
                    />
                </Label>
            </section>
        {/if}

        <footer>
            <Button
                color="primary"
                type="submit"
                on:click={async () => {
                    if (invalidMonth || invalidYear) return;
                    dispatch("submit", { year, month: month - 1 });
                }}
            >
                OK 
            </Button>
        </footer>
    </article>
</dialog>
