import { UIController, UIView, VStack, Text, UIRouteOutlet, HStack, cTopLeading, UIFormController, ReactView } from '@tuval/forms';
import { LeftSideMenuView } from '../views/LeftSideMenu';




export class WorkspaceLayoutController extends UIFormController {

    public override LoadView(): UIView {
        return (
            HStack({ alignment: cTopLeading })(
                LeftSideMenuView('Home'),
                UIRouteOutlet().width("100%").height("100%")
            )
        )

    }

}