import * as voxImplant from "../../fontumi/voximplant.js";
import { log } from "../../utils/utils.js";
export class ChatCardCall {
    constructor() {
        this.fontumiConfig = window["fontumiConfig"];
        this.call = null;
        this.isInCall = false;
    }
    async makeCall() {
        log("calling");
        try {
            this.call = await voxImplant.makeCall();
            this.isInCall = true;
            log("call conected");
            this.call.on(window["VoxImplant"].CallEvents.Disconnected, () => this.hangup());
        }
        catch (e) {
            console.log(e);
        }
    }
    async hangup() {
        try {
            this.call.hangup();
        }
        catch (e) {
            console.warn(e);
        }
        this.call = null;
        this.isInCall = false;
        log("call ended");
    }
    async componentDidLoad() {
        try {
            if (!voxImplant.voximplant.connected()) {
                await voxImplant.init();
            }
            this.makeCall();
            log("chat-card-call loaded");
        }
        catch (e) {
            console.log(e);
        }
    }
    render() {
        return (h("div", { id: "chat-card-call", style: {
                background: `linear-gradient(-45deg, ${this.fontumiConfig.colors.a}, ${this.fontumiConfig.colors.b}, #5b036c) 0% 0% / 400% 400%`
            } },
            h("div", { style: {
                    textAlign: "center"
                } },
                !this.isInCall ? (h("div", { onClick: () => this.makeCall() },
                    h("call-icon", { width: "30px" }))) : (h("div", { onClick: () => this.hangup() },
                    h("hangup-icon", { width: "30px" }))),
                h("p", { class: "call-note" }, "Si tu conexi\u00F3n a internet no es lo suficientemente buena la llamada puede fallar."))));
    }
    static get is() { return "chat-card-call"; }
    static get properties() { return {
        "call": {
            "state": true
        },
        "hangup": {
            "method": true
        },
        "isInCall": {
            "state": true
        }
    }; }
}
