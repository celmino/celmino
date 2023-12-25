import { useCreateCollection, Permission, Role, useCreateStringAttribute, useCreateIntegerAttribute, useCreateBooleanAttribute } from "@celmino/sdk";
import { Button, FormBuilder, Text, UIViewBuilder, useDialog, useFormBuilder, useFormController, useNavigate } from "@tuval/forms";



export const SaveBooleanFieldAction = (formMeta, action) => UIViewBuilder(() => {
    const { label, successAction, successActions } = action;
    const formController = useFormController();
    const dialog = useDialog();
    const formBuilder = useFormBuilder();
    const navigate = useNavigate();

    const { databaseId, collectionId, name, workspaceId } = formController.GetFormData();
    const { createBooleanAttribute, isLoading } = useCreateBooleanAttribute(workspaceId);



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

                createBooleanAttribute({
                    databaseId,
                    collectionId,
                    key: name,
                    required: false
                }, () => {
                    dialog.Hide();
                })
            })
    )
})



export const AddBooleanFieldDialog = (workspaceId: string, databaseId: string, collectionId: string) => ({
    "title": 'Add boolean field',
    "actions": [
        {
            "label": "Save",
            "type": "saveBooleanField"
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

