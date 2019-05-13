import '../../stencil.core';
import { EventEmitter } from "../../stencil.core";
export declare class BubbleButton {
    /** */
    toggle: EventEmitter;
    /**  */
    opened: boolean;
    /**
     *
     */
    toggleBtn(): void;
    render(): JSX.Element;
}
