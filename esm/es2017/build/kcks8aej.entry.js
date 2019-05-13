import { h } from '../fontumi-chat.core.js';

class ChatMessage {
    constructor() {
        this.fontumiConfig = window["fontumiConfig"];
    }
    clickToReplie(ev) {
        this.replie.emit(ev.detail);
    }
    componentDidLoad() {
        this.el.scrollIntoView();
    }
    render() {
        const text = ({ text }) => (h("div", null, text.map(txt => {
            return h("chat-message-text", { isUser: this.message.isUser, text: txt });
        })));
        const card = ({ card }) => h("chat-message-card", { card: card });
        const image = ({ image }) => h("chat-message-image", { image: image });
        const quickReplies = ({ quickReplies }) => (h("chat-message-quick-replies", { quickReplies: quickReplies }));
        return (h("div", { id: "chat-message", class: "fontumi-chat-message", style: {
                textAlign: this.message.isUser ? "right" : "left"
            } },
            h("div", null,
                h("span", { class: "chat-message-name" }, this.message.isUser ? "Yo" : this.fontumiConfig["name"])),
            h("div", null, (!this.message.isUser &&
                this.message.message.map(msg => {
                    switch (msg.message) {
                        case "text":
                            return text(msg.text);
                        case "card":
                            return card(msg);
                        case "image":
                            return image(msg);
                        case "quickReplies":
                            return quickReplies(msg);
                    }
                })) ||
                text({
                    text: [this.message.message]
                }))));
    }
    static get is() { return "chat-message"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "message": {
            "type": "Any",
            "attr": "message"
        }
    }; }
    static get events() { return [{
            "name": "replie",
            "method": "replie",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "clickToReplie",
            "method": "clickToReplie"
        }]; }
    static get style() { return "#chat-message{margin:10px 5px}.chat-message-name{font-size:12px!important;color:#464646!important;font-weight:300!important}.chat-message-body{padding:5px 10px!important;border-radius:1px!important;margin:0!important;color:#fff!important}p.chat-message-text{border-radius:5px;display:-ms-inline-flexbox!important;display:inline-flex!important;padding:10px;color:#fff;margin-bottom:5px}p{padding:0;margin:0}.chat-message-card,.chat-message-image,.chat-message-quick-replies,p.chat-message-text{margin-bottom:10px}.chat-message-card,.chat-message-image,.chat-message-quick-replies>.replie{-webkit-transition:.3s;transition:.3s;border-radius:1px;-webkit-box-shadow:0 4px 8px 0 rgba(0,0,0,.2);box-shadow:0 4px 8px 0 rgba(0,0,0,.2)}.chat-message-card:hover,.chat-message-image:hover,.chat-message-quick-replies>.replie:hover{-webkit-box-shadow:0 8px 16px 0 rgba(0,0,0,.2);box-shadow:0 8px 16px 0 rgba(0,0,0,.2)}.chat-message-card{padding:2px}.chat-message-card>.container{padding:2px 16px 20px}.chat-message-card>.container>h4{margin:0}.chat-message-card>.container>.buttons{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:start;justify-content:flex-start;padding-top:10px}.chat-message-card>.container>.buttons>a{border:1px solid;padding:6px 10px;font-size:15px;margin-bottom:3px;margin-right:3px;text-decoration:none;border-radius:1px}.chat-message-card>.container>.buttons>a:hover{background:#e9e9e9!important}.chat-message-card>.container>.buttons>a:visited{color:#000}.chat-message-image{padding:10px}.chat-message-quick-replies{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap}.chat-message-quick-replies>.replie{font-size:13px;border-radius:3px;background:#fff;padding:10px;margin-right:10px;margin-bottom:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-ms-flexbox;display:flex;text-align:center;-ms-flex-line-pack:center;align-content:center;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:column;flex-direction:column}"; }
}

class ChatMessageCard {
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

class ChatMessageImage {
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

class ChatMessageQuickReplies {
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

class ChatMessageText {
    constructor() {
        this.fontumiConfig = window["fontumiConfig"];
    }
    render() {
        const backgroundColor = {
            backgroundColor: this.isUser
                ? this.fontumiConfig.colors.a
                : this.fontumiConfig.colors.b
        };
        return h("p", { class: "chat-message-text", style: backgroundColor }, this.text);
    }
    static get is() { return "chat-message-text"; }
    static get properties() { return {
        "isUser": {
            "type": Boolean,
            "attr": "is-user"
        },
        "text": {
            "type": String,
            "attr": "text"
        }
    }; }
}

export { ChatMessage, ChatMessageCard, ChatMessageImage, ChatMessageQuickReplies, ChatMessageText };
