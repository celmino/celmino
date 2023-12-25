import { useCreateCollection, Permission, Role, useCreateStringAttribute, useCreateDatabase } from "@celmino/sdk";
import { Button, FormBuilder, Text, UIViewBuilder, useDialog, useFormBuilder, useFormController, useNavigate } from "@tuval/forms";





export const SaveAppletAction = (formMeta, action) => UIViewBuilder(() => {
    const { label, successAction, successActions } = action;
    const formController = useFormController();
    const dialog = useDialog();
    const formBuilder = useFormBuilder();
    const navigate = useNavigate();

    const { name, workspaceId } = formController.GetFormData();
    const { createStringAttribute, isLoading } = useCreateStringAttribute(workspaceId);
    const { createDatabase } = useCreateDatabase(workspaceId);


    return (
        Button(
            Text('Save Applet')
        )
            .loading(isLoading)
            .onClick(() => {

                if (name == null) {
                    alert('Name must be not null.');
                    return;
                }
                createDatabase({
                    name: name,
                    category: 'applet',
                    enabled: true
                })
            })
    )
})



export const AddAppletDialog = (workspaceId: string) => ({
    "title": 'Add applet',
    "actions": [
        {
            "label": "Save",
            "type": "saveApplet"
        }
    ],
    "fieldMap": {
        "workspaceId": {
            "name": "workspaceId",
            "type": "virtual",
            "value": workspaceId
        },
       /*  "databaseId": {
            "name": "databaseId",
            "type": "virtual",
            "value": databaseId
        },
        "collectionId": {
            "name": "collectionId",
            "type": "virtual",
            "value": collectionId
        }, */
        "name": {
            "label": "Name",
            "type": "text",
            "name": "name"
        },
        /*  "description": {
             "label": "Description",
             "type": "text",
             "multiline": true,
             "name": "description"
         }, */

    }
})

