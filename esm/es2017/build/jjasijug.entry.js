import { h } from '../fontumi-chat.core.js';

class VoiceCall {
    render() {
        return h("div", null);
    }
    static get is() { return "voide-call"; }
    static get encapsulation() { return "shadow"; }
}

export { VoiceCall as VoideCall };
