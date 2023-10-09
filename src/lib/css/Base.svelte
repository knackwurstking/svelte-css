<script>
    import "./main.css";

    import { CSSThemeDark, CSSThemeLight } from "./themes";

    /** @type {"light" | "dark"} */
    export let theme = "light";
</script>

<svelte:head>
    {#if theme === "light"}
        <CSSThemeLight />
    {:else if theme === "dark"}
        <CSSThemeDark />
    {/if}
</svelte:head>
