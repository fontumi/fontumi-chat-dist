import { log } from "../../utils/utils";
export class ChatCard {
    constructor() {
        this.fontumi = window["fontumi"];
        this.fontumiConfig = window["fontumiConfig"];
        this.inCall = this.fontumiConfig.call && this.fontumiConfig.call.only;
    }
    onToggleCall() {
        log("chat-card toggled");
        if (this.inCall) {
            this.el.shadowRoot.querySelector("chat-card-call").hangup();
            this.inCall = false;
        }
        else {
            this.inCall = true;
        }
    }
    render() {
        return (h("div", { id: "chat-card" },
            h("chat-card-header", null),
            this.inCall && h("chat-card-call", null),
            h("chat-card-messages", { style: {
                    display: !this.inCall ? "" : "none"
                } }),
            this.inCall ? "" : "",
            h("chat-card-byfontumi", null)));
    }
    static get is() { return "chat-card"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "inCall": {
            "state": true
        }
    }; }
    static get listeners() { return [{
            "name": "toggleCall",
            "method": "onToggleCall"
        }]; }
    static get style() { return "/**style-placeholder:chat-card:**/"; }
}
