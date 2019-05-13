export class ChatMessageImage {
    render() {
        return (h("div", { class: "chat-message-image" },
            h("img", { src: this.image.imageUri, style: { width: "100%" } })));
    }
    static get is() { return "chat-message-image"; }
    static get properties() { return {
        "image": {
            "type": "Any",
            "attr": "image"
        }
    }; }
}
