import { ID, Models, Services, useCreateDatabase, useCreateProject } from "@celmino/sdk";
import { ButtonRenderer, InputRenderer } from "@realmocean/antd";
import { HStack, UIFormController, UIRouteOutlet, UIView, cTopLeading, useParams, Text, VStack, Input, Button, useState, useNavigate } from "@tuval/forms";

export class OrganizationController extends UIFormController {

    public override LoadView(): UIView {
        const { organizationId } = useParams();
        const [workspaceName, setWorkspaceName] = useState();
        const { createProject } = useCreateProject();
        const navigate = useNavigate();

        return (
            VStack({ alignment: cTopLeading })(
                Input().renderer(InputRenderer).onChange((e: any) => {
                    setWorkspaceName(e.target.value)
                }),
                Button().renderer(ButtonRenderer).label('Submit').onClick(async () => {

                    createProject({
                        name: workspaceName,
                        teamId: organizationId,
                    }, async (workspace) => {


                        const database = await Services.Databases.create(workspace.$id, 'workspace', 'Workspace', 'workspace');
                        const appletCol = await Services.Databases.createCollection(workspace.$id, database.$id, 'applets', 'Applets');
                        const nameAttr = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'name', 255, false);
                        const opaAttr = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'opa', 255, false);


                        navigate(`/app/com.celmino.app.test/workspace/${workspace.$id}`)
                    })




                })
            )
        )

    }

}