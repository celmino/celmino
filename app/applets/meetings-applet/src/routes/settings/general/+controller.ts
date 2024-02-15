import { useGetDocument, useUpdateDocument } from "@realmocean/sdk";
import { Text } from "@realmocean/vibe";
import { HStack, TextField, UIFormController, UIWidget, VStack, cLeading, cTopLeading, useParams } from "@tuval/forms";

export class GeneralSettingsController extends UIFormController {
    public LoadView() {

        const { workspaceId, appletId } = useParams();

        const { document: applet } = useGetDocument({ projectId: workspaceId, databaseId: 'workspace', collectionId: 'applets', documentId: appletId });

        const { updateDocument } = useUpdateDocument(workspaceId);

        return (
            VStack({ alignment: cTopLeading })(
                HStack({ alignment: cLeading })(
                    Text('General').fontSize(24).fontWeight('600')
                        .foregroundColor('rgb(42, 46, 52)')
                        .lineHeight(32)
                )
                    .height()
                    .margin('0 0 30px'),
                HStack({ alignment: cLeading })(
                    Text('Applet').fontSize(20).fontWeight('600')
                        .foregroundColor('rgb(42, 46, 52)')
                        .lineHeight(32)
                )
                    .height()
                    .margin('0 0 30px'),
                HStack({ alignment: cLeading, spacing: 10 })(
                    HStack({ alignment: cLeading })(
                        Text('Name').fontSize(16).fontWeight('600')
                            .foregroundColor('rgb(42, 46, 52)')
                            .lineHeight(32)
                    ).height().width(300),
                    HStack(
                        TextField()
                            .value(applet?.name)
                            .border('0')
                            .outline({ focus: 'none' })
                            .shadow('rgba(224, 227, 230, 0.7) 0px 0px 0px 1px')
                            .padding(12)
                            .cornerRadius(6)
                    ).height().width(400)
                )
                    .height()
                    .margin('0 0 30px'),

                HStack({ alignment: cLeading, spacing: 10 })(
                    HStack({ alignment: cLeading })(
                        Text('Icon').fontSize(16).fontWeight('600')
                            .foregroundColor('rgb(42, 46, 52)')
                            .lineHeight(32)
                    ).height().width(300),
                    HStack(
                        UIWidget("com.tuvalsoft.widget.icons")
                            .config({
                                onChange: (value) => {
                                    updateDocument({
                                        databaseId: 'workspace',
                                        collectionId: 'applets',
                                        documentId: appletId,
                                        data: {
                                            iconName: value.iconName,
                                            iconCategory: value.iconCategory
                                        }
                                    })
                                },
                                selectedIcon: applet?.iconName,
                                color: applet?.bg_color,
                                selectedCategory: applet?.iconCategory,
                                width: 32,
                                height: 32
                            })
                    )
                        .border('1px dashed rgba(69,104,251,.3)')
                        .transition('border-color .12s ease-in-out')
                        .cornerRadius(6)
                        .padding(4)
                        //.background('#FCE8E8')
                        .width(44).height(44).cornerRadius(5),
                )
                    .height()
                    .margin('0 0 30px')



            )
                .padding('24px 48px')
        )
    }

}