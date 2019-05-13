export class ChatMessageText {
    constructor() {
        this.fontumiConfig = window["fontumiConfig"];
    }
    render() {
        const backgroundColor = {
            backgroundColor: this.isUser
                ? this.fontumiConfig.colors.a
                : this.fontumiConfig.colors.b
        };
        return h("p", { class: "chat-message-text", style: backgroundColor }, this.text);
    }
    static get is() { return "chat-message-text"; }
    static get properties() { return {
        "isUser": {
            "type": Boolean,
            "attr": "is-user"
        },
        "text": {
            "type": String,
            "attr": "text"
        }
    }; }
}
