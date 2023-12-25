import { ButtonRenderer, InputRenderer } from '@realmocean/antd';
import { Button, ForEach, HStack, Input, Spinner, Text, UIFormController, UIView, UIViewBuilder, VStack, useNavigate, useParams, useState } from '@tuval/forms';

import {
    Permission, Role,
    useCreateCollection,
    useCreateDatabase,
    useCreateProject,
    useCreateTeam, useDeleteTeam,
    useGetCurrentTeam,
    useGetMe,
    useListDatabases,
    useListTeams
} from '@celmino/sdk';

export class NullController extends UIFormController {

    public override LoadView(): UIView {
       return (
        Text('dfds')
       )

    }
}

export class HomeController extends UIFormController {

    public override LoadView(): UIView {
        const {workspaceId} = useParams();
        const { me, isLoading } = useGetMe('console');
        const { teams, isLoading: isTeamsLoading } = useListTeams('console');
        const { createTeam } = useCreateTeam('console');
        const { deleteTeam } = useDeleteTeam('console');
        const { createProject } = useCreateProject();

        const { databases } = useListDatabases(workspaceId);
        const { createDatabase } = useCreateDatabase(workspaceId);


        const { createCollection } = useCreateCollection(workspaceId);

        const {team} = useGetCurrentTeam();

        //  const { workspaces, isLoading: isWOrkspacesLoading } = useListWorkspaces();


        const [orgName, setOrgName] = useState<string>('');
        const navigate = useNavigate()
      
     
        return (
            HStack(
               // LeftSideMenuView('Home'),
                VStack(
                    //Text(JSON.stringify(me)),
                    isTeamsLoading ? Spinner() :
                        UIViewBuilder(() => {

                            return (

                                VStack(
                                    Input().renderer(InputRenderer)
                                        .onChange((e: any) => {
                                            setOrgName(e.target.value);
                                        }),
                                    Button().label('Create Organization')
                                        .renderer(ButtonRenderer)
                                        .onClick(() => {
                                            // alert(orgName)
                                            createTeam({
                                                name: orgName,
                                                roles: ['admin']
                                            })
                                        }),
                                    Button().label('Delete Organization')
                                        .renderer(ButtonRenderer)
                                        .onClick(() => {
                                            // alert(orgName)
                                            deleteTeam({
                                                teamId: teams[0].$id
                                            })
                                        }),
                                    Button().label('Create Workspace')
                                        .renderer(ButtonRenderer)
                                        .onClick(() => {
                                            // alert(orgName)
                                            createProject({
                                                name: orgName,
                                                teamId: team
                                            })
                                        }),
                                    Button().label('Create Database')
                                        .renderer(ButtonRenderer)
                                        .onClick(() => {
                                            // alert(orgName)
                                            createDatabase({
                                                name: orgName,
                                                category: 'applet',
                                                enabled: true
                                            })
                                        }),
                                        Button().label('Navigate')
                                        .renderer(ButtonRenderer)
                                        .onClick(() => {
                                            navigate('jasldlka')
                                        }),
                                        Button().label('Create String Attribute')
                                        .renderer(ButtonRenderer)
                                        .onClick(() => {
                                            createCollection({
                                                databaseId:orgName,
                                                name: 'test',
                                                documentSecurity: false,
                                                permissions: [
                                                    Permission.read(Role.any()),
                                                    Permission.write(Role.any())],
                                                    
                                                enabled: true
                                            })
                                        }),
                                    isTeamsLoading ? Spinner() :
                                        VStack(
                                            ...ForEach(teams)((team) => {
                                                return Text(team.name)

                                            })
                                        ),
                                    Text(JSON.stringify(databases)),
                                    /* isWOrkspacesLoading ? Spinner() :
                                    VStack(
                                        ...ForEach(workspaces)((workspace) => {
                                            return Text(workspace.name)

                                        })
                                    ) */

                                )



                            )
                        })
                )
            )

        )

    }

}