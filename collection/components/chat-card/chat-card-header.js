export class ChatCardHeader {
    constructor() {
        this.fontumiConfig = window["fontumiConfig"];
        this.inCall = false;
    }
    render() {
        return (h("div", { id: "chat-card-header", style: {
                background: `linear-gradient(45deg, ${this.fontumiConfig.colors.a}, ${this.fontumiConfig.colors.b})`
            } },
            h("img", { id: "logo", src: this.fontumiConfig.logo, alt: "" }),
            h("div", { id: "logo-name" },
                h("h2", null, this.fontumiConfig.name)),
            h("div", { id: "icons-header" },
                this.fontumiConfig.call &&
                    !this.fontumiConfig.call.only &&
                    (this.inCall ? (h("div", { id: "messages-icon" },
                        h("messages-icon", { width: "25px", onClick: () => {
                                this.toggleCall.emit();
                                this.inCall = !this.inCall;
                            } }),
                        h("br", null),
                        h("span", null, (this.fontumiConfig.ui && this.fontumiConfig.ui.chat) ||
                            "Chat"))) : (h("div", { id: "call-icon" },
                        h("call-icon", { width: "25px", onClick: () => {
                                this.toggleCall.emit();
                                this.inCall = !this.inCall;
                            } }),
                        h("br", null),
                        h("span", null, (this.fontumiConfig.ui && this.fontumiConfig.ui.call) ||
                            "Call")))),
                this.fontumiConfig.videoCallUrl && (h("div", { id: "video-call-icon" },
                    h("video-call-icon", { width: "25px", onClick: () => window.open(this.fontumiConfig.videoCallUrl, "_blank") }),
                    h("br", null),
                    h("span", null, (this.fontumiConfig.ui && this.fontumiConfig.ui.video) ||
                        "Video"))),
                this.fontumiConfig.callBackUrl && (h("div", { id: "call-back-icon" },
                    h("callback-icon", { width: "25px", onClick: () => window.open(this.fontumiConfig.callBackUrl, "_black") }),
                    h("br", null),
                    h("span", null, (this.fontumiConfig.ui && this.fontumiConfig.ui.callback) ||
                        "Callback"))))));
    }
    static get is() { return "chat-card-header"; }
    static get properties() { return {
        "inCall": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "toggleCall",
            "method": "toggleCall",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
}
