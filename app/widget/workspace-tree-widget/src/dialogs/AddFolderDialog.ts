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
    const { workspaceId, appletId } = formMeta;

    const { createDocument: createTreeItem } = useCreateDocument(workspaceId, appletId, 'wm_tree');
    const { createDocument, isLoading } = useCreateDocument(workspaceId, appletId, 'wm_folders');

    return (
        Button(
            Text('Save Folder')
        )
            .loading(isLoading)
            .onClick(() => {

                const data = { ...formController.GetFormData() }



                createDocument(
                    {

                        data: {
                            ...data
                        }
                    },
                    (folder) => {
                        createTreeItem({
                            documentId: folder.$id,
                            data: {
                                ...data,
                                type: 'folder'
                            }
                        }, () => dialog.Hide())

                    }
                )

            })
    )
}
)


export const AddFolderDialog = (workspaceId: string, appletId: string, parent: string, path: string) => {
    if (workspaceId == null) {
        alert("spaceId is null")
    } else {
        return {
            "title": 'Create folder',
            "workspaceId": workspaceId,
            "appletId": appletId,

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