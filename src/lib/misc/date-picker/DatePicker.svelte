<script>
    import { createEventDispatcher } from "svelte";

    import { Button } from "../../button";

    const dispatch = createEventDispatcher();

    /** @type {Date} */
    export let currentDate;
</script>

<Button
    {...$$restProps}

    color="primary"
    variant="outline"

    on:click={() => {
        dispatch("click", { year: currentDate.getFullYear(), month: currentDate.getMonth() });
    }}
>
    {currentDate.getFullYear()} / {(currentDate.getMonth() + 1).toString().padStart(2, "0")}
</Button>
