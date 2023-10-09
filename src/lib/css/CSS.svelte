<script>
    // TODO: how to hande the theme (light/dark) files
    import "./main.css";

    /** @type {"light" | "dark"} */
    export let theme = "light";
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="./themes/light.css"
        media="(prefers-color-scheme: light)"
    />
    <link
        rel="stylesheet"
        href="./themes/dark.css"
        media="screen and (prefers-color-scheme: dark)"
    />
</svelte:head>
