/** @typedef {typeof __propDef.props}  CardProps */
/** @typedef {typeof __propDef.events}  CardEvents */
/** @typedef {typeof __propDef.slots}  CardSlots */
export default class Card extends SvelteComponent<{
    [x: string]: any;
    color?: string;
    backgroundColor?: string;
    noBorder?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type CardProps = typeof __propDef.props;
export type CardEvents = typeof __propDef.events;
export type CardSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: string;
        backgroundColor?: string;
        noBorder?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
