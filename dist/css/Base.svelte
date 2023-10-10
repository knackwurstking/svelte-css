<script>
    import { onDestroy } from "svelte";
    import "./main.css";

    import { CSSThemeDark, CSSThemeLight } from "./themes";

    /** @type {"light" | "dark"} */
    export let theme = "light";
    /** @type {boolean} */
    export let auto = false;
    $: auto && enableAutoThemeSwitcher();

    /** @type {MediaQueryList} */
    let media;

    function enableAutoThemeSwitcher() {
        if (auto) {
            if (window.matchMedia) {
                const media = window.matchMedia("(prefers-color-scheme: dark)");
                theme = media.matches ? "dark" : "light";
                media.addEventListener("change", onDarkChange);
            }
        }
    }

    /** @param {MediaQueryListEvent} ev */
    const onDarkChange = (ev) => {
        if (ev.matches) {
            theme = "dark";
        } else {
            theme = "light";
        }
    };

    onDestroy(() => {
        if (media) media.removeEventListener("change", onDarkChange);
    });
</script>

<svelte:head>
    {#if theme === "light"}
        <CSSThemeLight />
    {:else if theme === "dark"}
        <CSSThemeDark />
    {/if}
</svelte:head>
