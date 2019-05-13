import '../../stencil.core';
import { Message } from "../../utils/interfaces";
export declare class ChatCardMessages {
    userInfo: {
        name: string;
    };
    fontumi: any;
    fontumiConfig: any;
    messages: Array<Message>;
    loading: boolean;
    message: string;
    chat: any;
    replie(ev: any): void;
    /**
     * Add message to the local array
     */
    addMessage(message: any): void;
    sendNewMessage(message: any): Promise<void>;
    sendMessage(): Promise<void>;
    /**
     * When the ChatCard loaded, create a new chat in the firestore db... and listen to the changes for new messages
     */
    componentDidLoad(): Promise<void>;
    render(): JSX.Element;
}
