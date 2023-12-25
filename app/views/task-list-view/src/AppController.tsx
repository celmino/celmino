import { cTopLeading, cVertical, getAppFullName, HStack, ReactView, ScrollView, Text, UIFormController,
     UIView, UIViewBuilder, UIWidget, useDialogStack, useNavigate, useParams, VStack } from '@tuval/forms';
import React from 'react';
//import './styles/global.scss';



import { DialogStack } from '@tuval/forms';
import { ActionPanel } from './views/ActionPanel';
import { ViewHeader } from './views/ViewHeader';
import { ID, Services, useCreateDocument, useCreateStringAttribute, useGetDocument, useListDocuments, useUpdateDocument } from '@realmocean/sdk';
//import { ActionPanel } from './views/ActionPanel';
//import { ViewHeader } from './views/ViewHeader';


export class MyTestController extends UIFormController {



    public override LoadView(): UIView {

        const navigate = useNavigate();

        const { workspaceId, listId, viewId } = useParams();

        const { document } = useGetDocument({
            projectId: workspaceId,
            databaseId: 'work_management',
            collectionId: 'wm_lists',
            documentId: listId
        });


        const { documents: attributes, isLoading } = useListDocuments(workspaceId, 'work_management', 'wm_list_' + listId + '_att');


        const { documents: views } = useListDocuments(workspaceId, 'work_management', 'wm_list_' + listId + '_views');
        const { documents: items, isLoading: isItemsLoading } = useListDocuments(workspaceId, 'work_management', 'wm_list_' + listId);

        const { createDocument: createTask } = useCreateDocument(workspaceId, 'work_management', 'wm_list_' + listId);
        const { createDocument: createView } = useCreateDocument(workspaceId, 'work_management', 'wm_list_' + listId + '_views');
        const { updateDocument } = useUpdateDocument(workspaceId);





        return (
            ReactView(
                <DialogStack>
                    {
                        VStack({ alignment: cTopLeading })(
                            ActionPanel(),
                            ViewHeader('test'),

                            ScrollView({ axes: cVertical, alignment: cTopLeading })(
                                VStack({ alignment: cTopLeading })(
                                    VStack({ alignment: cTopLeading })(

                                        VStack({ alignment: cTopLeading })(
                                            UIViewBuilder(() => {
                                                const { openDialog } = useDialogStack();
                                                return (
                                                    UIWidget('com.celmino.widget.list')
                                                        .config({
                                                            workspaceId: workspaceId,
                                                            listId: listId,
                                                            attributes: attributes,
                                                            groupBy: 'status',
                                                            onItemSave: (item) => {

                                                                return (
                                                                    new Promise((resolve) => {
                                                                        createTask({
                                                                            data: item
                                                                        }, () => {
                                                                            resolve(true);
                                                                            setTimeout(() =>
                                                                                navigate(`/app/${getAppFullName()}/workspace/${workspaceId}/applet/com.celmino.applet.work-management/list/${listId}/view/${viewId}`)
                                                                                , 1000)
                                                                        })
                                                                    })
                                                                )
                                                            },
                                                            onNewFieldAddded: async ({ name, type, key }) => {
                                                                // alert(JSON.stringify(field))
                                                                if (type == 'string') {
                                                                    await Services.Databases.createStringAttribute(workspaceId, 'work_management', 'wm_list_' + listId, key, 255, false);
                                                                    await Services.Databases.createDocument(workspaceId, 'work_management', 'wm_list_' + listId + '_att', ID.unique(), {
                                                                        name: name,
                                                                        key: key,
                                                                        type: 'string',
                                                                        hidden: false
                                                                    });
                                                                } else {
                                                                    await Services.Databases.createIntegerAttribute(workspaceId, 'work_management', 'wm_list_' + listId, key, false);
                                                                    await Services.Databases.createDocument(workspaceId, 'work_management', 'wm_list_' + listId + '_att', ID.unique(), {
                                                                        name: name,
                                                                        key: key,
                                                                        type: 'number',
                                                                        hidden: false
                                                                    });
                                                                }


                                                            },
                                                            onItemClick: (item) => {
                                                                openDialog({
                                                                    title: 'Open',
                                                                    view: UIWidget("com.celmino.widget.object-editor")
                                                                        .config({
                                                                            objectId: item.$id,
                                                                            views: [],
                                                                            //powerUps: PowerUps,
                                                                            // headerIcon: Icon(OkrIcons.KeyResultIcon({ width: 36, height: 36 })),
                                                                            header: item.name,
                                                                            onHeaderChange: (title) => { alert(title) },
                                                                            //description: metric?.description,
                                                                            onDescriptionChange: (description) => {
                                                                                /*  updateTask(object_id, {
                                                                                     description: description
                                                                                 }, {
                                                                                     onSuccess: () => {
                                                                                         invalidateCache();
                                                                                     }
                                                                                 }) */
                                                                            },
                                                                            fields: {
                                                                                "assignee": {
                                                                                    type: "user",
                                                                                    label: 'Assignee',
                                                                                },
                                                                                "title": {
                                                                                    type: "text",
                                                                                    label: "Title",
                                                                                    value: '',
                                                                                    onChange: (value) => {
                                                                                        alert(value)
                                                                                    }
                                                                                },
                                                                                "state": {
                                                                                    type: "select",
                                                                                    label: "State",
                                                                                    options: [],
                                                                                    value: null,
                                                                                    onChange: (value) => {
                                                                                        alert(value)
                                                                                    }
                                                                                }
                                                                            }
                                                                        })
                                                                })
                                                            },
                                                            items: items,
                                                            /*   stages: [{
                                                                  $id: 'AAA',
                                                                  name: 'Todo',
                                                                  color: '#FF0000:#00FF00'
                                                              }] */
                                                        })
                                                )
                                            })

                                        )
                                    )
                                )
                                    .cornerRadius(10),

                                HStack().height(50)
                            )
                        ).render()
                    }
                </DialogStack>
            )
        )




    }
}