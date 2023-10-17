<script>
    import "./_css/_base.css";
    import "./_css/_grid.css";
    import "./_css/_containers.css";
    import "./_css/_table.css";
    import "./_css/_utils.css";

    import { onDestroy } from "svelte";

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
