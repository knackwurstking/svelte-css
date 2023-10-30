/** @typedef {typeof __propDef.props}  SliderProps */
/** @typedef {typeof __propDef.events}  SliderEvents */
/** @typedef {typeof __propDef.slots}  SliderSlots */
export default class Slider extends SvelteComponent<{
    height?: string;
    width?: string;
    min?: number;
    max?: number;
    value?: number;
}, {
    change: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SliderProps = typeof __propDef.props;
export type SliderEvents = typeof __propDef.events;
export type SliderSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        height?: string;
        width?: string;
        min?: number;
        max?: number;
        value?: number;
    };
    events: {
        change: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
