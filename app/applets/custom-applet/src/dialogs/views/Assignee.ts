import { PopupButton, Icon, Calendar, HStack, DialogPosition } from "@tuval/forms"
import { TaskIcons } from "../../views/TaslIcons"


export const AssigneeView = () => {
    return (
        PopupButton(
            HStack(
                Icon(TaskIcons.Assignee).width(26).height(26)
            ).width(36).height(36).border('solid 1px #EAEAEA').cornerRadius('50%').padding(3)
        )(
            Calendar()
        )
            .dialogPosition(DialogPosition.BOTTOM_START))
}