import { UIController, UIRouteOutlet, UIView } from "@tuval/forms";
import { Guard } from "../../CelminoController";
//import { LoginGuard } from "../../guards/LoginGuard";


//@Guard(LoginGuard)
export class LayoutController extends UIController {
    public override LoadView(): UIView {
        return (
            UIRouteOutlet().width("100%").height("100%")
        )
    }
}
