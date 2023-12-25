import { HStack, Icon, VStack, cLeading, Text } from "@tuval/forms";

export const RatingSlice = (rating, percentage, color) => (
    VStack({ spacing: 5 })(
        HStack({ alignment: cLeading })(

        ).height(30).background(color),
        HStack({ spacing: 5 })(
            Text(rating).foregroundColor('#8293A1'),
            Icon('\\d237').fontSize(15).foregroundColor(color)
        )
        ,
        Text('3.3k').fontWeight('600'),

    ).height().flexBasis(percentage + '%')
)