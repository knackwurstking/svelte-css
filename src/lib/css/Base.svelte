<script>
    import "./main.css";

    import { Dark, Light } from "./themes";

    /** @type {"light" | "dark"} */
    export let theme = "light";
</script>

<svelte:head>
    {#if theme === "light"}
        <Light />
    {:else if theme === "dark"}
        <Dark />
    {/if}
</svelte:head>
