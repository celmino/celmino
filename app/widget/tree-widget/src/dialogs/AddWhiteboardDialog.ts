import { useCreateDocument } from "@realmocean/sdk";
import { UIViewBuilder, useFormController, useDialog, useFormBuilder, useNavigate, Button, Text } from "@tuval/forms";


export const SaveWhiteboardAction = (formMeta, action) => UIViewBuilder(() => {
    const { label, successAction, successActions } = action;
    const formController = useFormController();
    const dialog = useDialog();
    const formBuilder = useFormBuilder();
    const navigate = useNavigate();

    let invalidateResource = null;
    let formMutate = null;
    let createMutate = null;
    let updateMutate = null;
    let isFormMutateExcuting = false;
    let isFormLoading = false;

    const views = []
    const { databaseId, collectionId, workspaceId ,appletId} = formController.GetFormData();
    const { createDocument, isLoading } = useCreateDocument(workspaceId,appletId, 'wm_whiteboards');
    const { createDocument: createDocumentContent } = useCreateDocument(workspaceId,appletId, 'wm_whiteboard_contents');
   
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
                    (document) => {
                        createDocumentContent( {
                            documentId: document.$id,
                            data: {
                                content:''
                            }
                        }, ()=>  dialog.Hide())
                       
                    }
                )

            })
    )
}
)


export const AddWhiteboardDialog = (workspaceId: string, parent: string, path: string) => {
    if (workspaceId == null) {
        alert("spaceId is null")
    } else {
        return {
            "title": 'Create whiteboard',
            /*   "mutation":"_create_workspace", */
            "actions": [
                {
                    "label": "Save",
                    "type": "saveWhiteboard",
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
                "parent": {
                    "name": "parent",
                    "type": "virtual",
                    "value": parent
                },
                "path": {
                    "name": "path",
                    "type": "virtual",
                    "value": path
                },
                /*   "description": {
                      "label": "Description",
                      "type": "text",
                      "multiline": true,
                      "name": "description"
                  } */

            }
        }
    }
}