/** @typedef {typeof __propDef.props}  BaseProps */
/** @typedef {typeof __propDef.events}  BaseEvents */
/** @typedef {typeof __propDef.slots}  BaseSlots */
export default class Base extends SvelteComponent<{
    theme?: "light" | "dark";
    auto?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BaseProps = typeof __propDef.props;
export type BaseEvents = typeof __propDef.events;
export type BaseSlots = typeof __propDef.slots;
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
