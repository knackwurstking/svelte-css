/** @typedef {typeof __propDef.props}  GroupItemProps */
/** @typedef {typeof __propDef.events}  GroupItemEvents */
/** @typedef {typeof __propDef.slots}  GroupItemSlots */
export default class GroupItem extends SvelteComponent<{
    [x: string]: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type GroupItemProps = typeof __propDef.props;
export type GroupItemEvents = typeof __propDef.events;
export type GroupItemSlots = typeof __propDef.slots;
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
