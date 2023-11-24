/** @typedef {typeof __propDef.props}  HtmlSelectProps */
/** @typedef {typeof __propDef.events}  HtmlSelectEvents */
/** @typedef {typeof __propDef.slots}  HtmlSelectSlots */
export default class HtmlSelect extends SvelteComponent<{
    [x: string]: any;
    items?: import(".").SelectItem[];
    selected?: import(".").SelectItem;
}, {
    change: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type HtmlSelectProps = typeof __propDef.props;
export type HtmlSelectEvents = typeof __propDef.events;
export type HtmlSelectSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        items?: import(".").SelectItem[];
        selected?: import(".").SelectItem;
    };
    events: {
        change: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
