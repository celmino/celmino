import { useGetProject } from "@realmocean/sdk";
import { HStack, Text, UIController, UIRouteOutlet, UIView, useParams } from "@tuval/forms";


export class WorkspaceController extends UIController {
    public override LoadView(): UIView {
        const { project_id } = useParams();
       
        return (
            HStack(
                UIRouteOutlet().width("100%").height("100%")
            )
        )
    }
}