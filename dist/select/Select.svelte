<script>
    /**
     * @type {any[]}
     */
    export let values = [];
</script>

<span>
    {#each values as value}
        <slot {value} />
    {/each}
</span>
