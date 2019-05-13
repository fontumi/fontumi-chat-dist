import { log } from "../../utils/utils";
export class ChatWrapper {
    constructor() {
        this.opened = false;
        this.closeWelcomeMessage = true;
        this.fontumiConfig = window["fontumiConfig"];
    }
    toggle() {
        this.opened = !this.opened;
        this.closeWelcomeMessage = true;
    }
    hi() {
        console.log("hi");
    }
    componentWillLoad() {
        log("chat-wrapper did load");
    }
    componentDidLoad() {
        setTimeout(() => (this.closeWelcomeMessage = false), 1000);
        setTimeout(() => {
            if (document.getElementById("hubspot-messages-iframe-container"))
                document.getElementById("hubspot-messages-iframe-container").remove();
        }, 5000);
        (function (i, s, o, g, r, a, m) {
            i["GoogleAnalyticsObject"] = r;
            (i[r] =
                i[r] ||
                    function () {
                        (i[r].q = i[r].q || []).push(arguments);
                    }),
                (i[r].l = Date.now());
            (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m);
        })(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga");
        window["ga"]("create", "UA-40818966-1", "auto");
        window["ga"]("send", "pageview");
    }
    render() {
        return (h("div", { id: "chat-wrapper" },
            h("chat-container", { style: {
                    visibility: this.opened ? "visible" : "hidden",
                    opacity: this.opened ? "1" : "0"
                } }),
            h("div", { onClick: () => {
                    this.el.shadowRoot.querySelector("bubble-button").toggleBtn();
                }, id: "welcome-message", style: {
                    visibility: !this.closeWelcomeMessage ? "visible" : "hidden"
                } },
                h("div", { class: "welcome-message" },
                    false && (h("div", { class: "welcome-message-close" },
                        h("svg", { width: "10", height: "10", xmlns: "http://www.w3.org/2000/svg" },
                            h("path", { d: "M9.786.214a.69.69 0 0 0-1 0L5 4 1.214.214a.69.69 0 0 0-1 0 .69.69 0 0 0 0 1L4 5 .214 8.786a.69.69 0 0 0 0 1 .648.648 0 0 0 .5.214.648.648 0 0 0 .5-.214L5 6l3.786 3.786a.772.772 0 0 0 .5.214.772.772 0 0 0 .5-.214.69.69 0 0 0 0-1L6 5l3.786-3.786a.69.69 0 0 0 0-1z", fill: "#95A3BE", "fill-rule": "nonzero" })))),
                    h("div", { class: "welcome-message-inner" },
                        h("div", { class: "welcome-message-text" }, this.fontumiConfig.ui && this.fontumiConfig.ui.welcomeMessage
                            ? this.fontumiConfig.ui.welcomeMessage
                            : "¡Hola!")))),
            h("bubble-button", null)));
    }
    static get is() { return "fontumi-chat-wrapper"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "closeWelcomeMessage": {
            "state": true
        },
        "el": {
            "elementRef": true
        },
        "hi": {
            "method": true
        },
        "opened": {
            "state": true
        }
    }; }
    static get listeners() { return [{
            "name": "toggle",
            "method": "toggle"
        }]; }
    static get style() { return "/**style-placeholder:fontumi-chat-wrapper:**/"; }
}
