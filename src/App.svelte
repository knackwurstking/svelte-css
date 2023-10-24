<script>
    import "./app.css";
    import {
        CSSBase,
        Button,
        Label,
        Select,
        Group
    } from "./lib";
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

    <br />

    <div class="row" style="justify-content: center;">
        <div class="col has-margin" style="max-width: 20rem;">
            <Label
                primaryText="Checkbox"
                secondaryText="This is just a test"
                useLabel
                row
            >
                <input type="checkbox" checked />
            </Label>
        </div>
    </div>

    <br />

    <div class="row" style="justify-content: center;">
        <div class="col has-margin" style="max-width: 20rem;">
            <Label
                secondaryText="New select component test"
            >
                <Select
                    items={[
                        { value: "option-1", label: "Option 1" },
                        { value: "option-2", label: "Option 2" },
                        { value: "option-3", label: "Option 3" },
                        { value: "option-4", label: "Option 4" },
                    ]}
                    selected={{ value: "option-1", label: "Option 1" }}
                    on:change={(ev) => {
                        /** @type {import("./lib/select").SelectItem} */
                        const item = ev.detail;
                        if (!item) return;

                        console.debug("selected", item);
                    }}
                />
            </Label>
        </div>

        <div class="col has-margin" style="max-width: 20rem;">
            <Label
                secondaryText="Always open"
            >
                <Select
                    items={[
                        { value: "option-1", label: "Option 1" },
                        { value: "option-2", label: "Option 2" },
                        { value: "option-3", label: "Option 3" },
                        { value: "option-4", label: "Option 4" },
                    ]}
                    selected={{ value: "option-1", label: "Option 1" }}
                    alwaysOpen
                    on:change={(ev) => {
                        /** @type {import("./lib/select").SelectItem} */
                        const item = ev.detail;
                        if (!item) return;

                        console.debug("selected", item);
                    }}
                />
            </Label>
        </div>
    </div>

    <br />

    <div class="row" style="justify-content: center;">
        <div class="col has-margin" style="max-width: 20rem;">
            <Label
                secondaryText="Test input"
            >
                <input value="Just some test input" />
            </Label>
        </div>
    </div>

    <br />

    <div class="row" style="justify-content: center;">
        <Group>
            <Button variant="full" color="primary">
                Ripple Test
            </Button>

            <Button variant="full" color="secondary">
                Ripple Test
            </Button>

            <Button variant="full" color="destructive">
                Ripple Test
            </Button>
        </Group>
    </div>

    <br />

    <div class="row" style="justify-content: center;">
        <Group column>
            <Button variant="full" color="primary">
                Ripple Test
            </Button>

            <Button variant="full" color="secondary">
                Ripple Test
            </Button>

            <Button variant="full" color="destructive">
                Ripple Test
            </Button>
        </Group>
    </div>

    <br />

    <div class="row" style="justify-content: center;">
        <pre>
package main

func main() dsfj
    Just a test code block
kfals</pre>
    </div>

    <br />
</div>
