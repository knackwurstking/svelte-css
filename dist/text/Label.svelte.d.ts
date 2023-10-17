/** @typedef {typeof __propDef.props}  LabelProps */
/** @typedef {typeof __propDef.events}  LabelEvents */
/** @typedef {typeof __propDef.slots}  LabelSlots */
export default class Label extends SvelteComponent<{
    [x: string]: any;
    class?: string;
    primaryText?: string;
    secondaryText?: string;
    row?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    primaryText: {};
    secondaryText: {};
    default: {};
}> {
}
export type LabelProps = typeof __propDef.props;
export type LabelEvents = typeof __propDef.events;
export type LabelSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string;
        primaryText?: string;
        secondaryText?: string;
        row?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        primaryText: {};
        secondaryText: {};
        default: {};
    };
};
export {};
