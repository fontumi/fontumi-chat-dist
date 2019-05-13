export class BubbleButton {
    constructor() {
        this.opened = false;
    }
    toggleBtn() {
        this.toggle.emit();
        this.opened = !this.opened;
    }
    render() {
        const fontumiConfig = window["fontumiConfig"];
        return (h("div", { id: "bubble-button", style: {
                background: fontumiConfig.colors.a
            }, onClick: () => {
                this.toggleBtn();
            } }, this.opened ? (h("close-icon", { style: {
                height: "30px"
            } })) : (h("messages-icon", { width: "30px" }))));
    }
    static get is() { return "bubble-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "opened": {
            "state": true
        },
        "toggleBtn": {
            "method": true
        }
    }; }
    static get events() { return [{
            "name": "toggle",
            "method": "toggle",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:bubble-button:**/"; }
}
