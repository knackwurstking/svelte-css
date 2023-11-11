<script>
    import { onMount } from "svelte";

    onMount(() => {
        const style = document.createElement("style");
        style.classList.add("theme");
        style.innerText = `
            :root {
                --hsl-color: 240;

                --bg: 0, 0%, 100%;
                --fg: var(--hsl-color), 10%, 6%;

                --bg2: var(--hsl-color), 0%, 88%;
                --fg2: var(--hsl-color), 10%, 12%;

                --primary: var(--hsl-color), 6%, 10%;
                --primary-fg: var(--hsl-color), 0%, 98%;

                --secondary: var(--hsl-color), 5%, 86%;
                --secondary-fg: var(--hsl-color), 6%, 10%;

                --muted: var(--hsl-color), 5%, 96%;
                --muted-fg: var(--hsl-color), 4%, 46%;

                --destructive: 0, 84.2%, 60.2%;
                --destructive-fg: 0, 0%, 98%;

                --border: var(--hsl-color), 6%, 90%;
                --border-width: .1em;
                --border-style: solid;

                --font-size: calc(15px + 0.390625vw);
                --font-family: "Fira Sans", system-ui, -apple-system, sans-serif;
                --font-family-mono: "Fira Mono", monospace;
                --radius: 0.25em;
                --spacing: 0.5em;

                --debug: ;   /* TODO: yellow hsl */
                --info: ;    /* TODO: yellow hsl */
                --warning: ; /* TODO: yellow hsl */
                --error: ;   /* TODO: yellow hsl */
            }
        `;
        const toRemove = document.head.querySelector("style.theme");
        if (toRemove) document.head.removeChild(toRemove);
        document.head.insertBefore(style, document.head.querySelector("style"));
    });
</script>
