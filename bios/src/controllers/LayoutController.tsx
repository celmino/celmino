import { Models, Query, useDeleteSessions, useGetMe, useGetRealm, useGetTeamMembership, useListAccountMemberships, useListAccounts, useListRealms, useListTeams, useUpdatePrefs } from "@realmocean/sdk";
import { UIController, UIRouteOutlet, UIScene, UIView, DialogContainer, VStack, Fragment, UINavigate, Text, Button, useNavigate, HStack, Icon, Icons, ReactView, Spacer, UIViewBuilder, UIWidget, VDivider, cLeading, cTop, cTopLeading, useLocalStorage, useState, useParams, DialogPosition, PopupButton, cHorizontal, ForEach, cVertical, UIRouteLink } from "@tuval/forms";
import { LeftSidemenu } from "../views/LeftSideMenu";
import React from "react";
import { is } from "@tuval/core";
import { Text as VibeText } from "@realmocean/vibe";
import { CreateOrganizationView } from "./views/CreateOrganizationView";

export class LayoutController extends UIController {


    public BindRouterParams() {

    }
    public LoadView(): UIView {

        const navigate = useNavigate();

        const { me, isLoading, isError } = useGetMe('console');
        const { deleteSessions } = useDeleteSessions('console');
        const { updatePrefs } = useUpdatePrefs({});

        const { accounts } = useListAccounts()
        const { memberships, isLoading: isMembershipLoading } = useListAccountMemberships('console')

        const { organizationId, workspaceId } = useParams();

        return (
            (!isMembershipLoading && memberships.length === 0) ? CreateOrganizationView():
            (organizationId == null && workspaceId == null && !is.nullOrEmpty(me?.prefs.workspace)) ? UINavigate(`/app/workspace/${me?.prefs.workspace}`) :
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
                                     HStack(
                                         ReactView(
                                             <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" data-name="Glyph Icon" viewBox="7.210000038146973 4 49.58000183105469 56" x="409.4248" y="0" data-fill-palette-color="accent" id="s-0"><path d="M49.13 20.84l-16-9.26V4L55.7 17.05ZM32 50.52L16 41.26V22.74l16-9.26 16 9.26V41.26ZM30.91 11.58l-16 9.26L8.3 17.05 30.91 4ZM13.77 22.74V41.26L7.21 45.05V19Zm1.1 20.42l16 9.26V60L8.3 47Zm18.22 9.26l16-9.26L55.7 47 33.09 60ZM50.23 41.26V22.74L56.79 19v26.1Z" fill="#8bd8bc" data-fill-palette-color="accent" /></svg>
                                         ).frame(true).paddingLeft('15px')
                                     ).width(),
                                     Spacer(),
                                     HStack(
                                         PopupButton(
                                             HStack({ alignment: cLeading, spacing: 5 })(
                                                 HStack(
                                                     Text('ST').fontSize(10)
                                                 )
                                                     .background('rgb(255, 87, 34)')
                                                     .cornerRadius('50%')
                                                     .width(20)
                                                     .height(20)


                                             ).height(30).cursor('pointer').padding(cHorizontal, 10)
                                         )(
                                             UIViewBuilder(() => {

                                                 const { teams } = useListTeams('console');

                                                 const { me } = useGetMe('console');
                                                 return (
                                                     VStack({ spacing: 0 })(
                                                         HStack(
                                                             HStack({ alignment: cLeading, spacing: 5 })(
                                                                 HStack().allWidth(30).allHeight(30).cornerRadius('50%').background('gray'),
                                                                 VStack({ alignment: cLeading })(
                                                                     VibeText(me.name).fontSize(14).foregroundColor('#212526'),
                                                                     VibeText(me.email).fontSize(12).foregroundColor('#6d7a83'),
                                                                 )
                                                             ).padding(5)
                                                                 .cornerRadius(6)
                                                                 .background({ hover: '#ECEEEF' })
                                                         ).padding(5),
                                                         HStack({ alignment: cLeading })(
                                                             VibeText('ORGANIZATION(S)').fontSize(12)
                                                         ).padding(cVertical, 5),
                                                         ...ForEach(teams)(team =>
                                                             UIRouteLink(`/app/organization/${team.$id}`)(
                                                                 HStack({ alignment: cLeading })(
                                                                     Text(team.name)
                                                                 ).allHeight(32)
                                                                     .cursor('pointer')
                                                                     .background({ hover: '#F0F1F3' })
                                                                     .padding('7px 0')
                                                             ).width('100%')
                                                         )
                                                     ).padding().width(256)
                                                 )
                                             })
                                         )
                                             //  .padding(0)
                                             //.open(isOpen)

                                             // .hideHandle(hideHandle => _hideHandle = hideHandle)
                                             .dialogPosition(DialogPosition.BOTTOM_END)
                                     ).width(),


                                 ),


                             )
                                 .fontSize('1.2rem')
                                 .height(32).minHeight('32px')
                                 .foregroundColor('white'),

                             HStack({ alignment: cTop })(
                                 //LeftSidemenu(false),
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
                                     //.cornerRadius(20)
                                     .background('#F6F7FB')
                                     .overflow('hidden')
                                     .width('100%'),
                             )
                             //.height('calc(100% - 50px)')
                         )
                             //  .allHeight('100%')
                             .overflow('hidden')
                             //  .display('block')
                             .background('#323452')
                 )
             ) 
        )
    }
}