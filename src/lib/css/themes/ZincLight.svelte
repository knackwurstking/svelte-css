<script>
    import { onMount } from "svelte";

    onMount(() => {
        const style = document.createElement("style");
        style.classList.add("theme");
        style.innerText = `
            :root {
                --bg: 0, 0%, 100%;
                --fg: 240, 10%, 3.9%;

                --card: 0, 0%, 100%;
                --card-fg: 240, 10%, 3.9%;

                --primary: 240, 5.9%, 10%;
                --primary-fg: 0, 0%, 98%;

                --secondary: 240, 4.8%, 95.9%;
                --secondary-fg: 240, 5.9%, 10%;

                --muted: 240, 4.8%, 95.9%;
                --muted-fg: 240, 3.8%, 46.1%; 

                --destructive: 0, 72.22%, 50.59%;
                --destructive-fg: 0, 0%, 98%;

                --border: 240, 5.9%, 90%;
                --border-width: 1px;
                --border-style: solid;

                --font-size: calc(15px + 0.390625vw);

                --font-family-base: "Arial", sans-serif;
                --font-family-heading: "Times New Roman", serif;
                --font-family-input: "Courier New", monospace;

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
