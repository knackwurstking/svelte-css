/** @typedef {typeof __propDef.props}  LightProps */
/** @typedef {typeof __propDef.events}  LightEvents */
/** @typedef {typeof __propDef.slots}  LightSlots */
export default class Light extends SvelteComponent<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type LightProps = typeof __propDef.props;
export type LightEvents = typeof __propDef.events;
export type LightSlots = typeof __propDef.slots;
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
