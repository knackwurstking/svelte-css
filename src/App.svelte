<script>
    import { CSSBase, Container, Row, Col, Button } from "./lib";
</script>

<svelte:head>
    <CSSBase auto />
</svelte:head>

<Container style="position: absolute; top: 90%; left: 0%;">
    <Row style="width: 100%;">
        <Col>
            <Button variant="full" color="primary" noRipple>No Ripple</Button>
            <Button
                variant="full"
                color="primary"
                ripple={{ color: "hsl(var(--primary))" }}
            >
                Ripple Test
            </Button>
            <Button variant="full" color="primary">Ripple Test</Button>
            <Button variant="full" color="secondary">Ripple Test</Button>
            <Button variant="full" color="destructive">Ripple Test</Button>
        </Col>
    </Row>
</Container>

<style>
    :global(html, body, #app) {
        width: 100%;
        height: 100%;
    }
</style>
