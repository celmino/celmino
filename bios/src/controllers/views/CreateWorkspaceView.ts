import { InputRenderer, ButtonRenderer } from "@realmocean/antd";
import { Query, Services, useCreateRealm, useDeleteSession, useGetDomainTeam, useGetMe, useGetOrganization, useListRealms } from "@realmocean/sdk";
import { Input, useNavigate, useParams, useState, Heading, HStack, Text, ForEach } from "@tuval/forms";
import { VStack, cTopLeading, Button, UIViewBuilder } from "@tuval/forms";
import { } from '@realmocean/vibe'


export const CreateWorkspaceView = (organizationId: string) => UIViewBuilder(() => {

    const [workspaceName, setWorkspaceName] = useState();
    const { me } = useGetMe('console');
    const navigate = useNavigate();
    // const { organizationId } = useParams();
    const { organization: domainTeam } = useGetOrganization({ organizationId: organizationId });
    const { createRealm, isLoading } = useCreateRealm();
    const { deleteSession } = useDeleteSession('console');

    const { realms, isLoading: isRealmsLoading } = useListRealms(organizationId != null, [
        Query.equal('teamId', organizationId)
    ])

    return (
        VStack({ spacing: 10 })(
            Heading(domainTeam?.name).fontSize('2rem').foregroundColor('#090e13'),
            Heading('Workspaces').fontSize('4rem').foregroundColor('#090e13').lineHeight(70),

            ...ForEach(realms)(realm => HStack(
                Text(realm.name).fontSize(16)
            )
                .height()
                .onClick(() => {
                    navigate(`/app/workspace/${realm.$id}`)
                })
            ),
            HStack(
                Input().renderer(InputRenderer).onChange((e: any) => {
                    setWorkspaceName(e.target.value)
                })
            ).width('50%')
                .height(),
            Button().renderer(ButtonRenderer).label('Submit')
                .loading(isLoading)
                .disabled(isLoading)
                .onClick(async () => {
                    createRealm({
                        name: workspaceName,
                        organizationId: domainTeam.$id,
                    }, async (workspace) => {


                        const database = await Services.Databases.create(workspace.$id, 'workspace', 'Workspace', 'workspace');
                        const appletCol = await Services.Databases.createCollection(workspace.$id, database.$id, 'applets', 'Applets');
                        const nameAttr = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'name', 255, false);
                        const opaAttr = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'opa', 255, false);
                        const typeAttr = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'type', 255, false);


                        navigate(`/app/workspace/${workspace.$id}`)
                    })
                }),
            HStack(
                Text('Log in with another email')
                    .fontSize(16)
            )
                .height()
                .onClick(() => {
                    deleteSession({ sessionId: 'current' }, () => navigate('/login'));
                })
        ).background('#7FE8D4')
    )
})
