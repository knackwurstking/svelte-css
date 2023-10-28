<script>
    import { onMount } from "svelte";

    onMount(() => {
        const style = document.createElement("style");
        style.classList.add("theme");
        style.innerText = `
            :root {
                --background: 0, 0%, 100%;
                --foreground: 240, 10%, 3.9%;
                --card: 0, 0%, 100%;
                --card-foreground: 240, 10%, 3.9%;
                --popover: 0, 0%, 100%;;
                --popover-foreground: 240, 10%, 3.9%;
                --primary: 240, 5.9%, 10%;
                --primary-foreground: 0, 0%, 98%;
                --secondary: 240, 4.8%, 85.9%;
                --secondary-foreground: 240, 5.9%, 10%;
                --muted: 240, 4.8%, 95.9%;
                --muted-foreground: 240, 3.8%, 46.1%;
                --accent: 240, 4.8%, 95.9%;
                --accent-foreground: 240, 5.9%, 10%;
                --destructive: 0, 84.2%, 60.2%;
                --destructive-foreground: 0, 0%, 98%;
                --border: 240, 5.9%, 90%;
                --border-width: 1px;
                --radius: 0.5em;
                --spacing: 0.5em;
            }
        `;
        const toRemove = document.head.querySelector("style.theme");
        if (toRemove) document.head.removeChild(toRemove);
        document.head.append(style);
    });
</script>
