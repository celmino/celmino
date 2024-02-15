import { Text } from "@realmocean/vibe";
import { ForEach, HStack, Heading, HeadingSizes, Icon, SvgIcon, UIFormController, UIRouteOutlet, VStack, cHorizontal, cLeading, cTopLeading, useNavigate, useParams } from "@tuval/forms";

export function getSettingsName() {
    var url = window.location.href;

    // Regex deseni
    var regexPattern = /\/settings\/([^\/]+)/;

    // Regex eşleşmesi
    var matches = url.match(regexPattern);

    // Eğer eşleşme varsa, list parametresini al
    if (matches && matches.length > 1) {
        return matches[1];

    } else {
        return;
    }

}

export class SettingsController extends UIFormController {


    public LoadView() {
        const { workspaceId, appletId } = useParams();

        const menu = [
            {
                id: 'general',
                title: 'General',
                url: `/app/workspace/${workspaceId}/applet/${appletId}/settings/general`,
                icon: SvgIcon('cu3-icon-settings')
            },
            {
                id: 'import',
                title: 'Document Types',
                url: `/app/workspace/${workspaceId}/applet/${appletId}/settings/import`,
                icon: SvgIcon('cu3-icon-importIcon')
            },
            {
                id: 'features',
                title: 'Features',
                url: `/app/workspace/${workspaceId}/applet/${appletId}/settings/features`,
                icon: SvgIcon('cu3-icon-settings')
            },
            {
                id: 'collections',
                title: 'Collections',
                url: `/app/workspace/${workspaceId}/applet/${appletId}/settings/collections`,
                icon: SvgIcon('cu3-icon-settings')
            },
            {
                id: 'import',
                title: 'Integrations',
                url: `/app/workspace/${workspaceId}/applet/${appletId}/settings/import`,
                icon: SvgIcon('cu3-icon-importIcon')
            },
            {
                id: 'security',
                title: 'Security & Permissions ',
                url: `/app/workspace/${workspaceId}/applet/${appletId}/settings/security`,
                icon: SvgIcon('cu3-icon-protectedAlt')
            },
            {
                id: 'import',
                title: 'Imports / Exports',
                url: `/app/workspace/${workspaceId}/applet/${appletId}/settings/import`,
                icon: SvgIcon('cu3-icon-importIcon')
            },




        ]

        const navigate = useNavigate();
        // 
        return (
            HStack(
                VStack({ alignment: cTopLeading })(
                    HStack({ alignment: cLeading })(
                        Heading('DOCUMENT APPLET').h3().foregroundColor('rgb(101, 111, 125)')
                            .fontSize(11).fontWeight('600')
                    ).padding('16px 8px 8px').height()
                    ,
                    ...ForEach(menu)(item =>
                        HStack({ alignment: cLeading, spacing: 8 })(
                            Icon(item.icon).foregroundColor(item.id === getSettingsName() ? 'rgb(84, 77, 201)' : 'rgb(42, 46, 52)'),
                            Text(item.title).fontSize(14).foregroundColor(item.id === getSettingsName() ? 'rgb(84, 77, 201)' : 'rgb(42, 46, 52)')
                                .fontFamily('-apple-system, "system-ui", "Segoe UI", roboto, "Helvetica Neue", helvetica, arial, sans-serif')
                                .lineHeight(16)


                        ).height(32)

                            .cornerRadius(6)
                            .background({ default: item.id === getSettingsName() ? '#E5E4FC' : '', hover: '#E8EAED' })
                            .padding(cHorizontal, 8)
                            .cursor('pointer')
                            .onClick(() => {
                                navigate(item.url);
                            })
                    )
                ).padding()
                    .background('#F7F8F9')
                    .allWidth(240)
                    .margin('0 8px'),
                UIRouteOutlet().width('100%').height('100%')
            )

        )
    }

}