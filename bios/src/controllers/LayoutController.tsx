import { Models, Query, useDeleteSessions, useGetMe, useGetRealm, useListRealms, useListTeams, useUpdatePrefs } from "@realmocean/sdk";
import { UIController, UIRouteOutlet, UIScene, UIView, DialogContainer, VStack, Fragment, UINavigate, Text, Button, useNavigate, HStack, Icon, Icons, ReactView, Spacer, UIViewBuilder, UIWidget, VDivider, cLeading, cTop, cTopLeading, useLocalStorage, useState, useParams } from "@tuval/forms";
import { LeftSidemenu } from "../views/LeftSideMenu";
import React from "react";

export class LayoutController extends UIController {


    public BindRouterParams() {

    }
    public LoadView(): UIView {

        const navigate = useNavigate();

        const { me, isLoading, isError } = useGetMe('console');
        const { deleteSessions } = useDeleteSessions('console');
        const { updatePrefs } = useUpdatePrefs({});



        const { team_id, project_id } = useParams();

        return (
            isLoading ? Text('Loading...') :
                UIViewBuilder(() =>
                    UIScene(
                        isError ? UINavigate('/login') :
                            VStack(
                                HStack(
                                    Button(
                                        Icon(Icons.Add).fontSize(20)
                                    )

                                        .width(50).height(50)
                                        .cornerRadius('50%')
                                        .onClick(() => {


                                        })
                                ).width().height().position('absolute').right('10px').bottom('10px')
                                    //.tooltip('Create support ticker')
                                    .zIndex(100000),
                                HStack({ alignment: cLeading })(

                                    HStack({ alignment: cLeading })(
                                        ReactView(
                                            <svg width="130"
                                                viewBox="1.7000000476837158 -35.900001525878906 248.24000549316406 36.400001525878906"
                                                height="35" data-palette-color="#233565" >
                                                <path d="M19.7 0.5L19.7 0.5Q16.25 0.5 13.03-0.3 9.8-1.1 7.25-3.1 4.7-5.1 3.2-8.65 1.7-12.2 1.7-17.7L1.7-17.7Q1.7-22.65 3.15-26.13 4.6-29.6 7.1-31.75 9.6-33.9 12.85-34.9 16.1-35.9 19.7-35.9L19.7-35.9Q22.25-35.9 24.68-35.5 27.1-35.1 28.2-34.6L28.2-34.6 34.25-29.55 29.25-21.3 19.7-25.7Q18-25.7 16.53-24.78 15.05-23.85 14.13-22.08 13.2-20.3 13.2-17.7L13.2-17.7Q13.2-14.4 14.23-12.63 15.25-10.85 17.18-10.2 19.1-9.55 21.75-9.55L21.75-9.55Q24.3-9.55 26.58-10.08 28.85-10.6 30.6-11.3 32.35-12 33.25-12.5L33.25-12.5 33.25-2.5Q32.25-2 30.43-1.28 28.6-0.55 25.93-0.03 23.25 0.5 19.7 0.5ZM67.7 0L39.75 0 38.75-3 39.75-8 39.75-35.4 65.5-35.4 68-33.9 64.7-25.4 60.2-25.9 50.85-25.9 50.85-21.9 63.2-21.9 63.2-13.65 56.3-13.65 50.85-14.15 50.85-9.5 64.7-9.5 70.65-3.2 67.7 0ZM100.6 0L74.65 0 73.65-3 74.65-8 74.65-35.4 85.65-35.4 85.65-16.35 85.15-9.5 86.15-9.5 95.1-10 98.65-10.5 103.05-3.2 100.6 0ZM118.74 0L107.04 0 107.04-27.35 106.04-32.35 107.09-35.35 118.74-35.35 128.54-17.85 129.54-17.85 137.64-35.35 149.59-35.35 150.09-32.35 149.59-27.55 149.59 0 138.54 0 138.69-4.25 138.69-18.2 138.14-18.2 136.24-12.95 132.64-5 124.64-5 118.74-18.2 118.24-18.2 118.24-14.15 118.74 0ZM167.64 0L156.59 0 156.59-27.4 156.09-32.4 156.59-35.4 167.64-35.4 167.64 0ZM186.24 0L174.64 0 174.64-27.35 173.64-32.35 174.64-35.35 184.69-35.35 194.79-22.75 197.19-18.6 197.69-18.6 197.69-35.35 209.24-35.35 209.24-32.35 208.74-27.35 208.74 0 198.79 0 186.24-17.1 185.74-17.1 185.74-14.1 186.24 0ZM231.94 0.5L231.94 0.5Q228.74 0.5 225.56-0.28 222.39-1.05 219.76-3.05 217.14-5.05 215.54-8.6 213.94-12.15 213.94-17.7L213.94-17.7Q213.94-23.25 215.54-26.8 217.14-30.35 219.76-32.35 222.39-34.35 225.56-35.13 228.74-35.9 231.94-35.9L231.94-35.9Q235.14-35.9 238.31-35.1 241.49-34.3 244.11-32.3 246.74-30.3 248.34-26.75 249.94-23.2 249.94-17.7L249.94-17.7Q249.94-12.2 248.34-8.65 246.74-5.1 244.11-3.1 241.49-1.1 238.31-0.3 235.14 0.5 231.94 0.5ZM231.94-9.5L231.94-9.5Q235.19-9.5 236.84-11.48 238.49-13.45 238.49-17.7L238.49-17.7Q238.49-21.9 236.84-23.9 235.19-25.9 231.94-25.9L231.94-25.9Q225.44-25.9 225.44-17.7L225.44-17.7Q225.44-13.5 227.06-11.5 228.69-9.5 231.94-9.5Z" opacity="1" transform="matrix(1,0,0,1,0,0)"
                                                    fill="white"
                                                    data-fill-palette-color="primary" /> </svg >
                                        ).frame(true).paddingLeft('15px'),
                                        VDivider().width(1).height(30).background('#e6e6e6').marginLeft(15),
                                    ).height().width(),

                                    HStack(
                                        UIViewBuilder(() => {
                                            const { teams } = useListTeams('console');
                                            // const { setTeam } = Hooks.Teams.useSetTeam();
                                            const [team, setTeam] = useLocalStorage('teamId', null);
                                            // alert(team)
                                            //   const {team, isLoading} = useGetCurrentTeam();
                                            const [org, setOrg] = useState(null);
                                            return (

                                                UIWidget('com.tuvalsoft.widget.topdropdown')
                                                    .config({
                                                        title: 'Organization',
                                                        selectedValue: me?.prefs?.organization,
                                                        width: '350px',
                                                        onClick: (selectedItem) => {
                                                            // setOrg(selectedItem.value);
                                                            // setTeam(selectedItem.value);
                                                            updatePrefs({
                                                                prefs: {
                                                                    organization: selectedItem.value
                                                                }
                                                            })
                                                            navigate(`/app/organization/${selectedItem.value}`)
                                                            console.log(selectedItem.value)
                                                        }
                                                    })
                                                    .data(
                                                        {
                                                            dataSource: () => {
                                                                return (
                                                                    teams?.map((team) => {
                                                                        return {
                                                                            text: team.name,
                                                                            value: team.$id
                                                                        }
                                                                    })
                                                                )
                                                            }

                                                        })
                                            )
                                        })
                                    )
                                        .width(250),
                                    VDivider().width(1).height(30).background('#e6e6e6').marginLeft(15),

                                    HStack(
                                        UIViewBuilder(() => {
                                            const [team, setTeam] = useLocalStorage('teamId', null);
                                            const { realm }: { realm: Models.Realm } = useGetRealm({
                                                realmId: project_id,
                                                enabled: (team_id == null && project_id != null)
                                            });

                                            const { realms } = useListRealms((team != null || realm?.teamId != null), [
                                                Query.equal('teamId', team ?? realm?.teamId)
                                            ]);
                                            // const [currentProject, setCurrentProject] = useLocalStorage('projectId', null);

                                            return (
                                                //  (team_id || project?.teamId) ?
                                                UIWidget('com.tuvalsoft.widget.topdropdown')
                                                    .config({
                                                        title: 'Workspace',
                                                        selectedValue: me?.prefs?.workspace,
                                                        width: '350px',
                                                        onClick: (selectedItem) => {
                                                            //alert(JSON.stringify(selectedItem));
                                                            //setCurrentProject(selectedItem.value);
                                                            updatePrefs({
                                                                prefs: {
                                                                    ...(me?.prefs ? me?.prefs : {}),
                                                                   /*  darkTheme: true,
                                                                    language: 'en', */
                                                                    workspace: selectedItem.value
                                                                }

                                                            })
                                                            navigate(`/app/workspace/${selectedItem.value}`)
                                                            /* setTeam({
                                                               teamId: selectedItem.value
                                                           }); */
                                                            /*  if (selectedItem.value !== useSessionService().TenantId) {
                                                                 window.location.href = `/?tenant_id=${selectedItem.value}`
                                                             } */
                                                            //alert(selectedItem)
                                                            //navigate(`/newconsole/organization/${organization_id}/app/${selectedItem.value}/page/${page_id}`);
                                                        }
                                                    })
                                                    .data(
                                                        {
                                                            dataSource: () => {

                                                                return (
                                                                    realms?.map((workspace) => {
                                                                        return {
                                                                            text: workspace.name,
                                                                            value: workspace.$id
                                                                        }
                                                                    })
                                                                )
                                                            }

                                                        })
                                                //  : Fragment()
                                            )
                                        })
                                    )
                                        .width(250),
                                    Spacer(),
                                    /*  UIWidget().qn('com.tuvalsoft.widget.digitalclock')
                                         .config({
                                             title: 'App Starts',
                                             footer: 'Performence is OK'
                                         }) */
                                )
                                    .fontSize('1.2rem')
                                    .height(50).minHeight('50px')
                                    .foregroundColor('white'),

                                HStack({ alignment: cTop })(
                                    LeftSidemenu(false),
                                    VStack({ alignment: cTopLeading })(
                                        //DialogContainer(),
                                        HStack(
                                            // UIRouteOutlet().width('100%').height('100%')
                                            //Desktop('')
                                            UIRouteOutlet().width('100%').height('100%')
                                            // UIRouteOutlet().width('100%').height('100%')
                                        )
                                            .overflow('hidden')
                                            .cornerRadius(20)
                                    )
                                        .cornerRadius(20)
                                        .background('#F6F7FB')
                                        .overflow('hidden')
                                        .width('100%'),
                                )
                                    .height('calc(100% - 50px)')
                            )
                                .background('var(--main-theme-color)')
                    )
                )
        )
    }
}