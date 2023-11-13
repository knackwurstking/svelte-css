<script>
    import { onMount } from "svelte";

    onMount(() => {
        const style = document.createElement("style");
        style.classList.add("theme");
        style.innerText = `
            :root {
                --hsl-color: 240;

                --bg: var(--hsl-color), 10%, 6%;
                --fg: 0, 0%, 98%;

                --primary: 0, 0%, 98%;
                --primary-fg: var(--hsl-color), 10%, 6%;

                --secondary: var(--hsl-color), 4%, 12%;
                --secondary-fg: 0, 0%, 98%;

                --muted: var(--hsl-color), 4%, 15%;
                --muted-foreground: var(--hsl-color), 5%, 65%;

                --destructive: 0, 63%, 30.6%;
                --destructive-foreground: 0, 0%, 98%;

                --border: var(--hsl-color), 4%, 16%;
                --border-width: 1px;
                --border-style: solid;

                --font-size: calc(15px + 0.390625vw);
                --font-family: "Fira Sans", system-ui, -apple-system, sans-serif;
                --font-family-mono: "Fira Mono", monospace;
                --radius: 0.25rem;
                --spacing: .5em;

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
