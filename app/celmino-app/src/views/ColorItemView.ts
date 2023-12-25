import { HStack } from "@tuval/forms"

export const ColorItemView = (color: string) => {
    return (
        HStack(
            HStack()
                .cursor('pointer')
                .width(20)
                .height(20)
                .background(color)
                .cornerRadius('100%')
                .border('1px solid rgba(0, 0, 0, 0.14)')
        )
            .width(32)
            .height(32)
            .cornerRadius(6)
            .background({ hover: 'rgba(109, 122, 131, 0.2)' })
    )
}