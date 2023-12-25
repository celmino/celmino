import { HStack, Text, UIFormController, UIRouteOutlet, UIView, UIWidget, VStack, cLeading, cTopLeading, getAppFullName, useNavigate, useParams, useState } from '@tuval/forms';

import {
    Models,
    useCreateCollection,
    useGetDatabase,
    useListCollections
} from '@celmino/sdk';
import { DynoDialog } from '@celmino/ui';
import { AddCollectionDialog } from '../dialogs/AddCollection/AddCollectionDialog';





export class DatabaseController extends UIFormController {
    public override LoadView(): UIView {
        const { workspaceId, databaseId } = useParams();
        const { database } = useGetDatabase(workspaceId, databaseId);
        const { createCollection } = useCreateCollection(workspaceId);
        const { collections } = useListCollections(workspaceId, databaseId);

        const [selectedCollection, setSelectedCollection] = useState<Models.Collection>(null);

        const navigate = useNavigate();
        return (
            VStack({ alignment: cTopLeading })(
                HStack(
                    HStack({ alignment: cLeading })(
                        Text(database?.name)
                            .fontFamily("ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol")
                            .fontSize(18)
                            .fontWeight("500")
                    )
                        .padding('6px 12px 6px 6px')
                )
                    .paddingTop('12px')
                    .paddingBottom('8px')
                    .paddingRight('24px')

                    .background('white')
                    .height(),

                HStack({ alignment: cLeading })(
                    UIWidget('com.celmino.widget.tab-view')
                        .config({
                            //  allViews: views,
                            views: collections ?? [],
                            ////  isLoading: isTaskViewsLoading,
                            //selectedIndex: taskViews?.findIndex(x => x.id === object_view_id),
                            onChange: (index) => {
                                setSelectedCollection(collections[index]);
                                navigate(`/app/${getAppFullName()}/workspace/${workspaceId}/database/${databaseId}/${collections[index].$id}`)
                                /*    setWidgetController({
                                       controller: class extends WidgetController { }
                                   });
                                   setSelectedViewIndex(index) */
                            },
                            actions: [
                                {
                                    title: 'New Collection',
                                    onClick: () => {
                                        DynoDialog.Show(AddCollectionDialog(workspaceId, databaseId));
                                        /*  SelectViewDialog.Show(views, powerUps).then((view) => {
                                             createObjectView({
                                                 $id: nanoid(),
                                                 objectId: objectId,
                                                 name: view.name,
                                                 view: view.type,
                                             })
                                         }); */
                                    }
                                }
                            ]
                        })
                )
                    .background('white')
                    .borderTop('1px solid rgba(0,0,0,.05)')
                    .borderBottom('1px solid rgba(0,0,0,.05)')
                    .height(50),
                //Text(JSON.stringify(collections)),


                UIRouteOutlet().width('100%').height('100%')

            )
        )
    }
}