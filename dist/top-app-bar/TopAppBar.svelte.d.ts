/** @typedef {typeof __propDef.props}  TopAppBarProps */
/** @typedef {typeof __propDef.events}  TopAppBarEvents */
/** @typedef {typeof __propDef.slots}  TopAppBarSlots */
export default class TopAppBar extends SvelteComponent<{
    [x: string]: any;
    height?: string;
    uiContainer?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    left: {};
    center: {};
    right: {};
}> {
}
export type TopAppBarProps = typeof __propDef.props;
export type TopAppBarEvents = typeof __propDef.events;
export type TopAppBarSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        height?: string;
        uiContainer?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        left: {};
        center: {};
        right: {};
    };
};
export {};
