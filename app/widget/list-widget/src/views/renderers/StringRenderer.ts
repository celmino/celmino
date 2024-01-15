import { is } from "@tuval/core"
import { HStack, Text, cLeading } from "@tuval/forms"


export const StringRenderer = (item,fields, field) => {
    return (
        HStack({ alignment: cLeading })(
            Text(is.nullOrEmpty(item[field.key]) ? '-' : item[field.key]).fontSize(14)
        )
            .allWidth(100)
            .height(30)
    )
}