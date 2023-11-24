/** @typedef {typeof __propDef.props}  SecondaryProps */
/** @typedef {typeof __propDef.events}  SecondaryEvents */
/** @typedef {typeof __propDef.slots}  SecondarySlots */
export default class Secondary extends SvelteComponent<{
    [x: string]: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type SecondaryProps = typeof __propDef.props;
export type SecondaryEvents = typeof __propDef.events;
export type SecondarySlots = typeof __propDef.slots;
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
