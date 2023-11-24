/** @typedef {typeof __propDef.props}  ZincProps */
/** @typedef {typeof __propDef.events}  ZincEvents */
/** @typedef {typeof __propDef.slots}  ZincSlots */
export default class Zinc extends SvelteComponent<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ZincProps = typeof __propDef.props;
export type ZincEvents = typeof __propDef.events;
export type ZincSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
