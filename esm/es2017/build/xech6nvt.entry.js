import { h } from '../fontumi-chat.core.js';

class CallIcon {
    render() {
        return (h("svg", { version: "1.1", width: this.width, fill: "white", id: "Capa_1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 512.076 512.076" },
            h("g", { transform: "translate(-1 -1)" },
                h("g", null,
                    h("g", null,
                        h("path", { d: "M499.639,396.039l-103.646-69.12c-13.153-8.701-30.784-5.838-40.508,6.579l-30.191,38.818\n\t\t\t\tc-3.88,5.116-10.933,6.6-16.546,3.482l-5.743-3.166c-19.038-10.377-42.726-23.296-90.453-71.04s-60.672-71.45-71.049-90.453\n\t\t\t\tl-3.149-5.743c-3.161-5.612-1.705-12.695,3.413-16.606l38.792-30.182c12.412-9.725,15.279-27.351,6.588-40.508l-69.12-103.646\n\t\t\t\tC109.12,1.056,91.25-2.966,77.461,5.323L34.12,31.358C20.502,39.364,10.511,52.33,6.242,67.539\n\t\t\t\tc-15.607,56.866-3.866,155.008,140.706,299.597c115.004,114.995,200.619,145.92,259.465,145.92\n\t\t\t\tc13.543,0.058,27.033-1.704,40.107-5.239c15.212-4.264,28.18-14.256,36.181-27.878l26.061-43.315\n\t\t\t\tC517.063,422.832,513.043,404.951,499.639,396.039z M494.058,427.868l-26.001,43.341c-5.745,9.832-15.072,17.061-26.027,20.173\n\t\t\t\tc-52.497,14.413-144.213,2.475-283.008-136.32S8.29,124.559,22.703,72.054c3.116-10.968,10.354-20.307,20.198-26.061\n\t\t\t\tl43.341-26.001c5.983-3.6,13.739-1.855,17.604,3.959l37.547,56.371l31.514,47.266c3.774,5.707,2.534,13.356-2.85,17.579\n\t\t\t\tl-38.801,30.182c-11.808,9.029-15.18,25.366-7.91,38.332l3.081,5.598c10.906,20.002,24.465,44.885,73.967,94.379\n\t\t\t\tc49.502,49.493,74.377,63.053,94.37,73.958l5.606,3.089c12.965,7.269,29.303,3.898,38.332-7.91l30.182-38.801\n\t\t\t\tc4.224-5.381,11.87-6.62,17.579-2.85l103.637,69.12C495.918,414.126,497.663,421.886,494.058,427.868z" }),
                        h("path", { d: "M291.161,86.39c80.081,0.089,144.977,64.986,145.067,145.067c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533\n\t\t\t\tc-0.099-89.503-72.63-162.035-162.133-162.133c-4.713,0-8.533,3.82-8.533,8.533S286.448,86.39,291.161,86.39z" }),
                        h("path", { d: "M291.161,137.59c51.816,0.061,93.806,42.051,93.867,93.867c0,4.713,3.821,8.533,8.533,8.533\n\t\t\t\tc4.713,0,8.533-3.82,8.533-8.533c-0.071-61.238-49.696-110.863-110.933-110.933c-4.713,0-8.533,3.82-8.533,8.533\n\t\t\t\tS286.448,137.59,291.161,137.59z" }),
                        h("path", { d: "M291.161,188.79c23.552,0.028,42.638,19.114,42.667,42.667c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533\n\t\t\t\tc-0.038-32.974-26.759-59.696-59.733-59.733c-4.713,0-8.533,3.82-8.533,8.533S286.448,188.79,291.161,188.79z" })))),
            h("g", null),
            h("g", null),
            h("g", null),
            h("g", null),
            h("g", null),
            h("g", null),
            h("g", null),
            h("g", null),
            h("g", null),
            h("g", null),
            h("g", null),
            h("g", null),
            h("g", null),
            h("g", null),
            h("g", null)));
    }
    static get is() { return "call-icon"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "width": {
            "type": String,
            "attr": "width"
        }
    }; }
}

export { CallIcon };
