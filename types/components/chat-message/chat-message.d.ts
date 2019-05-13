import '../../stencil.core';
import { EventEmitter } from "../../stencil.core";
/**
 * @author krthr
 */
export declare class ChatMessage {
    el: HTMLElement;
    message: any;
    replie: EventEmitter;
    clickToReplie(ev: any): void;
    fontumiConfig: any;
    /**
     * Cuando el mensaje se muestre, hace scroll hacia este
     */
    componentDidLoad(): void;
    render(): JSX.Element;
}
