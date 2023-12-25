import { VStack, Text, Fragment, ForEach, cLeading } from "@tuval/forms"
import { TextField } from "./fields/TextField";
import { SelectField } from "./fields/SelectField";
import { UserField } from "./fields/AssigneeField";


const getField = (field) => {
    const { type } = field;
    switch (type) {
        case 'text':
            return TextField(field);
        case 'select':
            return SelectField(field);
        case 'user':
            return UserField(field);
        default:
            return Fragment();
    }

}
export const FieldContainer = (fields) => {
    return (
        VStack({ alignment: cLeading })(
            ...ForEach(Object.getOwnPropertyNames(fields))(field =>
                VStack({ alignment: cLeading })(
                    getField(fields[field])
                ).minHeight(80)
            )
        )
            .paddingTop('12px')
            .backgroundColor('white')
            .width(null)
            .allWidth(200)
            .flexBasis('0')
            .flexGrow('1')
            .flexShrink('0')
            .height()

    )
}