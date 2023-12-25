import { useCreateCollection, Permission, Role, useCreateStringAttribute, useCreateIntegerAttribute } from "@celmino/sdk";
import { Button, FormBuilder, Text, UIViewBuilder, useDialog, useFormBuilder, useFormController, useNavigate } from "@tuval/forms";





export const SaveNumberFieldAction = (formMeta, action) => UIViewBuilder(() => {
    const { label, successAction, successActions } = action;
    const formController = useFormController();
    const dialog = useDialog();
    const formBuilder = useFormBuilder();
    const navigate = useNavigate();

    const { databaseId, collectionId, name, workspaceId } = formController.GetFormData();
    const { createIntegerAttribute, isLoading } = useCreateIntegerAttribute(workspaceId);



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

                createIntegerAttribute({
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



export const AddNumberFieldDialog = (workspaceId: string, databaseId: string, collectionId: string) => ({
    "title": 'Add number field',
    "actions": [
        {
            "label": "Save",
            "type": "saveNumberField"
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

