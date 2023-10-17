/** @typedef {typeof __propDef.props}  DialogProps */
/** @typedef {typeof __propDef.events}  DialogEvents */
/** @typedef {typeof __propDef.slots}  DialogSlots */
export default class Dialog extends SvelteComponent<{
    [x: string]: any;
    close?: () => Promise<void>;
    style?: string;
    fullscreen?: boolean;
    show?: () => Promise<void>;
    showModal?: () => Promise<void>;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    header: {};
    default: {};
    footer: {};
}> {
    get show(): () => Promise<void>;
    get showModal(): () => Promise<void>;
    get close(): () => Promise<void>;
}
export type DialogProps = typeof __propDef.props;
export type DialogEvents = typeof __propDef.events;
export type DialogSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        close?: () => Promise<void>;
        style?: string;
        fullscreen?: boolean;
        show?: () => Promise<void>;
        showModal?: () => Promise<void>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        header: {};
        default: {};
        footer: {};
    };
};
export {};
