/** @typedef {typeof __propDef.props}  DateProps */
/** @typedef {typeof __propDef.events}  DateEvents */
/** @typedef {typeof __propDef.slots}  DateSlots */
export default class Date extends SvelteComponent<{
    [x: string]: any;
    title?: string;
    invalid?: boolean;
    min?: string;
    max?: string;
    value?: string;
}, {
    change: Event;
    input: Event;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DateProps = typeof __propDef.props;
export type DateEvents = typeof __propDef.events;
export type DateSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        title?: string;
        invalid?: boolean;
        min?: string;
        max?: string;
        value?: string;
    };
    events: {
        change: Event;
        input: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
