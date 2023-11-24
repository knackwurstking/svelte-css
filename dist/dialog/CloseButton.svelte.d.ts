/** @typedef {typeof __propDef.props}  CloseButtonProps */
/** @typedef {typeof __propDef.events}  CloseButtonEvents */
/** @typedef {typeof __propDef.slots}  CloseButtonSlots */
export default class CloseButton extends SvelteComponent<{
    [x: string]: any;
}, {
    close: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CloseButtonProps = typeof __propDef.props;
export type CloseButtonEvents = typeof __propDef.events;
export type CloseButtonSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        close: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
