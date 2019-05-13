export class ChatMessage {
    constructor() {
        this.fontumiConfig = window["fontumiConfig"];
    }
    clickToReplie(ev) {
        this.replie.emit(ev.detail);
    }
    componentDidLoad() {
        this.el.scrollIntoView();
    }
    render() {
        const text = ({ text }) => (h("div", null, text.map(txt => {
            return h("chat-message-text", { isUser: this.message.isUser, text: txt });
        })));
        const card = ({ card }) => h("chat-message-card", { card: card });
        const image = ({ image }) => h("chat-message-image", { image: image });
        const quickReplies = ({ quickReplies }) => (h("chat-message-quick-replies", { quickReplies: quickReplies }));
        return (h("div", { id: "chat-message", class: "fontumi-chat-message", style: {
                textAlign: this.message.isUser ? "right" : "left"
            } },
            h("div", null,
                h("span", { class: "chat-message-name" }, this.message.isUser ? "Yo" : this.fontumiConfig["name"])),
            h("div", null, (!this.message.isUser &&
                this.message.message.map(msg => {
                    switch (msg.message) {
                        case "text":
                            return text(msg.text);
                        case "card":
                            return card(msg);
                        case "image":
                            return image(msg);
                        case "quickReplies":
                            return quickReplies(msg);
                    }
                })) ||
                text({
                    text: [this.message.message]
                }))));
    }
    static get is() { return "chat-message"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "message": {
            "type": "Any",
            "attr": "message"
        }
    }; }
    static get events() { return [{
            "name": "replie",
            "method": "replie",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "clickToReplie",
            "method": "clickToReplie"
        }]; }
    static get style() { return "/**style-placeholder:chat-message:**/"; }
}
