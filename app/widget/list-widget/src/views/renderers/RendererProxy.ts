import { NumberRenderer } from "./NumberRenderer";
import { StringRenderer } from "./StringRenderer";


export const RendererProxy = (item, field) => {
    switch (field.type) {
        case "string":
            return StringRenderer(item, field);
        case "number":
            return NumberRenderer(item, field);
        default:
            return StringRenderer(item, field);
    }
}