import { Button, ButtonSize, ButtonType, DialogView, ForEach, HStack, Heading, Icon, Icons, ScrollView, Spacer, UIImage, UIView, VStack, ViewProperty, cCenter, cLeading, cTopLeading, cVertical, useParams, useState } from "@tuval/forms";

import { useCreateDocument, Services, ID } from "@realmocean/sdk";
import { Text, TextField } from "@realmocean/vibe";
import { Applets } from "../Applets";


const appletMenu = [
    {
        category: 'Explore',
        items: [
            { name: 'All applets', icon: 'Apps' },
            { name: 'Featured', icon: 'Star' },
            { name: 'Recent', icon: 'Clock' },
            { name: 'Popular', icon: 'Fire' },
            { name: 'My applets', icon: 'User' }
        ]
    },
    {
        category: 'Browse by category',
        items: [
            { name: 'Data', icon: 'Data' },
            { name: 'Design', icon: 'Design' },
            { name: 'Development', icon: 'Development' },
            { name: 'Finance', icon: 'Finance' },
            { name: 'Health', icon: 'Health' },
            { name: 'HR', icon: 'HR' },
            { name: 'Marketing', icon: 'Marketing' },
            { name: 'Operations', icon: 'Operations' },
            { name: 'Sales', icon: 'Sales' },
            { name: 'Security', icon: 'Security' },
            { name: 'Support', icon: 'Support' },
            { name: 'Other', icon: 'Other' }
        ]
    }
]

export class SelectAppletDialog extends DialogView {

    private last_added_opa_type: string;

    @ViewProperty()
    private filtered_opas: any[];

    @ViewProperty()
    private workspaceId: string;

    @ViewProperty()
    private parent: string;

    public BindRouterParams({ workspaceId, parent }) {
        this.workspaceId = workspaceId;
        this.parent = parent;
    }
    public constructor() {
        super();
        this.ShowHeader = true;
        this.Header = 'Form'
        this.Width = '90vw';
        this.Height = '90vh'

        this.filtered_opas = Applets;
    }

    public OnOK(applet) {
        this.ShowDialogAsyncResolve(applet);
        this.Hide();
    }

    public OnCancel() {
        this.Hide();
    }


    public override LoadView(): UIView {

        const { createDocument } = useCreateDocument(this.workspaceId, 'workspace', 'applets');
        const [installingOpa, setInstallingOpa] = useState('');

        return (
            VStack({ alignment: cTopLeading })(
                HStack(
                    HStack({ alignment: cLeading })(
                        Text('applet').fontSize(20).fontWeight('700'),
                        Text('library').fontSize(20).fontWeight('400')
                    ),
                    Icon(Icons.Close).onClick(() => this.OnCancel())
                ).height(50).padding().background('#F9FAFB'),

                /*     Search().width(300).allHeight(70).padding()
                        .onChange((e) => this.filtered_opas = opas.filter(opa => opa.name.toLowerCase().indexOf(e.toLowerCase()) > -1)), */
                HStack({ alignment: cTopLeading })(
                    VStack({ alignment: cTopLeading })(
                        ...ForEach(appletMenu)(menu =>
                            VStack({ alignment: cTopLeading })(
                                Text(menu.category).fontWeight('500').fontSize('var(--font-size-h4)')
                                    .paddingLeft('12px')
                                    .marginBottom('12px'),
                                ...ForEach(menu.items)(item =>
                                    VStack({ alignment: cTopLeading })(
                                        Text(item.name).fontSize('var(--font-size-h5)')
                                            .padding('var(--spacing-xs) 0 var(--spacing-xs)')
                                            .paddingLeft('12px')
                                            .cornerRadius('var(--border-radius-small)')
                                            .lineHeight('var(--font-line-height-h2)')
                                            .foregroundColor('#323338')
                                    ).height()
                                )
                            ).height().marginBottom('var(--spacing-large)')
                        )
                    )
                        .padding('var(--spacing-medium)')
                        .width(300)
                    ,
                    ScrollView({ axes: cVertical, alignment: cTopLeading })(
                        HStack({ alignment: cTopLeading })(
                            ...ForEach(this.filtered_opas)(opa =>
                                VStack(
                                    VStack({ alignment: cTopLeading, spacing: 5 })(
                                        HStack(
                                            opa.image &&
                                            UIImage(opa.image).width(50).height(50).cornerRadius('20%')
                                                .filter(opa.type === 'Applet' ? 'grayscale(1)' : 'none'),
                                            opa.icon &&
                                            HStack(
                                                Icon(opa.icon).fontSize(40).foregroundColor('rgb(109, 122, 131)')
                                            ).width(50).height(50).cornerRadius('20%'),

                                            //.background(opa.iconBackColor || '#9A0707'),
                                            Spacer(),
                                            Text(opa.type).fontSize('1.4rem').fontWeight('500').foregroundColor('hsl(205, 9%, 47%)')
                                        ).height()
                                        //    .shadow('0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)'),
                                        ,
                                        HStack({ alignment: cLeading })(
                                            Text(opa.name).fontSize('1.8rem').lineHeight('2rem').maxLines(2)
                                        )
                                            .minHeight('4rem')
                                            .height(),
                                        Text('By Tuvalsoft').fontSize('1.4rem').foregroundColor('#676879'),
                                        HStack({ alignment: cLeading })(
                                            Text(opa.description || '').maxLines(2).fontSize('1.4rem').foregroundColor('#676879')

                                        ).height()

                                        ,
                                        Spacer(),
                                        HStack({ alignment: cCenter })(
                                            Button(
                                                Text('Add')
                                            )
                                                // .loading(isLoading && (opa.type === this.last_added_opa_type))
                                                .disabled(!opa.enabled)
                                                .kind(ButtonType.SECONDARY)
                                                .size(ButtonSize.SMALL)
                                                .loading(installingOpa === opa.type)
                                                .width('100%')
                                                .onClick(async () => {
                                                    /*  this.SetValue('name', opa.name);
                                                     this.SetValue('folder_id', this.folder_id);
                                                     this.SetValue('space_id', this.space_id);
                                                    this.SetValue('item_type', 'opa');
                                                     this.SetValue('item_sub_type', opa.type);
                                                     this.SetValue('app_id', 'com.tuvalsoft.app.workbench');
                                                     this.SetValue('content', '')
         
                                                     this.last_added_opa_type = opa.type; */

                                                    /* fetch('./data.json')
                                                    .then((response) => response.json())
                                                    .then((json) => console.log(json)); */

                                                    createDocument({
                                                        data: {
                                                            name: opa.name,
                                                            opa: opa.tree_type,
                                                            type: opa.applet_type,
                                                            iconName: opa.iconName,
                                                            iconCategory: opa.iconCategory,
                                                            parent: this.parent
                                                        }
                                                    }, async (applet) => {
                                                        if (opa.databases) {
                                                            setInstallingOpa(opa.type);
                                                            Services.Client.setProject(this.workspaceId);

                                                            for (let i = 0; i < opa.databases.length; i++) {
                                                                const template = opa.databases[i];
                                                                const { name, id, category, collections } = template;
                                                                try {
                                                                    const db = await Services.Databases.create(this.workspaceId, applet.$id, opa.name, category);
                                                                    for (let j = 0; j < collections.length; j++) {
                                                                        const collection = collections[j];
                                                                        const { name, id, attributes, documents } = collection;
                                                                        const col = await Services.Databases.createCollection(this.workspaceId, db.$id, id, name, [], false);

                                                                        for (let i = 0; i < attributes.length; i++) {
                                                                            const { key, type, defaultValue = null, size = 255 } = attributes[i];
                                                                            switch (type) {
                                                                                case 'string':
                                                                                    await Services.Databases.createStringAttribute(this.workspaceId, db.$id, col.$id, key, size, false, '', false);
                                                                                    break;
                                                                                case 'number':
                                                                                    await Services.Databases.createIntegerAttribute(this.workspaceId, db.$id, col.$id, key, false);
                                                                                    break;
                                                                                case 'datetime':
                                                                                    await Services.Databases.createDatetimeAttribute(this.workspaceId, db.$id, col.$id, key, false);
                                                                                    break;
                                                                                case 'boolean':
                                                                                    await Services.Databases.createBooleanAttribute(this.workspaceId, db.$id, col.$id, key, false, defaultValue ?? false);
                                                                                    break;
                                                                            }
                                                                        }

                                                                        setTimeout(() => {
                                                                            documents?.forEach(async document => {
                                                                                const doc = await Services.Databases.createDocument(this.workspaceId, db.$id, col.$id, ID.unique(), document);
                                                                                console.log(doc);
                                                                            });
                                                                        }, 3000);
                                                                    }

                                                                } catch (error) {
                                                                    console.log(error);
                                                                }
                                                            }
                                                            setInstallingOpa('');
                                                            this.OnOK(applet)
                                                        } else {

                                                            this.OnOK(applet)
                                                        }
                                                    });



                                                })
                                        ).height()
                                    ).height(250).width(290)
                                        .padding()
                                        .shadow({ hover: 'var(--box-shadow-medium)' })
                                        .cornerRadius('var(--border-radius-medium)')
                                        .border({ default: 'solid 1px var(--layout-border-color)', hover: 'solid 1px var(--dialog-background-color)' })
                                ).width().height().padding()
                            )
                        ).wrap('wrap').height()
                    )
                )

            )
        )
    }
    public static Show(workspaceId: string, parent: string = '-1') {
        const dialog = new SelectAppletDialog();
        dialog.ShowHeader = false;
        /*  if (width) {
             dialog.Width = width;
         } */
        dialog.BindRouterParams({ workspaceId, parent })
        return dialog.ShowDialogAsync();
    }
}