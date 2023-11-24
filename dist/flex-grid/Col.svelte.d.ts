/** @typedef {typeof __propDef.props}  ColProps */
/** @typedef {typeof __propDef.events}  ColEvents */
/** @typedef {typeof __propDef.slots}  ColSlots */
export default class Col extends SvelteComponent<{
    [x: string]: any;
    flex?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ColProps = typeof __propDef.props;
export type ColEvents = typeof __propDef.events;
export type ColSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        flex?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
