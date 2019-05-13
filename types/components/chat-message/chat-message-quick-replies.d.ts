import '../../stencil.core';
import { EventEmitter } from "../../stencil.core";
import { MessageQuickReplies } from "../../utils/interfaces";
export declare class ChatMessageQuickReplies {
    quickReplies: MessageQuickReplies;
    clickToReplie: EventEmitter;
    render(): JSX.Element;
}
