import { useSessionService } from "@realmocean/services"
import { Text } from "@realmocean/vibe"
import { UIWidget } from "@tuval/forms"


export const AssignUser = ({account_id = null, readonly = false,width = 36, height = 36, onChange = void 0}) => {
    return (
        Text('Select User')
        /* UIWidget("com.tuvalsoft.widget.userselect")
        .config({
            tenant_id: useSessionService().TenantId,
            selectedAccountId:account_id,
            readonly: readonly,
            width: width,
            height: height,
            onChange
        }) */
    )
}