import { log } from "../../utils/utils";
import { initFirebase, createChat } from "../../fontumi/firebase.js";
export class ChatCardMessages {
    constructor() {
        this.userInfo = {
            name: "Yo"
        };
        this.fontumi = window["fontumi"];
        this.fontumiConfig = window["fontumiConfig"];
        this.messages = [];
        this.loading = true;
        this.message = "";
    }
    replie(ev) {
        this.sendNewMessage(ev.detail);
    }
    addMessage(message) {
        log(["message added", message]);
        this.messages = [...this.messages, message];
    }
    async sendNewMessage(message) {
        const chat = await this.chat.get();
        this.loading = true;
        this.message = "";
        await this.chat.update({
            messages: [
                ...chat.data().messages,
                {
                    isUser: true,
                    message,
                    name: ""
                }
            ]
        });
        this.loading = true;
        this.message = "";
    }
    async sendMessage() {
        if (this.chat && this.message.trim() && !this.loading) {
            const message = this.message;
            await this.sendNewMessage(message);
        }
    }
    async componentDidLoad() {
        log("chat-card loaded");
        await initFirebase();
        this.chat = await createChat({});
        this.messages = [];
        this.chat.onSnapshot(async (snap) => {
            if (snap.data()) {
                const newMessages = snap.data().messages;
                const lastMessage = newMessages[newMessages.length - 1];
                if (lastMessage) {
                    this.addMessage(lastMessage);
                    if (!lastMessage.isUser) {
                        this.loading = false;
                    }
                    console.log(this.messages);
                }
            }
        });
    }
    render() {
        return (h("div", null,
            h("div", { id: "chat-card-content" },
                this.messages.map(message => {
                    return h("chat-message", { message: message });
                }),
                this.loading && (h("chat-message", { message: {
                        message: [
                            {
                                message: "text",
                                platform: "PLATFORM_UNSPECIFIED",
                                text: {
                                    text: ["Escribiendo..."]
                                }
                            }
                        ],
                        name: null,
                        isUser: false
                    } }))),
            h("div", { id: "chat-card-footer" },
                h("div", { style: {
                        "flex-grow": "3"
                    } },
                    h("input", { value: this.message, onInput: e => {
                            this.message = e.target["value"];
                        }, onKeyDown: e => {
                            if (e.keyCode === 13) {
                                this.sendMessage();
                            }
                        }, type: "text", placeholder: "Escribir mensaje" })),
                h("div", { style: {
                        "flex-grow": "1"
                    } },
                    h("button", { style: {
                            borderColor: this.fontumiConfig.colors.a,
                            color: this.fontumiConfig.colors.a
                        }, onClick: () => this.sendMessage() }, "Enviar")))));
    }
    static get is() { return "chat-card-messages"; }
    static get properties() { return {
        "chat": {
            "state": true
        },
        "loading": {
            "state": true
        },
        "message": {
            "state": true
        },
        "messages": {
            "state": true
        },
        "userInfo": {
            "state": true
        }
    }; }
    static get listeners() { return [{
            "name": "replie",
            "method": "replie"
        }]; }
}
