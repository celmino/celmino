import { useCreateDocument } from "@realmocean/sdk";
import { UIViewBuilder, useFormController, useDialog, useFormBuilder, useNavigate, Button, Text } from "@tuval/forms";


export const SaveBoardAction = (formMeta, action) => UIViewBuilder(() => {
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
    const { workspaceId, appletId, listId } = formMeta;

    const { createDocument: createTreeItem } = useCreateDocument(workspaceId, appletId, 'wm_tree');
    const { createDocument: createView } = useCreateDocument(workspaceId, appletId, 'wm_list_' + listId + '_views');


    return (
        Button(
            Text('Save')
        )
            .onClick(() => {

                const data = { ...formController.GetFormData() }


                createView(
                    {
                        data: {
                            name: data.name,
                            type: data.type
                        }
                    },
                    (view) => {
                        createTreeItem({
                            documentId: view.$id,
                            data: {
                                ...data,
                                type: 'board',
                                viewer: 'com.tuvalsoft.viewer.document'
                            }
                        }, () => dialog.Hide())
                    }
                )

            })
    )
}
)


export const AddBoardDialog = (workspaceId: string, appletId: string, parent: string, path: string) => {
    if (workspaceId == null) {
        alert("spaceId is null")
    } else {
        return {
            "title": 'Create board view',
            workspaceId,
            appletId,
            listId: parent,
            /*   "mutation":"_create_workspace", */
            "actions": [
                {
                    "label": "Save",
                    "type": "wm_saveBoard",
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

                "board_name": {
                    "label": "name",
                    "type": "text",
                    "name": "name"
                },
                "type": {
                    "label": "type",
                    "type": "virtual",
                    "value": "com.celmino.view.taskboard"
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