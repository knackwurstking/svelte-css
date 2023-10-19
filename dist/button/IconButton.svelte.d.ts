/** @typedef {typeof __propDef.props}  IconButtonProps */
/** @typedef {typeof __propDef.events}  IconButtonEvents */
/** @typedef {typeof __propDef.slots}  IconButtonSlots */
export default class IconButton extends SvelteComponent<{
    [x: string]: any;
    color?: "primary" | "secondary" | "destructive";
}, {
    click: MouseEvent;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type IconButtonProps = typeof __propDef.props;
export type IconButtonEvents = typeof __propDef.events;
export type IconButtonSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: "primary" | "secondary" | "destructive";
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
