export class ChatCardByfontumi {
    render() {
        return (h("div", { id: "chat-byfontumi" },
            h("div", null,
                h("img", { src: "https://www.fontumi.co/empresas/logos/byfontumilogo.png", onClick: () => window.open("https://www.fontumi.co", "_blank") }))));
    }
    static get is() { return "chat-card-byfontumi"; }
}
