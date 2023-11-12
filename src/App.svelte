<script>
    import "./app.css";

    import {
        CSS,
        Button,
        Text,
        Input,
        Dialog,
    } from "./lib";
    import HtmlSelect from "./lib/input/html-select/HTMLSelect.svelte";

    let dialog;
</script>

<svelte:head>
    <CSS.Root auto />
</svelte:head>

<div class="container">
    <div class="row" style="width: 100%;">
        <Button.Root
            class="col has-small-margin"
            variant="full"
            color="primary"
            noRipple
        >
            No Ripple
        </Button.Root>

        <Button.Root
            class="col has-small-margin"
            variant="full"
            color="primary"
            ripple={{ spreadDuration: "1s" }}
        >
            1s Spread Ripple Test
        </Button.Root>

        <Button.Root
            class="col has-margin"
            variant="full"
            color="primary"
            ripple={{ color: "green" }}
        >
            Green Ripple Test
        </Button.Root>

        <Button.Root class="col has-small-margin" variant="full" color="primary">
            Ripple Test
        </Button.Root>

        <Button.Root class="col has-big-margin" variant="full" color="secondary">
            Ripple Test
        </Button.Root>

        <Button.Root class="col has-small-margin" variant="full" color="destructive">
            Ripple Test
        </Button.Root>
    </div>

    <br />

    <div class="row" style="justify-content: center;">
        <div class="col has-margin" style="max-width: 20rem;">
            <Text.Label
                primary="Checkbox"
                secondary="This is just a test"
                useLabel
                row
            >
                <input type="checkbox" checked />
            </Text.Label>
        </div>
    </div>

    <br />

    <div class="row" style="justify-content: center;">
        <div class="col has-margin" style="max-width: 20rem;">
            <Text.Label
                secondary="New select component test"
            >
                <Input.Select
                    items={[
                        { value: "option-1", label: "Option 1" },
                        { value: "option-2", label: "Option 2" },
                        { value: "option-3", label: "Option 3" },
                        { value: "option-4", label: "Option 4" },
                    ]}
                    selected={{ value: "option-1", label: "Option 1" }}
                    on:change={(ev) => {
                        /** @type {import("./lib/input/select").SelectItem} */
                        const item = ev.detail;
                        if (!item) return;

                        console.debug("selected", item);
                    }}
                />
            </Text.Label>
        </div>

        <div class="col has-margin" style="max-width: 20rem;">
            <Text.Label
                secondary="Always open"
            >
                <Input.Select
                    items={[
                        { value: "option-1", label: "Option 1" },
                        { value: "option-2", label: "Option 2" },
                        { value: "option-3", label: "Option 3" },
                        { value: "option-4", label: "Option 4" },
                    ]}
                    selected={{ value: "option-1", label: "Option 1" }}
                    alwaysOpen
                    on:change={(ev) => {
                        /** @type {import("./lib/input/select").SelectItem} */
                        const item = ev.detail;
                        if (!item) return;

                        console.debug("selected", item);
                    }}
                />
            </Text.Label>
        </div>
    </div>

    <br />

    <div class="row" style="justify-content: center;">
        <div class="col has-margin" style="max-width: 20rem;">
            <Text.Label
                secondary="HTMLSelect"
            >
                <Input.HTMLSelect
                    items={[
                        { value: "option-1", label: "Option 1" },
                        { value: "option-2", label: "Option 2" },
                        { value: "option-3", label: "Option 3" },
                        { value: "option-4", label: "Option 4" },
                    ]}
                    selected={{ value: "option-1", label: "Option 1" }}
                    on:change={(ev) => {
                        /** @type {import("./lib/input/select").SelectItem} */
                        const item = ev.detail;
                        if (!item) return;

                        console.debug("selected", item);
                    }}
                />
            </Text.Label>
        </div>
    </div>

    <br />

    <div class="row" style="justify-content: center;">
        <div class="col has-margin" style="max-width: 20rem;">
            <Input.Text
                title="Just some test input"
                placeholder="type something here..."
            />
        </div>
    </div>

    <br />

    <div class="row" style="justify-content: center;">
        <div class="group">
            <Button.Root variant="full" color="primary">
                Ripple Test
            </Button.Root>

            <Button.Root variant="full" color="secondary">
                Ripple Test
            </Button.Root>

            <Button.Root variant="full" color="destructive">
                Ripple Test
            </Button.Root>
        </div>
    </div>

    <br />

    <div class="row" style="justify-content: center;">
        <div class="group column">
            <Button.Root variant="full" color="primary">
                Ripple Test
            </Button.Root>

            <Button.Root variant="full" color="secondary">
                Ripple Test
            </Button.Root>

            <Button.Root variant="full" color="destructive">
                Ripple Test
            </Button.Root>
        </div>
    </div>

    <br />

    <div class="row" style="justify-content: center;">
        <Button.Root
            variant="ghost"
            color="primary"
            on:click={() => dialog.showModal()}
        >
            Modal Dialog
        </Button.Root>

        <Button.Root
            variant="outline"
            color="primary"
            on:click={() => dialog.show()}
        >
            Dialog
        </Button.Root>
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

    <div class="row has-big-padding" style="justify-content: center;">
        <Input.Slider
            min={25}
            max={125}
            value={50}
        />
    </div>

    <br />
</div>

<Dialog.Root bind:this={dialog}>
    <Dialog.Header
        title="Dialog Test"
        on:close={() => dialog.close()}
    />

    <section>
        Test Section ...
    </section>

    <Dialog.Footer>
        <Button.Root
            color="secondary"
            on:click={() => dialog.close()}
        >
            Cancel 
        </Button.Root>
        <Button.Root
            color="primary"
            on:click={() => dialog.close()}
        >
            OK
        </Button.Root>
    </Dialog.Footer>
</Dialog.Root>
