import { useSessionService } from "@realmocean/services";
import {
    WorkProtocol, getAppFullName
} from "@tuval/forms";

export const AddFolderDialog = (spaceId: string) => {
    if (spaceId == null) {
        alert("spaceId is null")
    } else {
        return {
            "title": 'Create folder',
            /*   "mutation":"_create_workspace", */
            "actions": [
                {
                    "label": "Save",
                    "type": "saveFolder",
                    /*  "successActions": [{
                         "type": "hide"
                     },
                     {
                         "type": "navigate",
                         "url": "/app/com.tuvalsoft.app.procetra/workspace/{{id}}"
                     }
                     ] */
                    /*  "successActions": [{
                     "type": "hide"
                 },
                 {
                     "type": "navigate",
                     "url": "/app/com.tuvalsoft.app.procetra/workspace/{{id}}"
                 }
                 ] */
                }
            ],
            "fieldMap": {
                "spaceId": {
                    "name": "spaceId",
                    "type": "virtual",
                    "value": spaceId
                },
                "folder_name": {
                    "label": "Name",
                    "type": "text",
                    "name": "name"
                },
                "description": {
                    "label": "Description",
                    "type": "text",
                    "multiline": true,
                    "name": "description"
                }

            }
        }
    }
}