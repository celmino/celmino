import { OptionsContext, Text, UIController, UIView, VStack, cTopLeading } 
from '@tuval/forms';

import { LeftSideMenuView } from './views/WorkspaceTree';




export class MyTestController extends UIController {

    public override LoadView(): UIView {

        const { items } = this.props.data || {};
        const { selectedItem, team_id, workspaceId, folder_id, applet_id, showAllWorkspaces, opas, 
            folder_menu, app_id } = this.props.config || {};

        


        return (
            OptionsContext(() => (
                LeftSideMenuView(selectedItem)
            ))
                .options({
                    team_id,
                    workspaceId,
                    folder_id,
                    applet_id,
                    showAllWorkspaces,
                    opas,
                    folder_menu,
                    app_id
                })
        )
    }
}

