<script>
    import { onMount } from "svelte";

    onMount(() => {
        const style = document.createElement("style");
        style.classList.add("theme");
        style.innerText = `
            :root {
                --bg: 142.1, 14.3%, 4.1%;
                --fg: 0, 0%, 95%;

                --accent: 142.1, 6.5%, 15.1%;
                --accent-fg: 0, 0%, 98%;

                --card: 142.1, 9.8%, 10%;
                --card-foreground: 0, 0%, 95%;

                --popover: 0, 0%, 9%;
                --popover-fg: 0, 0%, 95%;

                --primary: 142.1, 70.6%, 45.3%;
                --primary-fg: 144.9, 80.4%, 10%;

                --secondary: 240, 3.7%, 15.9%;
                --secondary-fg: 0, 0%, 98%;

                --muted: 0, 0%, 15%;
                --muted-fg: 240, 5%, 64.9%;

                --destructive: 0, 62.8%, 30.6%;
                --destructive-fg: 0, 85.7%, 97.3%;

                --border: 142.1, 3.7%, 15.9%;
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
