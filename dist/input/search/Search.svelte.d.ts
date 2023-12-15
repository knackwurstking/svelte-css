/** @typedef {typeof __propDef.props}  SearchProps */
/** @typedef {typeof __propDef.events}  SearchEvents */
/** @typedef {typeof __propDef.slots}  SearchSlots */
export default class Search extends SvelteComponent<{
    [x: string]: any;
    title?: string;
    invalid?: boolean;
    value?: string;
    placeholder?: string;
}, {
    change: CustomEvent<any>;
    input: CustomEvent<any>;
    submit: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SearchProps = typeof __propDef.props;
export type SearchEvents = typeof __propDef.events;
export type SearchSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        title?: string;
        invalid?: boolean;
        value?: string;
        placeholder?: string;
    };
    events: {
        change: CustomEvent<any>;
        input: CustomEvent<any>;
        submit: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
