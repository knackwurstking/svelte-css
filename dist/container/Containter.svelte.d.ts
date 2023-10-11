/** @typedef {typeof __propDef.props}  ContainterProps */
/** @typedef {typeof __propDef.events}  ContainterEvents */
/** @typedef {typeof __propDef.slots}  ContainterSlots */
export default class Containter extends SvelteComponent<{
    [x: string]: any;
    class?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ContainterProps = typeof __propDef.props;
export type ContainterEvents = typeof __propDef.events;
export type ContainterSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
