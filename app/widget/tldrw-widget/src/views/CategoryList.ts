import { ForEach, HStack, UIViewBuilder, VStack, cLeading, cTopLeading, useState } from "@tuval/forms";
import { CategoryItem } from "./CategoryItem";


export const CategoryList = ({ categories, onChange }: { categories: any[], onChange: Function }) => UIViewBuilder(() => {

    const [selected, setSelected] = useState("1");
    return (
        VStack({ alignment: cTopLeading })(
            ...ForEach(categories)(item =>
                HStack({ alignment: cLeading })(
                    CategoryItem(item, item.id === selected)
                )
                    .cursor('pointer')
                    .height()
                    .onClick(() => {
                        setSelected(item.id);
                        onChange(item)
                    })
            )
        ).padding()

    )
})


