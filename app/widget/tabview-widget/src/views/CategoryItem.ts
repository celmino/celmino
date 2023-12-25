import { HStack, Heading, Spacer, Text, UIViewBuilder, cLeading } from "@tuval/forms";


export const CategoryItem = (item: any, selected: boolean) => HStack({ alignment: cLeading })(
    UIViewBuilder(() => {
        return (
            HStack({ alignment: cLeading })(
                Heading(item.title)
                    .h3()
                    .fontSize(14)
                    .fontWeight(selected ? '600' : '400')
                    .foregroundColor(selected ? '#7b68ee' : ''),
                    Spacer(),
                    Text(item.count.toString()).fontSize(12).foregroundColor('#aeacb0')
            )
        )
    })
)
    .height()