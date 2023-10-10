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
                --color-primary-hover: hsl(105, 65%, 60%);
                --color-primary-hover-alpha: hsla(105, 50%, 50%, .25);
                --color-primary-active: hsl(105, 75%, 70%);
                --color-primary-active-alpha: hsla(105, 50%, 50%, .4);

                --color-secondary: hsl(240, 50%, 50%);
                --color-secondary-hover: hsl(240, 50%, 60%);
                --color-secondary-hover-alpha: hsla(240, 50%, 50%, .25);
                --color-secondary-active: hsl(240, 50%, 70%);
                --color-secondary-active-alpha: hsla(240, 50%, 50%, .4);

                --color-grey: hsl(0, 0%, 70%);
                --color-grey-hover: hsl(0, 0%, 55%);
                --color-grey-hover-alpha: hsla(0, 0%, 70%, .25);
                --color-grey-active: hsl(0, 0%, 45%);
                --color-grey-active-alpha: hsla(0, 0%, 70%, .6);

                --color-primary-text: hsla(105, 50%, 50%, .85);
                --color-secondary-text: hsla(240, 50%, 50%, .85);

                --color-error: hsl(0, 100%, 50%);
                --color-success: hsl(120, 100%, 50%);

                --border-radius: 5px;
                --border-width: 1px;
                --border-color: var(--color-grey-active-alpha);

                --spacing: 0.5rem;
            }
        `;
        const toRemove = document.head.querySelector("style.theme");
        if (toRemove) document.head.removeChild(toRemove);
        document.head.append(style);
    });
</script>
