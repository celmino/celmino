import { UIController, UIView } from "@tuval/forms";
import { CreateOrganizationView } from "../../../../views/CreateOrganizationView";


export class OrganizationSelectController extends UIController {
    public override LoadView(): UIView {
        return (
           CreateOrganizationView()
        )
    }
}