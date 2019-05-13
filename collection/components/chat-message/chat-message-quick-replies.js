export class ChatMessageQuickReplies {
    render() {
        return (h("div", { class: "chat-message-quick-replies" }, this.quickReplies.quickReplies.map(qR => {
            return (h("div", { onClick: () => this.clickToReplie.emit(qR), class: "replie" }, qR));
        })));
    }
    static get is() { return "chat-message-quick-replies"; }
    static get properties() { return {
        "quickReplies": {
            "type": "Any",
            "attr": "quick-replies"
        }
    }; }
    static get events() { return [{
            "name": "clickToReplie",
            "method": "clickToReplie",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
}
