import { useCreateDocument } from "@realmocean/sdk";
import {
    Button,
    Text,
    UIViewBuilder,
    useDialog, useFormBuilder, useFormController, useNavigate
} from "@tuval/forms";


export const SaveFolderAction = (formMeta, action) => UIViewBuilder(() => {
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
    const { databaseId, collectionId, workspaceId } = formController.GetFormData();
    const { createDocument, isLoading } = useCreateDocument(workspaceId,'work_management', 'wm_folders');
   
    return (
        Button(
            Text('Save Folder')
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
                    () => {
                        dialog.Hide();
                    }
                )

            })
    )
}
)


export const AddFolderDialog = (workspaceId: string, parent: string, path: string) => {
    if (workspaceId == null) {
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
                "workspaceId": {
                    "name": "workspaceId",
                    "type": "virtual",
                    "value": workspaceId
                },
                "path": {
                    "name": "path",
                    "type": "virtual",
                    "value": path
                },
                "folder_name": {
                    "label": "Name",
                    "type": "text",
                    "name": "name"
                },
                "parent": {
                    "name": "parent",
                    "type": "virtual",
                    "value": parent
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