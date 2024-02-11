import { ID, Models, Services, useCreateDatabase, useCreateRealm } from "@realmocean/sdk";
import { ButtonRenderer, InputRenderer } from "@realmocean/antd";
import { HStack, UIFormController, UIRouteOutlet, UIView, cTopLeading, useParams, Text, VStack, Input, Button, useState, useNavigate } from "@tuval/forms";
import { CreateWorkspaceView } from "../../../../views/CreateWorkspaceView";

export class OrganizationController extends UIFormController {

    public override LoadView(): UIView {
        const { organizationId } = useParams();
        const [workspaceName, setWorkspaceName] = useState();
        const { createRealm } = useCreateRealm();
        const navigate = useNavigate();

        return (
            CreateWorkspaceView()
         /*    VStack({ alignment: cTopLeading })(
                Input().renderer(InputRenderer).onChange((e: any) => {
                    setWorkspaceName(e.target.value)
                }),
                Button().renderer(ButtonRenderer).label('Submit')
                .onClick(async () => {
                    createRealm({
                        name: workspaceName,
                        organizationId: organizationId,
                    }, async (workspace) => {


                        const database = await Services.Databases.create(workspace.$id, 'workspace', 'Workspace', 'workspace');
                        const appletCol = await Services.Databases.createCollection(workspace.$id, database.$id, 'applets', 'Applets');
                        const nameAttr = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'name', 255, false);
                        const opaAttr = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'opa', 255, false);
                        const typeAttr = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'type', 255, false);
                        const iconName = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'iconName', 255, false);
                        const iconCategory = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'iconCategory', 255, false);


                        navigate(`/app/workspace/${workspace.$id}`)
                    })




                })
            ) */
        )

    }

}