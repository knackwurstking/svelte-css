<script>
    import { onMount } from "svelte";

    onMount(() => {
        const style = document.createElement("style");
        style.classList.add("theme");
        style.innerText = `
            :root {
                --color-bg-color: hsl(240, 10%, 95%);
                --color-bg-input: hsl(240, 0%, 100%);
                --color-text: hsla(240, 10%, 10%, .9);

                --color-primary: hsl(105, 50%, 50%);
                --color-primary-hover: hsl(105, 60%, 60%);
                --color-primary-hover-alpha: hsla(105, 50%, 50%, .25);
                --color-primary-active: hsl(105, 70%, 70%);
                --color-primary-active-alpha: hsla(105, 50%, 50%, .6);

                --color-secondary: hsl(240, 13%, 42%);
                --color-secondary-hover: hsl(240, 13%, 62%);
                --color-secondary-hover-alpha: hsla(240, 13%, 42%, .25);
                --color-secondary-active: hsl(240, 13%, 72%);
                --color-secondary-active-alpha: hsla(240, 13%, 42%, .6);

                --color-grey: hsl(0, 0%, 70%);
                --color-grey-hover: hsl(0, 0%, 60%);
                --color-grey-hover-alpha: hsla(0, 0%, 70%, .25);
                --color-grey-active: hsl(0, 0%, 50%);
                --color-grey-active-alpha: hsla(0, 0%, 70%, .6);

                --color-error: hsl(0, 100%, 50%);
                --color-error-hover-alpha: hsla(0, 100%, 50%, .25);
                --color-error-active-alpha: hsla(0, 100%, 50%, .6);

                --color-success: hsl(120, 100%, 50%);
                --color-success-hover-alpha: hsla(120, 100%, 50%, .25);
                --color-success-active-alpha: hsla(120, 100%, 50%, .6);

                --border-radius: 2pt;
                --border-width: 1px;
                --border-color: var(--color-grey-active-alpha);

                --spacing: 0.5em;
            }
        `;
        const toRemove = document.head.querySelector("style.theme");
        if (toRemove) document.head.removeChild(toRemove);
        document.head.append(style);
    });
</script>
