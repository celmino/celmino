import { HStack, Icon } from "@tuval/forms";
import { TaskIcons } from "./TaslIcons";


export const InlineActionButton = (icon) => (
    HStack(
        Icon(icon).width(12).height(12)
    )
    .onClick(()=> alert('dfd'))
   
        .cursor('pointer')
        .cornerRadius(4)
        .border('1px solid #e9ebf0')
        .background('var(--cu-background-main)')
        .height(20).width(20).opacity('var(--show-rename)')
)