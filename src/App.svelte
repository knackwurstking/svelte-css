<script>
    import { CSSBase, Container, Row, Select } from "./lib";
</script>

<svelte:head>
    <CSSBase auto />
</svelte:head>

<Container>
    <Row style="width: 8rem;">
        <Select
            items={[
                { value: "one", label: "One" },
                { value: "two", label: "Two" },
                { value: "three", label: "Three" },
                { value: "four" },
            ]}
            on:change={({ detail }) => {
                console.debug("value:", detail);
            }}
        />
    </Row>
</Container>
