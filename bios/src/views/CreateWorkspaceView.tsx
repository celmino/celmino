import { ButtonRenderer, InputRenderer } from "@realmocean/antd";
import { Query, Services, useCreateRealm, useDeleteSession, useGetMe, useListRealms } from "@realmocean/sdk";

import { Button, ForEach, HStack, Heading, Input, TextField, Text, UINavigate, UIViewBuilder, VStack, useNavigate, useState, Spacer, cLeading, cHorizontal, darken, Icon, Icons, HDivider } from "@tuval/forms";
import { useGetCurrentOrganization } from "../hooks/useGetCurrentOrganization";


export const CreateWorkspaceView = () => UIViewBuilder(() => {

    const [workspaceName, setWorkspaceName] = useState('');
    const { me } = useGetMe('console');
    const navigate = useNavigate();
    // const { organizationId } = useParams();
    const { organization, isLoading: isOrganizationLoading } = useGetCurrentOrganization();

    const { createRealm, isLoading } = useCreateRealm();
    const { deleteSession } = useDeleteSession('console');

    return (
        isOrganizationLoading ? Text('Loading...') : organization == null ? UINavigate('/app/organization/select') :
            UIViewBuilder(() => {
                const { realms, isLoading: isRealmsLoading } = useListRealms(organization != null, [
                    Query.equal('teamId', organization.$id)
                ])
                return (
                    VStack(
                        VStack({ spacing: 10 })(
                            HStack(
                                Text('Select another organization')
                                    .fontSize(16)
                            )
                                .height()
                                .onClick(() => {
                                    navigate('/app/organization/select');
                                }),
                           
                            Heading('Workspaces').fontFamily('"Hagrid", sans-serif').fontSize('6rem').foregroundColor('#090e13').lineHeight(90),
                            Heading(organization?.name).fontSize('2.8rem').foregroundColor('#090e13')
                            .fontFamily('Graphik Medium,sans-serif'),
                            VStack(
                                ...ForEach(realms)(realm =>
                                    HStack({ alignment: cLeading, spacing:10 })(
                                        HStack({ alignment: cLeading })(
                                            Text(realm.name).fontFamily('"Graphik Regular", sans-serif').fontSize('2rem')
                                        ).height(),
                                        Icon(Icons.MoveArrowRight)
                                    )
                                        .cursor('pointer')
                                        .height()
                                        .padding('1.6rem 2rem 1.6rem 0')
                                        .foregroundColor('#242938')
                                        .cornerRadius(6)
                                        .background({ hover: darken('#7FE8D4', 0.05) })
                                        .onClick(() => {
                                            navigate(`/app/workspace/${realm.$id}`)
                                        })
                                )
                            ).padding(cHorizontal, 20).height().maxWidth('100%'),
                            HDivider().height(1).background('rgba(125, 141, 154, 0.1)'),
                            HStack({ alignment: cLeading })(
                                Text('Create a new workspace').fontFamily('"Graphik Regular", sans-serif').fontSize('2rem')
                            ).height() .padding('1.6rem 2rem 1.6rem 0'),
                            HStack({ alignment: cLeading })(
                                Text('Log in with another email').fontFamily('"Graphik Regular", sans-serif').fontSize('2rem')
                            ).height() .padding('1.6rem 2rem 1.6rem 0')
                            .onClick(() => {
                                navigate('/logout');
                            }),
                            /* HStack(
                                TextField()
                                    .padding()
                                    .border('none')
                                    .borderBottom('1px solid #000')
                                    .background('transparent')
                                    .outline({ focus: 'none' })
                                    .maxWidth(300)
                                    .onChange((value: string) => {
                                        setWorkspaceName(value)
                                    })

                            ).width('50%')
                                .height(), */
                            Button().renderer(ButtonRenderer).label('Submit')
                                .loading(isLoading)
                                .disabled(isLoading)
                                .onClick(async () => {
                                    createRealm({
                                        name: workspaceName,
                                        organizationId: organization?.$id,
                                    }, async (workspace) => {


                                        const database = await Services.Databases.create(workspace.$id, 'workspace', 'Workspace', 'workspace');
                                        const appletCol = await Services.Databases.createCollection(workspace.$id, database.$id, 'applets', 'Applets');
                                        const nameAttr = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'name', 255, false);
                                        const parent = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'parent', 255, false);
                                        const opaAttr = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'opa', 255, false);
                                        const typeAttr = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'type', 255, false);
                                        const iconName = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'iconName', 255, false);
                                        const iconCategory = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'iconCategory', 255, false);


                                        navigate(`/app/workspace/${workspace.$id}`)
                                    })
                                }),

                            HStack(
                                Text('Log in with another email')
                                    .fontSize(16)
                            )
                                .height()
                                .onClick(() => {
                                    navigate('/logout');
                                }),
                        ).width(),
                        HStack().height('9rem')
                            .background('linear-gradient(0deg,#fff 42.67%,hsla(0,0%,100%,.8) 60.67%,hsla(0,0%,100%,0))')
                    ).background('#7FE8D4')
                )
            })

    )
})
