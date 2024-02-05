import { cTopLeading, cVertical, HStack, ReactView, ScrollView, Text, UIFormController, UIView, UIViewBuilder, UIWidget, useDialogStack, useNavigate, useParams, VStack } from '@tuval/forms';
import React from 'react';
//import './styles/global.scss';



import { DialogStack } from '@tuval/forms';
import { ActionPanel } from './views/ActionPanel';
import { ViewHeader } from './views/ViewHeader';
import { useCreateDocument, useGetDocument, useListDocuments, useUpdateDocument } from '@realmocean/sdk';
//import { ActionPanel } from './views/ActionPanel';
//import { ViewHeader } from './views/ViewHeader';


export class MyTestController extends UIFormController {



    public override LoadView(): UIView {

        const navigate = useNavigate();

        const { workspaceId,appletId, listId, viewId } = useParams();

        const { document } = useGetDocument({
            projectId: workspaceId,
            databaseId: appletId,
            collectionId: 'wm_lists',
            documentId: listId
        });


        const { documents: attributes, isLoading } = useListDocuments(workspaceId, appletId, 'wm_list_' + listId + '_att');


        const { documents: views } = useListDocuments(workspaceId, appletId, 'wm_list_' + listId + '_views');
        const { documents: items, isLoading: isItemsLoading } = useListDocuments(workspaceId,appletId, 'wm_list_' + listId);

        const { createDocument: createTask } = useCreateDocument(workspaceId, appletId, 'wm_list_' + listId);
        const { createDocument: createView } = useCreateDocument(workspaceId, appletId, 'wm_list_' + listId + '_views');
        const { updateDocument } = useUpdateDocument(workspaceId);



        return (
            ReactView(
                <DialogStack>
                    {
                        VStack({ alignment: cTopLeading })(
                           
                            ScrollView({ axes: cVertical, alignment: cTopLeading })(
                                VStack({ alignment: cTopLeading })(
                                    VStack({ alignment: cTopLeading })(

                                        VStack({ alignment: cTopLeading })(
                                            UIViewBuilder(() => {
                                                const { openDialog } = useDialogStack();
                                                return (
                                                    UIWidget('com.celmino.widget.board')
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
                                                                        }, () => resolve(true))
                                                                    })
                                                                )
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