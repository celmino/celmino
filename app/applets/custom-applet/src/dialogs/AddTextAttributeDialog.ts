import { useCreateCollection, Permission, Role, useCreateStringAttribute } from "@realmocean/sdk";
import { Button, FormBuilder, Text, UIViewBuilder, useDialog, useFormBuilder, useFormController, useNavigate } from "@tuval/forms";





export const SaveTextFieldAction = (formMeta, action) => UIViewBuilder(() => {
    const { label, successAction, successActions } = action;

    const formController = useFormController();
    const dialog = useDialog();
    const formBuilder = useFormBuilder();
    const navigate = useNavigate();

    const { databaseId, collectionId, name, workspaceId } = formController.GetFormData();

    const { createStringAttribute, isLoading } = useCreateStringAttribute(workspaceId);



    return (
        Button(
            Text('Save Field')
        )
            .loading(isLoading)
            .onClick(() => {

                if (databaseId == null) {
                    alert('Collection is null');
                    return;
                }

                createStringAttribute({
                    databaseId,
                    collectionId,
                    key: name,
                    required: false,
                    size: 255
                }, () => {
                    dialog.Hide();
                })
            })
    )
})



export const AddTextFieldDialog = (workspaceId: string, databaseId: string, collectionId: string) => ({
    "title": 'Add text field',
    "actions": [
        {
            "label": "Save",
            "type": "ca_saveTextField"
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
        "collectionId": {
            "name": "collectionId",
            "type": "virtual",
            "value": collectionId
        },
        "name": {
            "label": "Name",
            "type": "text",
            "name": "name"
        },
        "description": {
            "label": "Description",
            "type": "text",
            "multiline": true,
            "name": "description"
        },

    }
})

