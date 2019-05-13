export class CallbackIcon {
    render() {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "white", version: "1.1", id: "Layer_1", x: "0px", y: "0px", viewBox: "0 0 513 513", width: this.width },
            h("path", { d: "M513,256.5c0,68.38-26.629,132.667-74.98,181.02C389.667,485.871,325.38,512.5,257,512.5  c-52.59,0-103.121-15.831-146.131-45.78C82.215,446.767,58.23,421.541,40,392.438V446.5H0v-120h120v40H70.978  c38.392,65.347,108.17,106,186.022,106c119.103,0,216-96.897,216-216H513z M255,40.5c77.853,0,147.631,40.654,186.022,106H393v40  h119v-120h-40v54.061c-18.23-29.102-42.215-54.329-70.869-74.281C358.121,16.331,307.59,0.5,255,0.5  c-68.341,0-132.465,26.644-180.561,75.022C26.437,123.808,0,188.08,0,256.5h40C40,137.397,136.448,40.5,255,40.5z M179.354,141.5  l-25.857,25.642c-11.558,11.556-12.78,27.601-7.504,43.872c9.132,28.166,18.733,50.284,62.715,94.256  c43.981,43.973,67.283,51.094,94.663,62.379c6.303,2.598,12.257,3.85,17.836,3.85c9.917,0,18.648-3.958,26.045-11.353L373,334.297  l-66.149-66.245l-34.111,33.352c-9.043-6.616-19.285-15.482-31.988-28.182c-12.849-12.846-22.641-23.755-30.036-33.488  l33.113-33.385L179.354,141.5z" })));
    }
    static get is() { return "callback-icon"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "width": {
            "type": String,
            "attr": "width"
        }
    }; }
}