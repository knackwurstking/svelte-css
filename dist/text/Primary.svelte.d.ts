/** @typedef {typeof __propDef.props}  PrimaryProps */
/** @typedef {typeof __propDef.events}  PrimaryEvents */
/** @typedef {typeof __propDef.slots}  PrimarySlots */
export default class Primary extends SvelteComponent<{
    [x: string]: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type PrimaryProps = typeof __propDef.props;
export type PrimaryEvents = typeof __propDef.events;
export type PrimarySlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
