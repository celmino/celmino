import { UIController, UIView, VStack, Text, UIRouteOutlet, HStack, cTopLeading, UIFormController, ReactView, DialogStack } from '@tuval/forms';
import { LeftSideMenuView } from '../views/LeftSideMenu';
import React from 'react';




export class WorkspaceLayoutController extends UIFormController {

    public override LoadView(): UIView {
        return (

            HStack({ alignment: cTopLeading })(
                LeftSideMenuView('Home'),
                HStack(
                    ReactView(
                        <DialogStack>
                            {

                                UIRouteOutlet().width("100%").height("100%").render()

                            }
                        </DialogStack>
                    )
                )
            )
        )
    }

}