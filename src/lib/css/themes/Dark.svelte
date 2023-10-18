<script>
    import { onMount } from "svelte";

    onMount(() => {
        const style = document.createElement("style");
        style.innerText = `
            :root {
                --color-bg-color: hsl(205, 10%, 0%);
                --color-bg-input: hsl(205, 0%, 5%);
                --color-text: hsla(240, 10%, 90%, .9);

                --color-primary: hsl(105, 50%, 50%);
                --color-primary-hover: hsl(105, 65%, 60%);
                --color-primary-hover-alpha: hsla(105, 50%, 50%, .25);
                --color-primary-active: hsl(105, 75%, 70%);
                --color-primary-active-alpha: hsla(105, 50%, 50%, .4);

                --color-secondary: var(--color-grey);
                --color-secondary-hover: var(--color-grey-hover);
                --color-secondary-hover-alpha: var(--color-grey-hover-alpha);
                --color-secondary-active: var(--color-grey-active);
                --color-secondary-active-alpha: var(--color-grey-active-alpha);

                --color-grey: hsl(0, 0%, 30%);
                --color-grey-hover: hsl(0, 0%, 45%);
                --color-grey-hover-alpha: hsla(0, 0%, 30%, .25);
                --color-grey-active: hsl(0, 0%, 55%);
                --color-grey-active-alpha: hsla(0, 0%, 30%, .6);

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
