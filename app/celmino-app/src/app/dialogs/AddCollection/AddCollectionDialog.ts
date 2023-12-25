import { from } from "@tuval/core";

import { useSessionService } from "@realmocean/services";
import {
    WorkProtocol, getAppFullName, nanoid
} from "@tuval/forms";

import { Permission, Role } from "@celmino/sdk";

export const AddCollectionDialog = (workspaceId:string, databaseId: string) => ({
    "title": 'Create collection',
    "method": "create",
    "resource": "collections",
    /*   "mutation":"_create_workspace", */
    "actions": [
        {
            "label": "Save",
            "type": "saveCollection"
        }
    ],
    "fieldMap": {
        "workspaceId": {
            "name": "workspaceId",
            "type": "virtual",
            "value": workspaceId
        },
        "databaseId": {
            "name": "databaseId",
            "type": "virtual",
            "value": databaseId
        },
        "name": {
            "label": "Name",
            "type": "text",
            "name": "name"
        },
       
    }
})