<script>
    import { onMount } from "svelte";

    onMount(() => {
        console.debug("mount light");
        const style = document.createElement("style");
        style.classList.add("theme");
        style.innerText = `
            :root {
                --bg: ;
                --fg: ;

                --accent: ;
                --accent-foreground: ;

                --card: ;
                --card-fg: ;

                --popover: ;
                --popover-fg: ;

                --primary: ;
                --primary-fg: ;

                --secondary: ;
                --secondary-fg: ;

                --muted: ;
                --muted-fg: ;

                --destructive: ;
                --destructive-fg: ;

                --border: ;
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
