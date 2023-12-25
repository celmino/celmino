import { HStack, Icon } from "@tuval/forms"


export const ActionsPanelButton = (icon, action = void 0) => (
    HStack(

        Icon(icon),
    )
        .foregroundColor('rgb(109, 122, 131)')
        .cursor('pointer')
        .cornerRadius(6)
        .padding(10)
        .background({ hover: 'rgba(109, 122, 131, 0.15)' })
        .transition('all .15s ease-out')
        .width(28).height(28).onClick(() => {
            action()
        })
)