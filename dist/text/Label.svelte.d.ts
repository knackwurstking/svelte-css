/** @typedef {typeof __propDef.props}  LabelProps */
/** @typedef {typeof __propDef.events}  LabelEvents */
/** @typedef {typeof __propDef.slots}  LabelSlots */
export default class Label extends SvelteComponent<{
    [x: string]: any;
    primary?: string;
    secondary?: string;
    useLabel?: boolean;
    row?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    primary: {};
    secondary: {};
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
        primary?: string;
        secondary?: string;
        useLabel?: boolean;
        row?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        primary: {};
        secondary: {};
        default: {};
    };
};
export {};
