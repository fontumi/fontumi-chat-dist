export class ChatMessageCard {
    render() {
        return (h("div", { class: "chat-message-card" },
            h("img", { src: this.card.imageUri, alt: "Avatar", style: { width: "100%" } }),
            h("div", { class: "container" },
                h("h4", null,
                    h("b", null, this.card.title)),
                h("p", null, this.card.subtitle),
                h("div", { class: "buttons" }, this.card.buttons.map(btn => {
                    return (h("a", { target: "_blank", href: btn.postback || "#" }, btn.text));
                })))));
    }
    static get is() { return "chat-message-card"; }
    static get properties() { return {
        "card": {
            "type": "Any",
            "attr": "card"
        }
    }; }
}
