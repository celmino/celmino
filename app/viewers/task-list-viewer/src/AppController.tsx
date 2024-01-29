import { UIController, UIView, useParams, Routes, Text, UIWidget, VStack, ReactView, DialogStack, Fragment, cTopLeading, useNavigate, HStack, ScrollView, UIViewBuilder, cVertical, useDialogStack } from "@tuval/forms";

import React from "react";
import { ID, Services, useCreateDocument, useGetDocument, useListDocuments, useUpdateDocument } from "@realmocean/sdk";
import { is } from "@tuval/core";
import { ActionPanel } from "./views/ActionPanel";
import { ViewHeader } from "./views/ViewHeader";




function replaceNonMatchingCharacters(originalText) {
    const replacementTable = {
        'ı': 'i',
        ' ':'_'
    };
    // Replacement table'ı kullanarak metindeki kriterlere uymayan karakterleri değiştir
    var replacedText = originalText.replace(/[^a-zA-Z0-9._-]/g, function (match) {
        return replacementTable[match] || match; // Eğer replacement table'da varsa değiştir, yoksa aynı karakteri koru
    });

    return replacedText;
}

export class MyTestController extends UIController {


    public override LoadView(): UIView {


        const { workspaceId, appletId, documentId } = this.props.config ?? {};

        const { document } = useGetDocument({
            projectId: workspaceId,
            databaseId: appletId,
            collectionId: 'wm_lists',
            documentId: documentId
        });


        const { documents: attributes, isLoading } = useListDocuments(workspaceId, appletId, 'wm_list_' + documentId + '_att');


        const { documents: views } = useListDocuments(workspaceId, appletId, 'wm_list_' + documentId + '_views');
        const { documents: items, isLoading: isItemsLoading } = useListDocuments(workspaceId, appletId, 'wm_list_' + documentId);

        const { createDocument: createTask } = useCreateDocument(workspaceId, appletId, 'wm_list_' + documentId);
        const { createDocument: createView } = useCreateDocument(workspaceId, appletId, 'wm_list_' + documentId + '_views');
        const { updateDocument } = useUpdateDocument(workspaceId);





        return (
            isLoading ? Fragment():
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
                                                listId: documentId,
                                                attributes: attributes,
                                                groupBy: 'status',
                                                onItemSave: (item) => {

                                                    return (
                                                        new Promise((resolve) => {
                                                            createTask({
                                                                data: item
                                                            }, () => {
                                                                resolve(true);
                                                              
                                                            })
                                                        })
                                                    )
                                                },
                                                onNewFieldAddded: async (formData) => {
                                                    // alert(JSON.stringify(type))
                                                    if (formData.type === 'text') {
                                                        await Services.Databases.createStringAttribute(workspaceId, appletId, 'wm_list_' + documentId, formData.key, 255, false);
                                                        await Services.Databases.createDocument(workspaceId, appletId, 'wm_list_' + documentId + '_att', ID.unique(), {
                                                            name: formData.name,
                                                            key: replaceNonMatchingCharacters(formData.name),
                                                            type: 'string',
                                                            hidden: false
                                                        });
                                                    } else if (formData.type === 'number') {
                                                        const key = replaceNonMatchingCharacters(formData.name);
                                                        console.log(key)
                                                        await Services.Databases.createIntegerAttribute(workspaceId, appletId, 'wm_list_' + documentId, key, false);
                                                        await Services.Databases.createDocument(workspaceId, appletId, 'wm_list_' + documentId + '_att', ID.unique(), {
                                                            name: formData.name,
                                                            key: key,
                                                            type: 'number',
                                                            hidden: false
                                                        });
                                                    } else if (formData.type === 'formula') {
                                                        await Services.Databases.createDocument(workspaceId, appletId, 'wm_list_' + documentId + '_att', ID.unique(), {
                                                            name: formData.name,
                                                            key: replaceNonMatchingCharacters(formData.name),
                                                            type: 'formula',
                                                            type_content: JSON.stringify({
                                                                expression: formData.formula
                                                            }),
                                                            hidden: false
                                                        });
                                                    }
                                                    else {
                                                        alert('field type not found')
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
                                                items: items ?? [],
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
            )
        )




    }

}