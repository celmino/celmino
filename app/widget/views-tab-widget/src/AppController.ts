import { ForEach, HStack, Icon, Icons, Spinner, Text, UIController, UINavigate, UIView, WorkProtocol, cLeading, getAppFullName, nanoid, useNavigate, useProtocol, useState } from '@tuval/forms';
import { TabItem } from './views/TabItem';
import { SelectAnalyseDialog } from './SelectAnalyseDialog';
import { Query, useCreateView, useListViews } from '@celmino/sdk';


export class MyTestController extends UIController {

    public override LoadView(): UIView {
        const { applet_id, allViews, view_id, insightboards } = this.props.config || {};

        const [drag, setDrag] = useState(false);
        const navigate = useNavigate();

        const { views, isLoading } = useListViews(true, [
            Query.equal('appletId', applet_id)
        ]);

        const { createView } = useCreateView([]);

        const selectedIndex = views?.findIndex(view => view.$id === view_id);

        return (
            (isLoading) ? Spinner() :
                (view_id == null && views?.length > 0) ? (

                    UINavigate(`/app/${getAppFullName()}/${applet_id}/${views[0].$id}`)
                ) :

                    HStack({ alignment: cLeading })(
                        HStack({ alignment: cLeading })(
                            ...ForEach(views)((view, index) =>
                                TabItem(allViews, view, index, selectedIndex,
                                    () => navigate(`/app/${getAppFullName()}/${applet_id}/${view.$id}`),
                                    void 0)
                            ),
                            HStack({ spacing: 5 })(
                                Icon(Icons.Add).fontSize(10),
                                Text('View').lineHeight('1')
                            )
                                .width().height().cursor('pointer').padding(5)
                                .background({ hover: '#fafbfc' })
                                .onClick(() => {
                                    SelectAnalyseDialog.Show(allViews, insightboards).then((view) => {
                                        createView({
                                            $id: nanoid(),
                                            appletId: applet_id,
                                            name: view.name,
                                            view: view.type
                                        });

                                        /*   createView({
                                              tenant_id: tenant_id,
                                              app_id: app_id,
                                              account_id: account_id,
                                              workspace_id: workspace_id,
                                              folder_id: folder_id,
                                              applet_id: applet_id,
                                              view: view.type,
                                              title: view.name
                                          }, {
                                              onSuccess: (view) => {
                                                  invalidateResourceCache();
                                              }
                                          }) */
                                    })
                                })
                        ).width()
                    )

                        .border(drag ? 'solid 2px gray' : '')
                        .onDragEnter(() => {
                            console.log('drag enter');
                            setDrag(true);
                        })
                        .onDragLeave(() => {
                            setDrag(false);
                        })
                        .onDragOver((ev) => {
                            ev.preventDefault();
                        })
                        .onDrop((ev) => {
                            ev.preventDefault();
                            var data = ev.dataTransfer.getData("text");
                            console.log('drop', data);
                            setDrag(false);
                        })
        )
    }

}

