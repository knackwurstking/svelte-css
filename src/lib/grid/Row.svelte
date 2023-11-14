<script>
    /** @type {string} */
    export let width = undefined;
    /** @type {string} */
    export let height = undefined;
    export let display = "flex";
    export let flexFlow = "row wrap";
    export let justifyContent = "flex-start";
</script>

<div
    style:width
    style:height
    style:display
    style:flex-flow={flexFlow}
    style:justify-content={justifyContent}
>
    <slot />
</div>
