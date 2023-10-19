<!--script>
    import { CSSBase, Container, Row, Select } from "./lib";
</script>

<svelte:head>
    <CSSBase auto />
</svelte:head>

<Container style="position: absolute; top: 90%; left: 0%;">
    <Row style="width: 8rem;">
        <Select
            items={[
                { value: "one", label: "One" },
                { value: "two", label: "Two" },
                { value: "three", label: "Three" },
                { value: "four" },
            ]}
            optionsOnTop
            on:change={({ detail }) => {
                console.debug("value:", detail);
            }}
        />
    </Row>
</Container>

<style>
    :global(html, body, #app) {
        width: 100%;
        height: 100%;
    }
</style-->
