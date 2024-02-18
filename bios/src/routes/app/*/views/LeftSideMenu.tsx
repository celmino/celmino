
import { Models, Query, useCreateDatabase, useCreateRealm, useGetMe, useGetOrganization, useGetRealm, useGetTeam, useListDatabases, useListDocuments, useListRealms, useListTeams, useUpdatePrefs } from "@realmocean/sdk";
import { is } from "@tuval/core";
import {
    DialogPosition,
    ForEach,
    Fragment,
    HDivider,
    HStack,
    Heading,
    HeadingSizes,
    Icon,
    Icons,
    PopupButton,
    ReactView,
    ScrollView,
    Spacer,
    SvgIcon,

    TextField,
    UIRouteLink, UIViewBuilder,
    UIWidget,
    VStack,
    cHorizontal,
    cLeading, cTopLeading,
    getAppFullName,
    useNavigate, useParams, useQueryParams
} from "@tuval/forms";
import React, { useState } from "react";
import { DatabaseNameView } from "./DatabaseNameView";
import { Text } from '@realmocean/vibe';
import { DynoDialog } from '@realmocean/ui'
import { AddAppletDialog } from "../../../../dialogs/AddAppletDialog";
import { useGetCurrentOrganization } from "../../../../hooks/useGetCurrentOrganization";
import { SelectAppletDialog } from "@celmino/ui";

function a(strings: TemplateStringsArray, ...expr: Array<any>): string {
    let str = '';
    strings.forEach((string, i) => {
        if (is.string(expr[i])) {
            str += string + '"' + (expr[i] || '') + '"';
        }

    });
    return str;
}


export const CollapseRightIcon = props => (
    <svg viewBox="0 0 24 24" style={{ color: 'gray' }} width="24" height="24" aria-hidden="true">
        <path fill-rule="evenodd"
            fill="currentColor"
            d="M13.435 8.464a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.829 2.829a1 1 0 1 1-1.414-1.415L14.556 13H3a1 1 0 1 1 0-2h11.556l-1.121-1.121a1 1 0 0 1 0-1.415z"
            clip-rule="evenodd" />
        <path d="M21 4.5a1 1 0 0 1 1 1v13a1 1 0 1 1-2 0v-13a1 1 0 0 1 1-1z" fill="currentColor" />
    </svg>
);

export const CollapseLeftIcon = props => (
    <svg viewBox="0 0 24 24" style={{ color: 'gray' }} width="100%" height="100%" aria-hidden="true">
        <path fill-rule="evenodd"
            fill="currentColor"
            d="M10.565 15.536a1 1 0 0 1-1.414 0l-2.829-2.829a1 1 0 0 1 0-1.414l2.829-2.829a1 1 0 0 1 1.414 1.415L9.444 11H21a1 1 0 1 1 0 2H9.444l1.121 1.121a1 1 0 0 1 0 1.415Z"
            clip-rule="evenodd" />
        <path d="M3 19.5a1 1 0 0 1-1-1v-13a1 1 0 1 1 2 0v13a1 1 0 0 1-1 1Z" fill="currentColor" />
    </svg>
);


const HomeIcon = props => (
    <svg viewBox="0 0 16 16" style={{ color: 'gray' }} width="16" height="16" aria-hidden="true">
        <path fill-rule="evenodd"
            fill="currentColor"
            d="M8.407 2.06a.6.6 0 0 0-.814 0l-6.5 6a.6.6 0 1 0 .814.881l.493-.455V13A1.6 1.6 0 0 0 4 14.6h3.1V11a.4.4 0 0 1 .4-.4h1c.22 0 .4.18.4.4v3.6H12a1.6 1.6 0 0 0 1.6-1.6V8.486l.493.455a.6.6 0 0 0 .814-.881l-6.5-6zM12.4 7.378 8 3.317 3.6 7.378V13a.4.4 0 0 0 .4.4h1.9V11a1.6 1.6 0 0 1 1.6-1.6h1a1.6 1.6 0 0 1 1.6 1.6v2.4H12a.4.4 0 0 0 .4-.4V7.378z"
            clip-rule="evenodd" />
    </svg>
);

export const DocIcon = props => (
    <svg viewBox="0 0 24 24" style={{ color: 'gray' }} width="16" height="16" aria-hidden="true">
        <path fill-rule="evenodd"
            fill="currentColor"
            d="M6 5a1 1 0 0 1 1-1h6.172a1 1 0 0 1 .707.293l3.828 3.828a1 1 0 0 1 .293.707V19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5zm1-3a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.828a3 3 0 0 0-.879-2.12l-3.828-3.83A3 3 0 0 0 13.172 2H7zm2 6a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2H9zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9zm-1 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1z"
            clip-rule="evenodd" />
    </svg>
);

const DraftIcon = props => (
    <svg viewBox="0 0 24 24" style={{ color: 'gray' }} width="16" height="16" aria-hidden="true">
        <path fill-rule="evenodd"
            fill="currentColor"
            d="M19 5H5v3h14V5zm.983 4.742A2 2 0 0 0 21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3a2 2 0 0 0 1.016 1.742A2.18 2.18 0 0 0 4 10v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9c0-.087-.006-.174-.017-.258zM18 10H6v9h12v-9zm-9 3a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1z"
            clip-rule="evenodd" />
    </svg>
);


export const WhiteboardIcon = props => (
    <svg viewBox="0 0 24 24" style={{ color: 'gray' }} width="16" height="16" aria-hidden="true">
        <path fill-rule="evenodd"
            fill="currentColor"
            d="M18.142 4.291a3 3 0 0 1 4.242 4.243l-4.455 4.455a2 2 0 0 1-1.158.57l-1.624.209a2 2 0 0 1-2.24-2.24l.21-1.623a2 2 0 0 1 .57-1.159l4.455-4.455Zm2.828 1.414a1 1 0 0 0-1.414 0L15.1 10.16l-.21 1.624 1.624-.21L20.97 7.12a1 1 0 0 0 0-1.415Zm-16.4-.12a1.25 1.25 0 0 0-1.25 1.25v2.522l1.585-1.409a3.097 3.097 0 0 1 4.114 4.63l-.903.803a1.059 1.059 0 1 0 1.452 1.54l1.044-1.044a1 1 0 0 1 1.415 1.414l-1.045 1.044a3.059 3.059 0 1 1-4.195-4.45l.904-.802a1.097 1.097 0 1 0-1.458-1.64l-2.914 2.59v5.301c0 .69.56 1.25 1.25 1.25h13.5c.69 0 1.25-.56 1.25-1.25V14.21a1 1 0 0 1 2 0v3.125a3.25 3.25 0 0 1-3.25 3.25H4.57a3.25 3.25 0 0 1-3.25-3.25V11.59a.72.72 0 0 1 0-.01V6.835a3.25 3.25 0 0 1 3.25-3.25h9.023a1 1 0 1 1 0 2H4.57Z"
            clip-rule="evenodd" />
    </svg>
);

export const SearchIcon = props => (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
        aria-hidden="true">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 15.835a7.055 7.055 0 0 0 4.378-1.515l3.782 3.771a.835.835 0 0 0 1.18-1.182l-3.78-3.768a7.085 7.085 0 1 0-5.56 2.694ZM3.335 8.75a5.415 5.415 0 1 1 10.83 0 5.415 5.415 0 0 1-10.83 0Z"></path></svg>


);

export const DownIcon = props => (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.434 7.434a.8.8 0 0 1 1.132 0L10 10.87l3.434-3.435a.8.8 0 0 1 1.132 1.132l-4 4a.8.8 0 0 1-1.132 0l-4-4a.8.8 0 0 1 0-1.132Z"></path></svg>

);




const fontFamily = '-apple-system, "BlinkMacSystemFont", "Segoe UI", "Helvetica", "Apple Color Emoji", "Arial", sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"';

/* const menuModel = [
    {
        title: 'Home',
        icon: () => ReactView(<HomeIcon></HomeIcon>).frame(true),
        link: '/app/com.celmino.app.test/home',
        subItems: [
            {
                name: 'Overview',
                icon: Icons.API,
                link: '/app/com.tuvalsoft.app.organizationmanager/b'

            },
            {
                name: 'Sessions',
                icon: "\\e425",
                link: '/app/com.tuvalsoft.app.organizationmanager/sessions'

            }
        ]
    },
    {
        title: 'Project Spaces',
        icon: () => ReactView(<HomeIcon></HomeIcon>).frame(true),
        link: '/app/com.celmino.app.test/home',
        subItems: [
            {
                name: 'Overview',
                icon: Icons.API,
                link: '/app/com.tuvalsoft.app.organizationmanager/b'

            },
            {
                name: 'Sessions',
                icon: "\\e425",
                link: '/app/com.tuvalsoft.app.organizationmanager/sessions'

            }
        ]
    },

    {
        title: 'Drafts',
        icon: () => ReactView(<DraftIcon></DraftIcon>).frame(true),
        link: '/app/com.tuvalsoft.app.workbench/drafts'
    },
    {
        title: 'Teams',
        icon: () => Icon(SvgIcon('svg-sprite-teams', '#A1A1A1')),
        link: `/app/${getAppFullName()}/teams`
    },
    {
        title: 'Whiteboards',
        icon: () => ReactView(<WhiteboardIcon></WhiteboardIcon>).frame(true),
        link: '/app/com.tuvalsoft.app.workbench/whiteboards'
    }


]
 */
//#E8EAED
const topMenu = [
    {
        title: 'Home',
        icon: SvgIcon('cu3-icon-sidebarHome', 'rgb(79, 87, 98)', '20px', '20px'),
        url: ''
    },
    {
        title: 'Inbox',
        icon: SvgIcon('cu3-icon-sidebarInbox', 'rgb(79, 87, 98)', '20px', '20px'),
        url: ''
    },
    {
        title: 'Search',
        icon: SvgIcon('cu3-icon-search', 'rgb(79, 87, 98)', '16px', '16px'),
        url: ''
    }

]

let global_openedIDs = {};
export const LeftSideMenuView = (selectedItem: string) => {
    const showAllWorkspaces = true;
    const { me, isLoading } = useGetMe('console');
    const { organization: domainTeam, isLoading: isDomainTeamLoading } = useGetCurrentOrganization();

    return (
        (isLoading || isDomainTeamLoading) ? Fragment() :
            UIViewBuilder(() => {
                const navigate = useNavigate();
                // alert(workspaceId)
                const { organizationId, workspaceId } = useParams();

                const { databases } = useListDatabases(workspaceId, [
                    Query.equal('category', 'applet')
                ]);

                const { documents } = useListDocuments(workspaceId, 'workspace', 'applets', [
                    Query.equal('parent', '-1'),
                    Query.limit(250),
                    // Query.equal('opa', 'com.celmino.widget.enterprise-modelling-tree')

                ]);

                const { realm } = useGetRealm({ realmId: workspaceId, enabled: true });
                const [iconInfo, setIconInfo] = useState<any>({});

                const { updatePrefs } = useUpdatePrefs({});

                let _hideHandle;

                return (
                    VStack({ alignment: cTopLeading })(
                        VStack({ alignment: cTopLeading })(
                            VStack({ alignment: cTopLeading })(

                                HDivider().height(1).background('#ECEDEE'),
                                VStack({ alignment: cTopLeading, spacing: 2 })(
                                    ...ForEach(topMenu)(menuItem =>
                                        HStack({ alignment: cLeading, spacing: 8 })(
                                            Icon(menuItem.icon),
                                            Text(menuItem.title)
                                                .foregroundColor('rgb(21, 23, 25)')
                                                .fontFamily('ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol')
                                        )
                                            .height()
                                            .padding('6px 10px')
                                            .background({ hover: '#E8EAED' })
                                            .cornerRadius(6)
                                            .cursor('pointer')
                                            .margin('0 8px')
                                    )

                                ).paddingTop('6px')


                            )
                                //.padding()
                                .height(),

                            HDivider().height(1).background('#ECEDEE'),

                            UIWidget('com.celmino.widget.organization-space-tree')
                                .config({
                                    organizationId: domainTeam?.$id,
                                    organizationName: domainTeam?.name

                                }),
                            UIWidget('com.celmino.widget.myspace-tree')
                                .config({

                                }),
                            HDivider().height(1).background('#ECEDEE'),
                            HStack(
                                PopupButton(

                                    HStack({ alignment: cLeading, spacing: 6 })(
                                        HStack(
                                            UIWidget("com.tuvalsoft.widget.icons")
                                                .config({
                                                    readonly: true,
                                                    selectedIcon: 'bookmark', //iconInfo.iconName,
                                                    selectedCategory: 'Icons',//iconInfo.iconCategory,
                                                    width: 32,
                                                    height: 32,
                                                    padding: 1,
                                                    color: '#0E7169',
                                                    onChange: (iconInfo) => {
                                                        setIconInfo(iconInfo)
                                                    }
                                                })
                                        ).width(36).height(36)
                                            .shadow('0px 1px 4px rgba(81,97,108,0.1), 0 0 0 1px rgba(229,232,235,0.5)')
                                            .cornerRadius(6),
                                        VStack({ alignment: cLeading })(
                                            Text('WORKSPACE').fontSize('1rem'),
                                            HStack({ alignment: cLeading })(
                                                Text(realm?.name).fontSize(16).fontWeight('500')
                                                    .foregroundColor('rgb(21, 23, 25)')
                                                    .fontFamily('ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol'),
                                            ).height()
                                        ).height(),
                                        Icon(DownIcon)

                                    )
                                    .height().cursor('pointer')
                                        .padding(10)
                                        .background({ hover: '#E8EAED' })
                                        .cornerRadius(6)

                                )(
                                    UIViewBuilder(() => {

                                        const { realm }: { realm: Models.Realm } = useGetRealm({
                                            realmId: workspaceId,
                                            enabled: (organizationId == null && workspaceId != null)
                                        });

                                        const { realms } = useListRealms(domainTeam != null/* (organizationId != null || realm?.teamId != null) */, [
                                            Query.equal('teamId', domainTeam?.$id)
                                        ]);

                                        const { me } = useGetMe('console');
                                        return (
                                            VStack({ alignment: cTopLeading })(
                                                VStack(
                                                    HStack({ alignment: cLeading, spacing: 5 })(
                                                        HStack().width(30).height(30).cornerRadius('50%').background('gray'),
                                                        VStack({ alignment: cLeading })(
                                                            Text(realm.name).fontSize(14).foregroundColor('#212526'),
                                                            Text(me.email).fontSize(12).foregroundColor('#6d7a83'),
                                                        )
                                                    ).padding(5)
                                                        .cornerRadius(6)
                                                        .background({ hover: '#ECEEEF' }),
                                                    HStack({ alignment: cLeading, spacing: 5 })(
                                                        Icon(SvgIcon('cu3-icon-settings')),
                                                        Text('Settings')
                                                    )
                                                        .padding(5)
                                                        .height()
                                                ).padding(5),
                                                HDivider().height(1).background('#ECEDEE'),
                                                VStack({ alignment: cTopLeading })(
                                                    Text('SWITCH WORKSPACES').fontSize(12),
                                                    ...ForEach(realms)(realm => (
                                                        HStack({ alignment: cLeading })(
                                                            Text(realm.name)
                                                        ).background({ hover: '#E8EAED' })
                                                            .cursor('pointer')
                                                            .padding(5)
                                                            .onClick(() => {

                                                                updatePrefs({
                                                                    prefs: {
                                                                        ...(me?.prefs ? me?.prefs : {}),
                                                                        workspace: realm.$id
                                                                    }

                                                                })
                                                                _hideHandle();
                                                                navigate(`/app/workspace/${realm.$id}`)
                                                            })
                                                    ))
                                                ).padding()

                                            ).width(250)
                                        )
                                    })

                                )
                                    .hideHandle(hideHandle => _hideHandle = hideHandle)
                                    .dialogPosition(DialogPosition.BOTTOM)
                            )
                                .height()
                                .padding('8px 8px 8px 0px'),

                            VStack({ alignment: cTopLeading })(
                                /*  VStack({ alignment: cLeading })(
                                     Text('APPLETS')
                                         .fontSize(11)
                                         .fontWeight('700'),
     
                                 ).height(40).padding('1px 18px 0 20px'), */
                                ...ForEach(databases)(database =>
                                    //    UIRouteLink(`/app/${getAppFullName()}/database/${database.$id}`)(
                                    DatabaseNameView(database, false, () => { })
                                    //    )
                                ),
                                VStack({ alignment: cTopLeading, spacing: 5 })(
                                    documents ?
                                        ScrollView({ axes: 'cAll', alignment: cTopLeading })(
                                            // Text(documents[0]['opa']),
                                            ...ForEach(documents)(applet =>
                                                UIWidget(applet['opa'])
                                                    .config({
                                                        ...(useParams() || {}),
                                                        appletId: applet.$id
                                                    }),
                                            )
                                        ) : Fragment()
                                    /*  ...ForEach(spaces)(space =>
                                         Text(space.name)
                                     ), */



                                ).padding(8),
                                HStack(
                                    UIViewBuilder(() => {
                                        const { createRealm } = useCreateRealm();
                                        const { workspace_id } = useParams();
                                        return (
                                            HStack({ spacing: 5 })(
                                                //FontIcon(FontIcons.Add, 'sm', '#656f7d'),

                                                Text('New Applet').fontSize(11).fontWeight('500')


                                            )
                                                .margin('5px 20px')
                                                .cornerRadius(5)
                                                .cursor('pointer')
                                                .foregroundColor('#7c828d')
                                                .background({ default: '#f3f4f7', hover: '#e4e4e4' })
                                                .height(24)
                                                .transition('background .2s cubic-bezier(.785,.135,.15,.86) 0s')
                                                .padding('8px 12px 8px 26px')
                                                .onClick(() => {
                                                    DynoDialog.Show(AddAppletDialog(workspaceId));

                                                })
                                        )
                                    })
                                ).height(),

                                HStack(
                                    UIViewBuilder(() => {
                                        const { createDatabase } = useCreateDatabase(workspaceId);
                                        return (
                                            HStack({ spacing: 5 })(
                                                //FontIcon(FontIcons.Add, 'sm', '#656f7d'),
                                                Text('Install Applet').fontSize(11).fontWeight('500')
                                            )
                                                .margin('5px 20px')
                                                .cornerRadius(5)
                                                .cursor('pointer')
                                                .foregroundColor('#7c828d')
                                                .background({ default: '#f3f4f7', hover: '#e4e4e4' })
                                                .height(24)
                                                .transition('background .2s cubic-bezier(.785,.135,.15,.86) 0s')
                                                .padding('8px 12px 8px 26px')
                                                .onClick(async () => {
                                                    SelectAppletDialog.Show(workspaceId);
                                                })
                                        )
                                    })
                                ).height(),
                                HStack(
                                    UIViewBuilder(() => {
                                        const { createDatabase } = useCreateDatabase(workspaceId);
                                        return (
                                            HStack({ spacing: 5 })(
                                                //FontIcon(FontIcons.Add, 'sm', '#656f7d'),
                                                Text('Templates').fontSize(11).fontWeight('500')
                                            )
                                                .margin('5px 20px')
                                                .cornerRadius(5)
                                                .cursor('pointer')
                                                .foregroundColor('#7c828d')
                                                .background({ default: '#f3f4f7', hover: '#e4e4e4' })
                                                .height(24)
                                                .transition('background .2s cubic-bezier(.785,.135,.15,.86) 0s')
                                                .padding('8px 12px 8px 26px')
                                                .onClick(async () => {
                                                    SelectAppletDialog.Show(workspaceId);
                                                })
                                        )
                                    })
                                ).height(),

                                /* HStack({ alignment: cLeading })(
                                    Text('SPACES')
                                        .fontSize(11)
                                        .fontWeight('700')
                                ).height(40).padding('1px 18px 0 20px'), */

                                /*    VStack({ spacing: 5 })(
                                       UIViewBuilder(() => {
                                           const { createProject } = useCreateProject();
                                           const { workspace_id } = useQueryParams();
                                           return (
                                               HStack({ spacing: 5 })(
                                                   Text('NEW SPACE').fontSize(11).fontWeight('500')
                                               )
                                                   .margin('5px 20px')
                                                   .cornerRadius(5)
                                                   .cursor('pointer')
                                                   .foregroundColor('#7c828d')
                                                   .background({ default: '#f3f4f7', hover: '#e4e4e4' })
                                                   .height(24)
                                                   .transition('background .2s cubic-bezier(.785,.135,.15,.86) 0s')
                                                   .padding('8px 12px 8px 26px')
                                                   .onClick(() => {
                                                       DynoDialog.Show(AddSpaceDialog());
                                                   })
                                           )
                                       }),
             
                                       VStack({ alignment: cTopLeading, spacing: 5 })(
                                           ScrollView({ axes: 'cAll', alignment: cTopLeading })(
                                               UIWidget('com.celmino.widget.enterprise-modelling-tree')
                                                   .config({
                                                       workspaceId
                                                   }),
                                               UIWidget('com.celmino.widget.enterprise-modelling-tree')
                                                   .config({
                                                       workspaceId
                                                   })
                                           )
                                         
             
             
                                       )
             
                                   ).padding(cHorizontal, '1rem')
                                       .paddingBottom('0px'), */




                            )

                        )
                    )
                        .fontFamily(fontFamily)
                        .allWidth(282)
                        .transition('width .3s cubic-bezier(.2,0,0,1) 0s')
                        .background('#F7F8F9')
                        .borderRight('1px solid rgba(0,0,0,0.05)')
                        .transition('width .2s ease-in-out')
                )
            }

            )
    )

}

