/** @typedef {typeof __propDef.props}  RootProps */
/** @typedef {typeof __propDef.events}  RootEvents */
/** @typedef {typeof __propDef.slots}  RootSlots */
export default class Root extends SvelteComponent<{
    theme?: "light" | "dark";
    auto?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type RootProps = typeof __propDef.props;
export type RootEvents = typeof __propDef.events;
export type RootSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        theme?: "light" | "dark";
        auto?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
