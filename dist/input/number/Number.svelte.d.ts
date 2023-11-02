/** @typedef {typeof __propDef.props}  NumberProps */
/** @typedef {typeof __propDef.events}  NumberEvents */
/** @typedef {typeof __propDef.slots}  NumberSlots */
export default class Number extends SvelteComponent<{
    [x: string]: any;
    title?: string;
    invalid?: boolean;
    min?: number;
    max?: number;
    value?: number;
    placeholder?: string;
}, {
    change: Event;
    input: Event;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type NumberProps = typeof __propDef.props;
export type NumberEvents = typeof __propDef.events;
export type NumberSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        title?: string;
        invalid?: boolean;
        min?: number;
        max?: number;
        value?: number;
        placeholder?: string;
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
