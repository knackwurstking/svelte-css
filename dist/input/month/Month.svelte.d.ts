/** @typedef {typeof __propDef.props}  MonthProps */
/** @typedef {typeof __propDef.events}  MonthEvents */
/** @typedef {typeof __propDef.slots}  MonthSlots */
export default class Month extends SvelteComponent<{
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
export type MonthProps = typeof __propDef.props;
export type MonthEvents = typeof __propDef.events;
export type MonthSlots = typeof __propDef.slots;
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
