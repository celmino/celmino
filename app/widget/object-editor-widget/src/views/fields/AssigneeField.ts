import { SelectRenderer } from "@realmocean/antd";
import { Select, UIWidget, VStack, cTopLeading } from "@tuval/forms"
import { PropertyLabel } from "../PropertyLabel";



export const UserField = (textFieldInfo) => {
    const { label, value, onChange, placeholder, options } = textFieldInfo;
    return (
        VStack({ alignment: cTopLeading, spacing: 2 })(
            PropertyLabel(label),
            UIWidget('com.tuvalsoft.widget.userselect')
                .config({
                    width: 36,
                    height: 36,
                  //  tenant_id: useSessionService().TenantId,
                   
                    onChange: (account) => {
                        // assignResponsibleToTask(task.id, account.id);
                    }
                })
        )

    )
}