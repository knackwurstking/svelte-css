/** @typedef {typeof __propDef.props}  TextProps */
/** @typedef {typeof __propDef.events}  TextEvents */
/** @typedef {typeof __propDef.slots}  TextSlots */
export default class Text extends SvelteComponent<{
    [x: string]: any;
    title?: string;
    invalid?: boolean;
    value?: string;
    placeholder?: string;
}, {
    change: Event;
    input: Event;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TextProps = typeof __propDef.props;
export type TextEvents = typeof __propDef.events;
export type TextSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        title?: string;
        invalid?: boolean;
        value?: string;
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
