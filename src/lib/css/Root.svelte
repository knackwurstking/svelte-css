<script>
    // TODO: handle props: [data-theme=light/dark] for: "zinc", ...
    // TODO: merge dark and light theme into one theme

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
    import "./_css/ui/flex-grid.css";
    import "./_css/ui/group.css";
    import "./_css/ui/icon-button.css";
    import "./_css/ui/text.css";

    import "./_css/utils/flex.css";
    import "./_css/utils/has.css";
    import "./_css/utils/is.css";
    import "./_css/utils/no.css";

    import { onDestroy } from "svelte";

    import { Zinc } from "./themes";

    /** @type {"light" | "dark" | undefined | null} */
    export let mode = undefined;
    $: !!mode && setMode();

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
    async function onDarkChange(ev) {
        if (ev.matches) {
            mode = "dark";
        } else {
            mode = "light";
        }
    };

    async function setMode() {
        document.body.setAttribute("data-theme", mode);
    }

    onDestroy(() => {
        if (media) media.removeEventListener("change", onDarkChange);
    });
</script>

<svelte:head>
    {#if variant === "zinc"}
        <Zinc />
    {/if}
</svelte:head>
