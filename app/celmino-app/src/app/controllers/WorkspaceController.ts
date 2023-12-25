import { HStack, UIFormController, UIRouteOutlet, UIView, cTopLeading, useParams, Text } from "@tuval/forms";

export class WorkspaceController extends UIFormController {

    public override LoadView(): UIView {
        const {workspaceId} = useParams();
        return (
            HStack({ alignment: cTopLeading })(
             Text(workspaceId)
            )
        )

    }

}