<script>
    /**
     * @type {any[]}
     */
    export let values = [];
</script>

<span>
    {#each values as value}
        <span {value} />
    {/each}
</span>
