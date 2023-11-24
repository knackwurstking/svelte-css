/** @typedef {typeof __propDef.props}  GroupProps */
/** @typedef {typeof __propDef.events}  GroupEvents */
/** @typedef {typeof __propDef.slots}  GroupSlots */
export default class Group extends SvelteComponent<{
    [x: string]: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    title: {};
    default: {};
}> {
}
export type GroupProps = typeof __propDef.props;
export type GroupEvents = typeof __propDef.events;
export type GroupSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        title: {};
        default: {};
    };
};
export {};
