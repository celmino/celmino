import { useCreateDocument } from "@realmocean/sdk";
import { UIViewBuilder, useFormController, useDialog, useFormBuilder, useNavigate, Button, Text, FormBuilder } from "@tuval/forms";


export const AddAppletAction = (formMeta, action) => UIViewBuilder(() => {
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
    const { workspaceId } = formMeta;
    
    const { createDocument, isLoading } = useCreateDocument(workspaceId, 'workspace', 'applets');


    return (
        Button(
            Text('Save')
        )
            .loading(isLoading)
            .onClick(() => {

                const data = { ...formController.GetFormData() }

                createDocument(
                    {
                        data: {
                            name: data.name,
                            opa: 'com.celmino.widget.custom-applet-tree',
                            type: 'com.celmino.applet.custom',
                        }
                    }, () => dialog.Hide())

            })
    )
}
)


export const AddAppletDialog = (workspaceId: string) => {
    
    if (workspaceId == null) {
        alert("spaceId is null")
    } else {
        return {
            "title": 'Create applet',
            "workspaceId": workspaceId,

            "actions": [
                {
                    "label": "Add Applet",
                    "type": "ca_AddApplet",
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

                "name": {
                    "label": "name",
                    "type": "text",
                    "name": "name"
                },
                /*     "parent": {
                        "name": "parent",
                        "type": "virtual",
                        "value": parent
                    },
                    "path": {
                        "name": "path",
                        "type": "virtual",
                        "value": path
                    }, */


            }
        }
    }
}