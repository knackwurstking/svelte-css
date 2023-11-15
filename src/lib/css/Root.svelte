<script>
    import "normalize.css";

    import "./_css/base/main.css";
    import "./_css/base/fonts.css";
    import "./_css/base/colors.css";
    import "./_css/base/borders.css";

    import "./_css/ui/button.css";
    import "./_css/ui/card.css";
    import "./_css/ui/container.css";
    import "./_css/ui/dialog-footer.css";
    import "./_css/ui/dialog-header.css";
    import "./_css/ui/dialog.css";
    import "./_css/ui/drawer.css";
    import "./_css/ui/group.css";
    import "./_css/ui/icon-button.css";
    import "./_css/ui/text.css";

    import "./_css/utils/flex.css";
    import "./_css/utils/is.css";
    import "./_css/utils/no.css";

    import { onDestroy } from "svelte";

    import { ZincDark, ZincLight } from "./themes";

    /** @type {"light" | "dark"} */
    export let mode = undefined;

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
    {#if variant+"-"+(mode || "") === "zinc-light"}
        <ZincLight />
    {:else if variant+"-"+(mode || "") === "zinc-dark"}
        <ZincDark />
    {/if}
</svelte:head>
