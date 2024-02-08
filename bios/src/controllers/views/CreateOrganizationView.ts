import { InputRenderer, ButtonRenderer } from "@realmocean/antd";
import { Services, useCreateRealm, useDeleteSession, useGetMe } from "@realmocean/sdk";
import { Input,  useNavigate, useParams, useState, Heading, HStack } from "@tuval/forms";
import { VStack, cTopLeading, Button, UIViewBuilder } from "@tuval/forms";
import { Text } from '@realmocean/vibe'


export const CreateOrganizationView = () => UIViewBuilder(() => {
    const { organizationId } = useParams();
    const [workspaceName, setWorkspaceName] = useState();
    const { me } = useGetMe('console');
    const navigate = useNavigate();
    const {deleteSession} = useDeleteSession('console');
    return (
        VStack(
            Heading('Organizations').fontSize('4rem').foregroundColor('#090e13').lineHeight(80),
            Heading(me?.email).fontSize('2rem').foregroundColor('#090e13'),
           /*  Input().renderer(InputRenderer).onChange((e: any) => {
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


                        navigate(`/app/workspace/${workspace.$id}`)
                    })




                }) */
                HStack(
                    Text('Log in with another email')
                    .fontSize(16)
                )
                .height()
                .onClick(()=> {
                    deleteSession({sessionId : 'current'}, ()=> navigate('/login'));
                })
        ).background('#7FE8D4')
    )
})
