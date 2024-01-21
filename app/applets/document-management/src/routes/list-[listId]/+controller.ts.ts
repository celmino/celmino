import {
    Fragment,
    HStack,
    SvgIcon,
    UIFormController,
    UIRouteOutlet,
    UIWidget,
    VStack,
    cLeading, cTopLeading,
    getAppFullName,
    useNavigate,
    useParams
} from "@tuval/forms";

import { useCreateDocument, useGetDocument, useListDocuments, useUpdateDocument } from "@realmocean/sdk";
import { DynoDialog } from "../../dialogs/DynoDialog";
import { ListStatusesDialog } from "../../dialogs/ListStatusesDialog";
import { SelectViewDialog } from "../../dialogs/SelectViewDialog";



export class ListController extends UIFormController {


    public LoadView() {
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
        const { documents: items, isLoading: isItemsLoading } = useListDocuments(workspaceId, appletId, 'wm_list_' + listId);

        const { createDocument: createTask } = useCreateDocument(workspaceId, appletId, 'wm_list_' + listId);
        const { createDocument: createView } = useCreateDocument(workspaceId, appletId, 'wm_list_' + listId + '_views');
        const { updateDocument } = useUpdateDocument(workspaceId);



        return (
            (isLoading || isItemsLoading) ? Fragment() :

                VStack({ alignment: cTopLeading })(

                    //  ActionPanel(),
                    HStack({ alignment: cLeading })(
                        HStack(
                            UIWidget('com.celmino.widget.applet-name')
                                .config({
                                    title: document?.name,
                                    iconName: document?.icon_name,
                                    iconCategory: document?.icon_category,
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
                            .allHeight(50),

                        HStack({ alignment: cLeading })(
                            UIWidget('com.celmino.widget.tab-view')
                                .config({
                                    views: views,
                                    onChange: (index) => {
                                        navigate(`/workspace/${workspaceId}/applet/com.celmino.applet.workmanagement/list/${listId}/view/${views[index]?.$id}`);

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
                            .background('white')
                            .borderTop('1px solid rgba(0,0,0,.05)')
                            .borderBottom('1px solid rgba(0,0,0,.05)')
                        ,


                    )
                        .height(50)
                        .background('white')
                        .borderBottom('solid 1px #E8EAED'),

                    UIRouteOutlet().width('100%').height('100%')
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