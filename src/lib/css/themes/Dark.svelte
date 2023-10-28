<script>
    import { onMount } from "svelte";

    onMount(() => {
        const style = document.createElement("style");
        style.innerText = `
            :root {
                --background: 240, 10%, 3.9%;
                --foreground: 0, 0%, 98%;
                --card: 240, 10%, 3.9%;
                --card-foreground: 0, 0%, 98%;
                --popover: 240, 10%, 3.9%;
                --popover-foreground: 0, 0%, 98%;
                --primary: 0, 0%, 98%;
                --primary-foreground: 240, 5.9%, 10%;
                --secondary: 240, 3.7%, 15.9%;
                --secondary-foreground: 0, 0%, 98%;
                --muted: 240, 3.7%, 15.9%;
                --muted-foreground: 240, 5%, 64.9%;
                --accent: 240, 3.7%, 15.9%;
                --accent-foreground: 0, 0%, 98%;
                --destructive: 0, 62.8%, 30.6%;
                --destructive-foreground: 0, 0%, 98%;
                --border: 240, 3.7%, 15.9%;
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
