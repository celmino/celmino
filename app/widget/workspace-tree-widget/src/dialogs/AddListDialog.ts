import { ID, Service, Services, useCreateDocument } from "@realmocean/sdk";
import {
    Button,
    Text,
    UIViewBuilder,
    nanoid,
    useDialog, useFormBuilder, useFormController, useNavigate
} from "@tuval/forms";


export const SaveListAction = (formMeta, action) => UIViewBuilder(() => {
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
    const { databaseId, collectionId, workspaceId, appletId } = formController.GetFormData();

    const { createDocument: createTreeItem } = useCreateDocument(workspaceId, appletId, 'wm_tree');
    const { createDocument, isLoading } = useCreateDocument(workspaceId, appletId, 'wm_lists');

    return (
        Button(
            Text('Save List')
        )
            .loading(isLoading)
            .onClick(() => {

                const data = { ...formController.GetFormData() }
                delete data.databaseId;
                delete data.collectionId;
                delete data.workspaceId;
                delete data.appletId;

                data['defaultViewId'] = nanoid();

                createDocument(
                    {
                        data: {
                            ...data
                        }
                    },
                    async (list) => {
                        await Services.Databases.createCollection(workspaceId, appletId, 'wm_list_' + list.$id, list.name);
                        await Services.Databases.createCollection(workspaceId, appletId, 'wm_list_' + list.$id + '_stages', list.name + '_stages');
                        await Services.Databases.createCollection(workspaceId, appletId, 'wm_list_' + list.$id + '_views', list.name + '_views');
                        await Services.Databases.createCollection(workspaceId, appletId, 'wm_list_' + list.$id + '_att', list.name + '_attributes');


                        setTimeout(async () => {
                            // Create default list attributes
                            await Services.Databases.createStringAttribute(workspaceId, appletId, 'wm_list_' + list.$id, 'name', 255, false);
                            await Services.Databases.createStringAttribute(workspaceId, appletId, 'wm_list_' + list.$id, 'description', 16777216, false);
                            await Services.Databases.createStringAttribute(workspaceId, appletId, 'wm_list_' + list.$id, 'mark', 10, false);
                            await Services.Databases.createStringAttribute(workspaceId, appletId, 'wm_list_' + list.$id, 'status', 255, false);

                            // Create default list view attributes
                            await Services.Databases.createStringAttribute(workspaceId, appletId, 'wm_list_' + list.$id + '_views', 'name', 255, false);
                            await Services.Databases.createStringAttribute(workspaceId, appletId, 'wm_list_' + list.$id + '_views', 'type', 255, false);

                            // Create default list  attribute fields
                            await Services.Databases.createStringAttribute(workspaceId, appletId, 'wm_list_' + list.$id + '_att', 'name', 255, false);
                            await Services.Databases.createStringAttribute(workspaceId, appletId, 'wm_list_' + list.$id + '_att', 'key', 255, false);
                            await Services.Databases.createStringAttribute(workspaceId, appletId, 'wm_list_' + list.$id + '_att', 'type', 255, false);
                            await Services.Databases.createStringAttribute(workspaceId, appletId, 'wm_list_' + list.$id + '_att', 'type_content', 16777216, false);
                            await Services.Databases.createBooleanAttribute(workspaceId, appletId, 'wm_list_' + list.$id + '_att', 'hidden', false);
                            await Services.Databases.createIntegerAttribute(workspaceId, appletId, 'wm_list_' + list.$id + '_att', 'order', false);


                            setTimeout(async () => {
                                const view = await Services.Databases.createDocument(workspaceId, appletId, 'wm_list_' + list.$id + '_views', data['defaultViewId'], {
                                    name: 'List',
                                    type: 'com.celmino.view.tasklist'
                                });


                                

                                await Services.Databases.createDocument(workspaceId, appletId, 'wm_list_' + list.$id + '_att', ID.unique(), {
                                    name: 'Name',
                                    key: 'name',
                                    type: 'string',
                                    hidden: false
                                });

                                await Services.Databases.createDocument(workspaceId, appletId, 'wm_list_' + list.$id + '_att', ID.unique(), {
                                    name: 'Description',
                                    key: 'description',
                                    type: 'string',
                                    hidden: false
                                });
                                await Services.Databases.createDocument(workspaceId, appletId, 'wm_list_' + list.$id + '_att', ID.unique(), {
                                    name: 'Mark',
                                    key: 'mark',
                                    type: 'string',
                                    hidden: true
                                });
                                await Services.Databases.createDocument(workspaceId, appletId, 'wm_list_' + list.$id + '_att', ID.unique(), {
                                    name: 'Status',
                                    key: 'status',
                                    type: 'dropdown',
                                    type_content: JSON.stringify({
                                        options: [
                                            {
                                                $id: 'open',
                                                name: 'Open',
                                                fgColor: 'white',
                                                bgColor: 'green'
                                            },
                                            {
                                                $id: 'closed',
                                                name: 'Closed',
                                                fgColor: 'white',
                                                bgColor: 'red'
                                            }
                                        ]
                                    }),
                                    hidden: true
                                });


                                delete data['defaultViewId'];

                                createTreeItem({
                                    documentId: list.$id,
                                    data: {
                                        ...data,
                                        type: 'list',
                                        viewer:'com.tuvalsoft.viewer.tasklist'
                                    }
                                }, () => dialog.Hide())


                            }, 1000);

                        }, 1000);












                    }
                )

            })
    )
})


export const AddListDialog = (workspaceId: string,appletId: string, parent: string, path: string) => {
    if (workspaceId == null) {
        alert("spaceId is null")
    } else {
        return {
            "title": 'Create List',
            /*   "mutation":"_create_workspace", */
            "actions": [
                {
                    "label": "Save",
                    "type": "saveList",
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
                "appletId": {
                    "name": "appletId",
                    "type": "virtual",
                    "value": appletId
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