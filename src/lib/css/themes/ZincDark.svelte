<script>
    import { onMount } from "svelte";

    onMount(() => {
        const style = document.createElement("style");
        style.classList.add("theme");
        style.innerText = `
            :root {
                --bg: 240, 10%, 3.9%;
                --fg: 0, 0%, 98%;

                --accent: 240, 3.7%, 15.9%;
                --accent-foreground: 0, 0%, 98%;

                --card: 240, 10%, 3.9%;
                --card-fg: 0, 0%, 98%;

                --popover: 240, 10%, 3.9%;
                --popover-fg: 0, 0%, 98%;

                --primary: 0, 0%, 98%;
                --primary-fg: 240, 5.9%, 10%;

                --secondary: 240, 3.7%, 15.9%;
                --secondary-fg: 0, 0%, 98%;

                --muted: 240, 3.7%, 15.9%;
                --muted-fg: 240, 5%, 64.9%;

                --destructive: 0, 62.8%, 30.6%;
                --destructive-fg: 0, 0%, 98%;

                --border: 240, 3.7%, 15.9%;
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
