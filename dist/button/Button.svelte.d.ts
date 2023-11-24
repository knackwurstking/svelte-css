/** @typedef {typeof __propDef.props}  ButtonProps */
/** @typedef {typeof __propDef.events}  ButtonEvents */
/** @typedef {typeof __propDef.slots}  ButtonSlots */
export default class Button extends SvelteComponent<{
    [x: string]: any;
    ripple?: Ripple.RippleOptions;
    color?: "foreground" | "primary" | "secondary" | "destructive";
    variant?: "full" | "outline" | "ghost";
    noRipple?: boolean;
    active?: boolean;
}, {
    click: MouseEvent;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ButtonProps = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
import { Ripple } from "..";
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        ripple?: import("../ripple").RippleOptions;
        color?: "foreground" | "primary" | "secondary" | "destructive";
        variant?: "full" | "outline" | "ghost";
        noRipple?: boolean;
        active?: boolean;
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
