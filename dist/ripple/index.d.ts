export { rippleStart as Start } from "./start";
export { rippleStop as stop } from "./stop";
export { ripple as Root } from "./ripple";
export type RippleOptions = {
    color?: string;
    opacity?: number;
    centered?: boolean;
    spreadDuration?: string;
    spreadTiming?: string;
    clearDuration?: string;
    clearTiming?: string;
};
