/** @typedef {typeof __propDef.props}  IconProps */
/** @typedef {typeof __propDef.events}  IconEvents */
/** @typedef {typeof __propDef.slots}  IconSlots */
export default class Icon extends SvelteComponent<{
    [x: string]: any;
    ripple?: Ripple.RippleOptions;
    click?: () => void;
    ghost?: boolean;
    color?: "foreground" | "primary" | "secondary" | "destructive";
    noRipple?: boolean;
}, {
    click: MouseEvent;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
    get click(): () => void;
}
export type IconProps = typeof __propDef.props;
export type IconEvents = typeof __propDef.events;
export type IconSlots = typeof __propDef.slots;
import { Ripple } from "..";
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        ripple?: import("../ripple").RippleOptions;
        click?: () => void;
        ghost?: boolean;
        color?: "foreground" | "primary" | "secondary" | "destructive";
        noRipple?: boolean;
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
