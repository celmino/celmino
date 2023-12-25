
import { InputRenderer, SelectRenderer } from "@realmocean/antd";
import { VStack, Text, Select, cTopLeading } from "@tuval/forms"
import { PropertyLabel } from "../PropertyLabel";

export const SelectField = (textFieldInfo) => {
    const { label, value, onChange, placeholder, options = [] } = textFieldInfo;
    return (
        VStack({ alignment: cTopLeading, spacing: 2 })(
            PropertyLabel(label),
            Select()
                .options(options)
                .renderer(SelectRenderer)
        )
    )
}