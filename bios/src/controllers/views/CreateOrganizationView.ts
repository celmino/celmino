import { InputRenderer, ButtonRenderer } from "@realmocean/antd";
import { Services, useCreateOrganization, useCreateRealm, useDeleteCache, useDeleteSession, useGetMe, useListAccountMemberships, useUpdatePrefs } from "@realmocean/sdk";
import { Input, useNavigate, useParams, useState, Heading, HStack, ForEach } from "@tuval/forms";
import { VStack, cTopLeading, Button, UIViewBuilder } from "@tuval/forms";
import { Text } from '@realmocean/vibe'
import isValidDomain from 'is-valid-domain'
import { is } from "@tuval/core";
import { useGetCurrentOrganization } from "../../hooks/useGetCurrentOrganization";
import { useGetOrganizationId } from "../../hooks/useGetOrganizationId";


export const CreateOrganizationView = () => UIViewBuilder(() => {
    const{deleteCache} = useDeleteCache('console');
    const [organizationName, setOrganizationName] = useState();
    const [organizationId, setOrganizationId] = useState();
    const [mode, setMode] = useState('');

    const { me } = useGetMe('console');
    const navigate = useNavigate();
    const { deleteSession } = useDeleteSession('console');
    const { memberships, isLoading: isMembershipLoading } = useListAccountMemberships('console');

    const { createTeam, isError, error } = useCreateOrganization();
    const { updatePrefs } = useUpdatePrefs({});
    
    return (
        VStack(
            Heading('Organizations').fontSize('4rem').foregroundColor('#090e13').lineHeight(80),
            Heading(me?.email).fontSize('2rem').foregroundColor('#090e13'),
            ...ForEach(memberships)(membership => HStack(
                Text(membership.teamName).fontSize(16)
            ).height()
            .onClick(() => {
                if (is.localhost()) {
                    updatePrefs({
                        prefs: {
                            ...(me?.prefs ? me?.prefs : {}),
                            organization: membership.teamId
                        }

                    }, ()=> {
                        deleteCache();
                        navigate(`/app/workspace/select`);
                    })
                   
                } else {
                    window.location.href = `https://${membership.teamId}.celmino.com`;
                }
            })
            ),
            HStack(
                Text('Create Organization').fontSize('20px')
                .padding('1.6rem 2rem 1.6rem 0')
                .foregroundColor('#242938')
            )
                .height()
                .onClick(() => {
                    setMode('create')
                })

            ,
            mode === 'create' &&
            VStack(
                HStack(
                    Input().renderer(InputRenderer).onChange((e: any) => {
                        setOrganizationId(e.target.value)
                    }).width(200),
                    Text('.celmino.com').fontSize(16)
                ).height(),
                Input().renderer(InputRenderer).onChange((e: any) => {
                    setOrganizationName(e.target.value)
                }),
                Button().renderer(ButtonRenderer).label('Submit')
                    .onClick(async () => {

                        createTeam({
                            name: organizationName,
                            id: organizationId
                        }, async (workspace) => {


                            /*    const database = await Services.Databases.create(workspace.$id, 'workspace', 'Workspace', 'workspace');
                               const appletCol = await Services.Databases.createCollection(workspace.$id, database.$id, 'applets', 'Applets');
                               const nameAttr = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'name', 255, false);
                               const opaAttr = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'opa', 255, false);
                               const typeAttr = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'type', 255, false); */

                            is.localhost() ?
                                navigate(`/app/organization/${organizationId}`) :
                                window.location.href = `https://${organizationId}.celmino.com`
                        })




                    })
            ).height(),
            isError && Text(error.message).fontSize(16),
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
