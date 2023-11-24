/** @typedef {typeof __propDef.props}  HeaderProps */
/** @typedef {typeof __propDef.events}  HeaderEvents */
/** @typedef {typeof __propDef.slots}  HeaderSlots */
export default class Header extends SvelteComponent<{
    [x: string]: any;
    title: any;
}, {
    close: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type HeaderProps = typeof __propDef.props;
export type HeaderEvents = typeof __propDef.events;
export type HeaderSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        title: any;
    };
    events: {
        close: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
