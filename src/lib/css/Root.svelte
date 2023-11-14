<script>
    import "normalize.css";

    import "./_css/_base.css";
    import "./_css/_containers.css";
    import "./_css/_grid.css";
    import "./_css/_table.css";
    import "./_css/_utils-is.css";
    import "./_css/_utils-no.css";

    import { onDestroy } from "svelte";

    import { ZincDark, ZincLight } from "./themes";

    /** @type {"light" | "dark"} */
    export let mode;

    /** @type {"zinc"} */
    export let variant = "zinc";

    /** @type {boolean} */
    export let auto = false;
    $: typeof auto === "boolean" && enableAutoThemeSwitcher();

    /** @type {MediaQueryList} */
    let media;

    function enableAutoThemeSwitcher() {
        if (auto) {
            if (window.matchMedia) {
                const media = window.matchMedia("(prefers-color-scheme: dark)");
                mode = media.matches ? "dark" : "light";
                media.addEventListener("change", onDarkChange);
            }
        } else {
            if (window.matchMedia && media) {
                media.removeEventListener("change", onDarkChange);
            }
        }
    }

    /** @param {MediaQueryListEvent} ev */
    const onDarkChange = (ev) => {
        if (ev.matches) {
            mode = "dark";
        } else {
            mode = "light";
        }
    };

    onDestroy(() => {
        if (media) media.removeEventListener("change", onDarkChange);
    });
</script>

<svelte:head>
    {#if variant+"-"+mode === "zinc-light"}
        <ZincLight />
    {:else if variant+"-"+mode === "zinc-dark"}
        <ZincDark />
    {/if}
</svelte:head>
