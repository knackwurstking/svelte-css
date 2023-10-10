/** @typedef {typeof __propDef.props}  DarkProps */
/** @typedef {typeof __propDef.events}  DarkEvents */
/** @typedef {typeof __propDef.slots}  DarkSlots */
export default class Dark extends SvelteComponent<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DarkProps = typeof __propDef.props;
export type DarkEvents = typeof __propDef.events;
export type DarkSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
