


export const AddCollectionDialog = (workspaceId:string, appletId: string) => ({
    "title": 'Create collection',
    "method": "create",
    "resource": "collections",
    /*   "mutation":"_create_workspace", */
    "actions": [
        {
            "label": "Save",
            "type": "ca_saveCollection"
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
            "value": appletId
        },
        "name": {
            "label": "Name",
            "type": "text",
            "name": "name"
        },
       
    }
})