import { Query, useListRealms } from "@realmocean/sdk";
import { Fragment, Text, UIController, UIView, UIViewBuilder } from "@tuval/forms";
import { CreateWorkspaceView } from "../../views/CreateWorkspaceView";
import { useGetCurrentOrganization } from "../../hooks/useGetCurrentOrganization";
import { CelminoController, Guard } from "../../CelminoController";
import { DefaultWorkspaceGuard } from "../../guards/WokspaceGuard";

@Guard(DefaultWorkspaceGuard)
export class DefaultWorkspaceController extends CelminoController {
    public override LoadView(): UIView {
        return (
          Text('Default page')
        )
    }
}
