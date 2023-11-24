/** @typedef {typeof __propDef.props}  GridProps */
/** @typedef {typeof __propDef.events}  GridEvents */
/** @typedef {typeof __propDef.slots}  GridSlots */
export default class Grid extends SvelteComponent<{
    [x: string]: any;
    gap?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type GridProps = typeof __propDef.props;
export type GridEvents = typeof __propDef.events;
export type GridSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        gap?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
