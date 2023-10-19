/** @typedef {typeof __propDef.props}  SelectProps */
/** @typedef {typeof __propDef.events}  SelectEvents */
/** @typedef {typeof __propDef.slots}  SelectSlots */
export default class Select extends SvelteComponent<{
    [x: string]: any;
    items?: {
        value: string;
        label?: string;
    }[];
    selectedItem?: {
        value: string;
        label?: string;
    };
    visible?: boolean;
    width?: string;
}, {
    change: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SelectProps = typeof __propDef.props;
export type SelectEvents = typeof __propDef.events;
export type SelectSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        items?: {
            value: string;
            label?: string;
        }[];
        selectedItem?: {
            value: string;
            label?: string;
        };
        visible?: boolean;
        width?: string;
    };
    events: {
        change: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
