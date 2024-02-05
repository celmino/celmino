import {
    DialogStack,
    Fragment,
    HStack,
    ReactView,
    ScrollView,
    SvgIcon,
    Text,
    UIFormController,
    UINavigate,
    UIRouteOutlet,
    UIViewBuilder,
    UIWidget,
    VStack,
    cLeading, cTopLeading,
    cVertical,
    getAppFullName,
    useDialogStack,
    useNavigate,
    useParams
} from "@tuval/forms";

import { UIDocuments } from '@realmocean/ui';

import { ID, Services, useCreateDocument, useGetDocument, useListDocuments, useUpdateDocument } from "@realmocean/sdk";
import { DynoDialog } from "../../dialogs/DynoDialog";
import { ListStatusesDialog } from "../../dialogs/ListStatusesDialog";
import { SelectViewDialog } from "../../dialogs/SelectViewDialog";
import { ActionPanel } from "../../views/ActionPanel";
import { ViewHeader } from "../../views/ViewHeader";
import React from "react";

function replaceNonMatchingCharacters(originalText) {
    const replacementTable = {
        'ı': 'i',
        ' ': '_'
    };
    // Replacement table'ı kullanarak metindeki kriterlere uymayan karakterleri değiştir
    var replacedText = originalText.replace(/[^a-zA-Z0-9._-]/g, function (match) {
        return replacementTable[match] || match; // Eğer replacement table'da varsa değiştir, yoksa aynı karakteri koru
    });

    return replacedText;
}

export class ListController extends UIFormController {


    public LoadView() {
        const navigate = useNavigate();

        const { workspaceId, appletId, listId, viewId } = useParams();

        const { document: list } = useGetDocument({
            projectId: workspaceId,
            databaseId: appletId,
            collectionId: 'wm_lists',
            documentId: listId
        });

        const { documents: views, isLoading: isViewsLoading } = useListDocuments(workspaceId, appletId, 'wm_list_' + listId + '_views');
        const { documents: items, isLoading: isItemsLoading } = useListDocuments(workspaceId, appletId, 'wm_list_' + listId);

        const { documents: attributes, isLoading } = useListDocuments(workspaceId, appletId, 'wm_list_' + listId + '_att');



        const { createDocument: createTask } = useCreateDocument(workspaceId, appletId, 'wm_list_' + listId);
        const { createDocument: createView } = useCreateDocument(workspaceId, appletId, 'wm_list_' + listId + '_views');
        const { updateDocument } = useUpdateDocument(workspaceId);



        return (

            (viewId == null && list?.defaultViewId != null) ?    VStack({ alignment: cTopLeading })(
                //ActionPanel(),
                //ViewHeader('test'),

                ScrollView({ axes: cVertical, alignment: cTopLeading })(
                    VStack({ alignment: cTopLeading })(
                        ActionPanel(),
                        ViewHeader(list?.name),
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
                                                                    navigate(`/app/workspace/${workspaceId}/applet/${appletId}/list/${listId}/view/${viewId}`)
                                                                    , 1000)
                                                            })
                                                        })
                                                    )
                                                },
                                                onNewFieldAddded: async (formData) => {
                                                    // alert(JSON.stringify(type))
                                                    if (formData.type === 'text') {
                                                        await Services.Databases.createStringAttribute(workspaceId, appletId, 'wm_list_' + listId, formData.key, 255, false);
                                                        await Services.Databases.createDocument(workspaceId, appletId, 'wm_list_' + listId + '_att', ID.unique(), {
                                                            name: formData.name,
                                                            key: replaceNonMatchingCharacters(formData.name),
                                                            type: 'string',
                                                            hidden: false
                                                        });
                                                    } else if (formData.type === 'number') {
                                                        const key = replaceNonMatchingCharacters(formData.name);
                                                        console.log(key)
                                                        await Services.Databases.createIntegerAttribute(workspaceId, appletId, 'wm_list_' + listId, key, false);
                                                        await Services.Databases.createDocument(workspaceId, appletId, 'wm_list_' + listId + '_att', ID.unique(), {
                                                            name: formData.name,
                                                            key: key,
                                                            type: 'number',
                                                            hidden: false
                                                        });
                                                    } else if (formData.type === 'formula') {
                                                        await Services.Databases.createDocument(workspaceId, appletId, 'wm_list_' + listId + '_att', ID.unique(), {
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
                    ).background('#F9FAFB')
                )

            ) /* UINavigate(`/app/workspace/${workspaceId}/applet/${appletId}/list/${listId}/view/${list?.defaultViewId}`) */ :
                ReactView(
                    <DialogStack>
                        {
                            VStack({ alignment: cTopLeading })(
                                ActionPanel(),
                                ViewHeader(list?.name),
                                HStack({ alignment: cLeading })(
                                    /*  HStack(
                                         UIWidget('com.celmino.widget.applet-name')
                                             .config({
                                                 title: list?.name,
                                                 iconName: list?.icon_name,
                                                 iconCategory: list?.icon_category,
                                                 iconColor: 'gray',
                                                 onChange: (value) => {
                                                     updateDocument({
                                                         databaseId: appletId,
                                                         collectionId: 'wm_lists',
                                                         documentId: listId,
                                                         data: {
                                                             ...(value.iconName ? { icon_name: value.iconName } : {}),
                                                             ...(value.iconCategory ? { icon_category: value.iconCategory } : {})
                                                         }
                                                     })
                                                     console.log(value);
                                                 },
                                                 menu: [
                                                     {
                                                         title: 'List Settings',
                                                         type: 'Title'
                                                     },
                                                     {
                                                         title: 'List statuses',
                                                         icon: SvgIcon('svg-sprite-global__status'),
         
                                                         onClick: () => {
                                                             DynoDialog.Show(ListStatusesDialog)
                                                         }
         
                                                     },
                                                     {
                                                         title: 'Custom fields',
                                                         icon: SvgIcon('svg-sprite-global__status'),
                                                         items: [
                                                             {
                                                                 title: 'Dropdown',
                                                                 icon: SvgIcon('svg-sprite-field-drop_down'),
                                                             },
                                                             {
                                                                 title: 'Text',
                                                                 icon: SvgIcon('svg-sprite-field-short_text'),
                                                                 onClick: () => {
         
                                                                 }
                                                             },
                                                             {
                                                                 title: 'Text area',
                                                                 icon: SvgIcon('svg-sprite-field-text'),
                                                             },
                                                             {
                                                                 title: 'Date',
                                                                 icon: SvgIcon('svg-sprite-field-date'),
                                                             },
                                                             {
                                                                 title: 'Progress',
                                                                 icon: SvgIcon('svg-sprite-field-automatic_progress')
                                                             },
                                                             {
                                                                 title: 'Number',
                                                                 icon: SvgIcon('svg-sprite-field-number'),
                                                                 onClick: () => {
         
                                                                 }
                                                             },
                                                             {
                                                                 title: 'Checkbox',
                                                                 icon: SvgIcon('svg-sprite-field-checkbox'),
                                                             },
                                                             {
                                                                 title: "Email",
                                                                 icon: SvgIcon('svg-sprite-field-email'),
                                                             },
                                                             {
                                                                 title: "Files",
                                                                 icon: SvgIcon('svg-sprite-field-attachment'),
                                                             },
                                                             {
                                                                 title: "Formula",
                                                                 icon: SvgIcon('svg-sprite-field-formula'),
                                                             },
                                                             {
                                                                 title: "Labels",
                                                                 icon: SvgIcon('svg-sprite-field-labels'),
                                                             },
                                                             {
                                                                 title: "Location",
                                                                 icon: SvgIcon('svg-sprite-field-location'),
                                                             },
                                                             {
                                                                 title: "Money",
                                                                 icon: SvgIcon('svg-sprite-field-currency'),
                                                             },
                                                             {
                                                                 title: "People",
                                                                 icon: SvgIcon('svg-sprite-field-users'),
                                                             },
                                                             {
                                                                 title: "Phone",
                                                                 icon: SvgIcon('svg-sprite-field-phone'),
                                                             },
                                                             {
                                                                 title: "Progress (manuel)",
                                                                 icon: SvgIcon('svg-sprite-field-manual_progress'),
                                                             },
                                                             {
                                                                 title: "Rating",
                                                                 icon: SvgIcon('svg-sprite-field-emoji')
                                                             },
                                                             {
                                                                 title: "Relationship",
                                                                 icon: SvgIcon('svg-sprite-field-list_relationship'),
                                                             },
                                                             {
                                                                 title: "Rollup",
                                                                 icon: SvgIcon('svg-sprite-rollup-column'),
                                                             },
                                                             {
                                                                 title: "Website",
                                                                 icon: SvgIcon('svg-sprite-field-url'),
                                                             }
                                                         ]
         
                                                     }
                                                 ]
                                             })
                                     )
                                         .overflow('hidden')
                                         .width()
                                         .allHeight(50), */

                                    /* HStack({ alignment: cLeading })(
                                        UIWidget('com.celmino.widget.tab-view')
                                            .config({
                                                views: views,
                                                onChange: (index) => {
                                                    navigate(`/app/workspace/${workspaceId}/applet/${appletId}/list/${listId}/view/${views[index]?.$id}`);

                                                },
                                                actions: [
                                                    {
                                                        title: 'New View',
                                                        onClick: () => {
                                                            SelectViewDialog.Show(workspaceId, listId).then((view) => {
                                                                createView({
                                                                    data: {
                                                                        name: view.name,
                                                                        type: view.type
                                                                    }
                                                                });
                                                            });
                                                        }
                                                    }
                                                ]
                                            })
                                    )
                                        .background('white') */
                                       // .borderTop('1px solid rgba(0,0,0,.05)')
                                      //  .borderBottom('1px solid rgba(0,0,0,.05)')
                                    


                                )
                                    .height(50)
                                    .background('white')
                                    .borderBottom('solid 1px #E8EAED'),

                                UIRouteOutlet().width('100%').height('100%')
                            )
                            .cornerRadius(10)
                            .overflow('hidden')
                            .render()
                        }
                    </DialogStack>
                )



        )
    }

}
/* export class MyTestController extends UIFormController {
    LoadView(): UIView {
         const { applet_id } = useParams();
        const { createTask } = useCreateTask([]);
       const { tasks } = useListTasks();

       // const {stageSets} = useListTaskStageSets(); 
        return (
            
            // Text(JSON.stringify(stageSets)),
            Text(JSON.stringify(tasks))
                .onClick(() => {
                    createTask({
                        appletId: applet_id,
                        $id: ID.unique(),
                        title: 'Hello world',
                        

                    })
                })
 
        )
    }
} */