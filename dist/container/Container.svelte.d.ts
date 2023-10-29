/** @typedef {typeof __propDef.props}  ContainerProps */
/** @typedef {typeof __propDef.events}  ContainerEvents */
/** @typedef {typeof __propDef.slots}  ContainerSlots */
export default class Container extends SvelteComponent<{
    [x: string]: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ContainerProps = typeof __propDef.props;
export type ContainerEvents = typeof __propDef.events;
export type ContainerSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
