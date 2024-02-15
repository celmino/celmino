import { Icon, Text, VStack, cTop, cTopLeading } from "@tuval/forms"

export const EmptyTopicView = () => {
    return (
        VStack({ alignment: cTop})(
            VStack({ spacing: 20 })(
                Icon('\\d24d').fontSize(220)
                    .foregroundColor('#CFD6DE'),
                Text(`Your table of contents is empty  Create the topics with the buttons above`)
                    .foregroundColor('rgb(136, 149, 167)')
                    .fontSize(25)
                    .fontFamily('Shadows Into Light Two, serif')
            ).padding('20px 10px')
                .border('dashed 3px #E1E7EC')
                .cornerRadius(10)
                .height()
        ).padding()

    )
}