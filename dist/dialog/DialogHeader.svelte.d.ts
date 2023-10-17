/** @typedef {typeof __propDef.props}  DialogHeaderProps */
/** @typedef {typeof __propDef.events}  DialogHeaderEvents */
/** @typedef {typeof __propDef.slots}  DialogHeaderSlots */
export default class DialogHeader extends SvelteComponent<{
    [x: string]: any;
    title: any;
    style?: string;
}, {
    close: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DialogHeaderProps = typeof __propDef.props;
export type DialogHeaderEvents = typeof __propDef.events;
export type DialogHeaderSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        title: any;
        style?: string;
    };
    events: {
        close: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
