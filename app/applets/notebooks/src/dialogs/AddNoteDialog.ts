import { useCreateDocument } from "@realmocean/sdk";
import { UIViewBuilder, useFormController, useDialog, useFormBuilder, useNavigate, Button, Text } from "@tuval/forms";



export const SaveNoteAction = (formMeta, action) => UIViewBuilder(() => {
    const { label, successAction, successActions } = action;
    const formController = useFormController();
    const dialog = useDialog();



    const views = []
    const { workspaceId } = formController.GetFormData();
    const { createDocument, isLoading } = useCreateDocument(workspaceId, 'notebooks', 'nb_notes');
    const { createDocument: createContent } = useCreateDocument(workspaceId, 'notebooks', 'nb_note_contents');

    return (
        Button(
            Text('Save')
        )
            .loading(isLoading)
            .onClick(() => {

                const data = { ...formController.GetFormData() }
                delete data.databaseId;
                delete data.collectionId;
                delete data.workspaceId;


                createDocument(
                    {
                        data: {
                            ...data
                        }
                    },
                    (note) => {

                        createContent({
                            documentId: note.$id,
                            data: {
                                content: ''
                            }
                        }, () => dialog.Hide())

                    }
                )

            })
    )
}
)


export const AddNoteDialog = (workspaceId: string, notebookId: string) => ({

    "title": 'Add node',

    /*   "mutation":"_create_workspace", */
    "actions": [
        {
            "label": "Save",
            "type": "saveNote"
        }
    ],
    "fieldMap": {
        "workspaceId": {
            "name": "workspaceId",
            "type": "virtual",
            "value": workspaceId
        },
        "parent": {
            "name": "parent",
            "type": "virtual",
            "value": notebookId
        },
        "name": {
            label: "Name",
            name: "name",
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
})


export const _AddNoteDialog = (workspaceId: string, notebookId: string) => {

    return {
        "title": 'Create document',
        /*   "mutation":"_create_workspace", */
        "actions": [
            {
                "label": "Save",
                "type": "saveDocument",
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
            "workspaceId": {
                "name": "workspaceId",
                "type": "virtual",
                "value": workspaceId
            },
            "list_name": {
                "label": "name",
                "type": "text",
                "name": "name"
            },
          
            

        }
    }

}
