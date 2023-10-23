<script>
    import "./app.css";
    import { CSSBase, Button } from "./lib";
</script>

<svelte:head>
    <CSSBase auto />
</svelte:head>

<div class="container">
    <div class="row" style="width: 100%;">
        <Button
            class="col has-small-margin"
            variant="full"
            color="primary"
            noRipple
        >
            No Ripple
        </Button>

        <Button
            class="col has-small-margin"
            variant="full"
            color="primary"
            ripple={{ spreadDuration: "1s" }}
        >
            1s Spread Ripple Test
        </Button>

        <Button
            class="col has-margin"
            variant="full"
            color="primary"
            ripple={{ color: "green" }}
        >
            Green Ripple Test
        </Button>

        <Button class="col has-small-margin" variant="full" color="primary"
            >Ripple Test</Button
        >

        <Button class="col has-big-margin" variant="full" color="secondary"
            >Ripple Test</Button
        >

        <Button class="col has-small-margin" variant="full" color="destructive"
            >Ripple Test</Button
        >
    </div>
</div>
