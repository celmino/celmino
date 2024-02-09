import { UIController, UIView, HStack, cTopLeading, UIRouteOutlet } from "@tuval/forms";
import { LeftSideMenuView } from "../../*/views/LeftSideMenu";

export class WorkspaceController extends UIController {
    public override LoadView(): UIView {
        return (
             HStack({ alignment: cTopLeading })(
                LeftSideMenuView('Home'),
                UIRouteOutlet().width("100%").height("100%")
            ) 
        )
    }
}