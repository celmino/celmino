import { TaskProtocol } from "@tuval/forms"


export const AddTextCustomField =  {
   
        "title": 'Add Custom Field',
        "mode": "create",
        "resource": "tasks/custom-fields/",
        "protocol": TaskProtocol,
        /*   "mutation":"_create_workspace", */
        "actions": [
            {
                "label": "Save",
                "type": "post",
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
            "type": {
                "name": "type",
                "type": "virtual",
                "value": "number"
            },
            "type_text": {
                label: "Type",
                name: "type_text",
                type: "text",
                defaulrValue: "Number",
                defaultDisabled: true
            },
            "name": {
                label: "FIELD NAME",
                name: "field_name",
                type: "text"
            }
           /*  "tenant_id": {
                "name": "tenant_id",
                "type": "virtual",
                "value": useSessionService().TenantId
            },
            "account_id": {
                "name": "account_id",
                "type": "virtual",
                "value": useSessionService().AccountId
            },
            "app_id": {
                "name": "app_id",
                "type": "virtual",
                "value": getAppFullName()
            },
            "workspace_id": {
                "name": "workspace_id",
                "type": "virtual",
                "value": workspace_id
            },

            "space_name": {
                "label": "Name",
                "type": "text",
                "name": "name"
            },
            "description": {
                "label": "Description",
                "type": "text",
                "multiline": true,
                "name": "description"
            } */

        }
    }
