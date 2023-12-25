
import { InputRenderer } from "@realmocean/antd";
import { VStack, Text, Input, cTopLeading } from "@tuval/forms"
import { PropertyLabel } from "../PropertyLabel";

export const TextField = (textFieldInfo) => {
    const { label, value, onChange, placeholder } = textFieldInfo;
    return (
        VStack({alignment:cTopLeading, spacing: 2})(
            PropertyLabel(label),
            Input()
                .renderer(InputRenderer)
        )
    )
}