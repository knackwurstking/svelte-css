/** @typedef {typeof __propDef.props}  OptionProps */
/** @typedef {typeof __propDef.events}  OptionEvents */
/** @typedef {typeof __propDef.slots}  OptionSlots */
export default class Option extends SvelteComponent<{
    [x: string]: any;
    value: string;
    label?: string;
}, {
    click: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type OptionProps = typeof __propDef.props;
export type OptionEvents = typeof __propDef.events;
export type OptionSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        value: string;
        label?: string;
    };
    events: {
        click: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
