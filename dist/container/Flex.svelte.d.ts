/** @typedef {typeof __propDef.props}  FlexProps */
/** @typedef {typeof __propDef.events}  FlexEvents */
/** @typedef {typeof __propDef.slots}  FlexSlots */
export default class Flex extends SvelteComponent<{
    [x: string]: any;
    height?: string;
    width?: string;
    justify?: "center" | "flex-start" | "flex-end";
    align?: "center" | "flex-start" | "flex-end";
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type FlexProps = typeof __propDef.props;
export type FlexEvents = typeof __propDef.events;
export type FlexSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        height?: string;
        width?: string;
        justify?: "center" | "flex-start" | "flex-end";
        align?: "center" | "flex-start" | "flex-end";
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
