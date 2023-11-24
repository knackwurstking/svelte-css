/** @typedef {typeof __propDef.props}  DrawerProps */
/** @typedef {typeof __propDef.events}  DrawerEvents */
/** @typedef {typeof __propDef.slots}  DrawerSlots */
export default class Drawer extends SvelteComponent<{
    [x: string]: any;
    open?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type DrawerProps = typeof __propDef.props;
export type DrawerEvents = typeof __propDef.events;
export type DrawerSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        open?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
