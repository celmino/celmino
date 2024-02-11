import { UIController, UINavigate, UIView } from "@tuval/forms";


export class RedirectToAppController extends UIController {
    public override LoadView(): UIView {
        return (
            UINavigate('/app')
        )
    }
}