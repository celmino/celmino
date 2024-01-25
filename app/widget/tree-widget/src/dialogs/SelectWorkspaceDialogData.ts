import { WorkProtocol } from "@tuval/forms";

export const SelectWorkspaceDialogData = {
    "title":'Select process space',
    "protocol": WorkProtocol,
    "fieldMap": {
        "workspacelist": {
            type: "workspacelist",
            name: "selected_workspace"
        }
    }
}