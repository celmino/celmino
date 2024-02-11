import { Spinner, Text, UIController, UINavigate, UIView } from "@tuval/forms";
import { CreateWorkspaceView } from "../../../../views/CreateWorkspaceView";
import { useGetOrganizationId } from "../../../../hooks/useGetOrganizationId";


export class WorkspaceSelectController extends UIController {
    public override LoadView(): UIView {

        const { organizationId, isLoading } = useGetOrganizationId();
      
         return (
            isLoading ? Spinner() :
                organizationId == null ? UINavigate('/app/organization/select') :
                    CreateWorkspaceView()
        ) 
    }
}