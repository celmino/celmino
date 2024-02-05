import { ConfigContext, Fragment, HStack, ReactView, Text, UIController, UIView, UIWidget, VStack, cLeading, cTopLeading, nanoid, useConfig, useDialogStack, useRenderInfo, useState } from '@tuval/forms';


import React from 'react';
import { IConfig } from './IConfig';
import { WidgetController } from './WidgetController';
import { SelectViewDialog } from './dialogs/SelectViewDialog';
import { ActionPanel } from './views/ActionPanel';
import { FieldContainer } from './views/FieldContainer';
import { ObjectHeader } from './views/ObjectHeader';


export class MyTestController extends UIController {
    public override LoadView(): UIView {


        const info = useRenderInfo("App");

        const { objectId, fields, views = [], powerUps = [], selectedViewIndex = 0,objectViews = [],
            description = null, onDescriptionChange = void 0 }: IConfig = this.props.config || {};

      

        const { openDialog } = useDialogStack();

        const [widgetController, setWidgetController] = useState<any>({ controller: WidgetController });

        const _WidgetController = widgetController.controller;

        return (
           
            ConfigContext(() =>
                VStack({ alignment: cTopLeading })(
                    //    Text(JSON.stringify(description)),
                    ActionPanel(),
                    VStack({ alignment: cTopLeading })(
                        HStack({ alignment: cTopLeading, spacing: 12 })(
                            VStack({ alignment: cTopLeading })(
                                ObjectHeader(),
                                /* Text('open').onClick(() => {
                                    openDialog({
                                        title: 'Open',
                                        view: Text('hello')
                                    })
                                }), */
                                // Text(JSON.stringify(info)),
                                 HStack({ alignment: cLeading })(
                                    UIWidget('com.celmino.widget.tab-view')
                                        .config({
                                            allViews: views,
                                            views: objectViews,
                                            ////  isLoading: isTaskViewsLoading,
                                            //selectedIndex: taskViews?.findIndex(x => x.id === object_view_id),
                                            onChange: (index) => {
                                                //navigate(`${getViewUrl(access_type, team_id, applet_id, view_id)}/object/${objectId}/objectView/${taskViews[index].id}`)
                                                setWidgetController({
                                                    controller: class extends WidgetController { }
                                                });
                                               // setSelectedViewIndex(index)
                                            },
                                            actions: [
                                                {
                                                    title: 'View',
                                                    onClick: () => {
                                                        SelectViewDialog.Show(views, powerUps).then((view) => {
                                                          /*   createObjectView({
                                                                $id: nanoid(),
                                                                objectId: objectId,
                                                                name: view.name,
                                                                view: view.type,
                                                            }) */
                                                        });
                                                    }
                                                }
                                            ]
                                        })
                                )
                                    .allHeight(40)
                                    .overflowX('auto')
                                    .overflowY('hidden'), 

                                /* objectViews?.length > 0 ?

                                    ReactView(
                                        <_WidgetController
                                            objectId={objectId}
                                            view={objectViews?.[selectedViewIndex]?.view}
                                            defaultValue={selectedViewIndex === 0 ? description : objectViews?.[selectedViewIndex]?.data || {}}
                                            onChange={(data) => {
                                                if (selectedViewIndex === 0) {
                                                    onDescriptionChange(data);
                                                }
                                                else {
                                                   
                                                }
                                            }}
                                        ></_WidgetController>
                                    )


                                    : Fragment() */
                            )
                                .width(null)
                                .flexBasis('0')
                                .flexGrow('1')
                                .flexShrink('0')
                                .overflowX('auto'),
                            FieldContainer(fields)
                        )
                    ).padding('4px 36px 12px')



                )
            ).config(this.props.config)

        )
    }

}

