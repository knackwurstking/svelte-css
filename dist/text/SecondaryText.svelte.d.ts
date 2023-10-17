/** @typedef {typeof __propDef.props}  SecondaryTextProps */
/** @typedef {typeof __propDef.events}  SecondaryTextEvents */
/** @typedef {typeof __propDef.slots}  SecondaryTextSlots */
export default class SecondaryText extends SvelteComponent<{
    [x: string]: any;
    style?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type SecondaryTextProps = typeof __propDef.props;
export type SecondaryTextEvents = typeof __propDef.events;
export type SecondaryTextSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        style?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
