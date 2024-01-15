import { is } from "@tuval/core"
import { HStack, Text, cLeading } from "@tuval/forms"
import { tokenizeExpression, parseExpression, evaluateExpression } from "../../expression";


export const FormulaRenderer = (item, fields, field) => {
    const type_content = JSON.parse(field.type_content);
    let expression = type_content?.expression;

    fields.forEach(field => expression = expression?.replaceAll(`[${field.name}]`, field.key))
    fields.forEach(field => expression = expression?.replaceAll(`${field.name}`, field.key))

    const tokens = tokenizeExpression(expression)
    const ast = parseExpression(tokens)

    try {
        const result: any = evaluateExpression(ast, { ...item })


        return (
            HStack({ alignment: cLeading })(
                Text(result).fontSize(14)
            )
                .allWidth(100)
                .height(30)
        )
    } catch {
        return (
            HStack({ alignment: cLeading })(
                Text('Not Calculated').fontSize(14)
            )
                .allWidth(100)
                .height(30)
        )
    }

}