import { VStack, cTopLeading, HStack, Text } from "@tuval/forms";
import { RatingSlice } from "./RatingSlice";

export const RatingPool = (title) => (
    VStack({ alignment: cTopLeading, spacing: 5 })(
        Text(title),
        HStack({ alignment: cTopLeading, spacing: 5 })(
            Text('3.77').fontFamily('"Mulish",sans-serif!important')
                .lineHeight(30)
                .fontSize(25).fontWeight('600'),
            Text('+0.091').fontFamily('"Mulish",sans-serif!important')
                .foregroundColor('#5BC660')
                .fontSize(13).fontWeight('600')
        ).height(),
        Text('16 345 Users rated').fontFamily('"Poppins",sans-serif').fontSize(13),
        HStack({ alignment: cTopLeading })(
            RatingSlice(1, 10, '#EF7777'),
            RatingSlice(2, 10, '#F6B36F'),
            RatingSlice(3, 25, '#FBD569'),
            RatingSlice(4, 15, '#BDD280'),
            RatingSlice(5, 40, '#66B47C')

        ).height()
    ).height()
)