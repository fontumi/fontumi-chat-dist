export function format(first, middle, last) {
    return ((first || "") + (middle ? ` ${middle}` : "") + (last ? ` ${last}` : ""));
}
export function log(text) {
    if (window["fontumiConfig"].debug)
        console.warn("FONTUMI:DEBUG", text);
}
