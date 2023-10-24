/** @typedef {typeof __propDef.props}  GroupProps */
/** @typedef {typeof __propDef.events}  GroupEvents */
/** @typedef {typeof __propDef.slots}  GroupSlots */
export default class Group extends SvelteComponent<{
    column?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type GroupProps = typeof __propDef.props;
export type GroupEvents = typeof __propDef.events;
export type GroupSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        column?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
