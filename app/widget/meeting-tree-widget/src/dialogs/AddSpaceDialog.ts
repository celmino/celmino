import { useCreateDocument, Permission, Role } from "@realmocean/sdk";
import { UIViewBuilder, useFormController, useDialog, useFormBuilder, useNavigate, Button, Text } from "@tuval/forms";

export const SaveSpaceAction = (formMeta, action) => UIViewBuilder(() => {
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
    const { databaseId, collectionId, workspaceId,appletId } = formController.GetFormData();

    const { createDocument: createTreeItem } = useCreateDocument(workspaceId,appletId, 'wm_tree');
    const { createDocument, isLoading } = useCreateDocument(workspaceId,appletId, 'wm_spaces');
   
   
    return (
        Button(
            Text('Save Space')
        )
            .loading(isLoading)
            .onClick(() => {


                const data = { ...formController.GetFormData() }
                delete data.databaseId;
                delete data.collectionId;
                delete data.workspaceId;
                delete data.appletId;

                
                createDocument(
                    {
                        data: {
                            ...data
                        }
                    },
                    (space) => {
                        createTreeItem({
                            documentId: space.$id,
                            data: {
                                ...data,
                                parent:'-1',
                                type: 'space'
                            }
                        }, ()=>  dialog.Hide())
                       
                    }
                )

            })
    )
}
)
export const AddSpaceDialog = (workspaceId: string,appletId: string, path: string) => ({
    "title": 'Create space',
    /*   "mutation":"_create_workspace", */
    "actions": [
        {
            "label": "Save",
            "type": "saveSpace"
        }
    ],
    "fieldMap": {
        "workspaceId": {
            "name": "workspaceId",
            "type": "virtual",
            "value": workspaceId
        },
        "appletId": {
            "name": "appletId",
            "type": "virtual",
            "value": appletId
        },
        "path": {
            "name": "path",
            "type": "virtual",
            "value": path
        },
        "space_name": {
            "label": "Name",
            "type": "text",
            "name": "name"
        },
      /*   "description": {
            "label": "Description",
            "type": "text",
            "multiline": true,
            "name": "description"
        }, */

    }
})

