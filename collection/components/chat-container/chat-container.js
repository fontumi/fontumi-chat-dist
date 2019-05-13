export class ChatContainer {
    render() {
        return (h("div", { id: "chat-container" },
            h("chat-card", null),
            h("div", { id: "chat-background" })));
    }
    static get is() { return "chat-container"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "/**style-placeholder:chat-container:**/"; }
}
