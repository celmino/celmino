import { Button, ButtonSize, ButtonType, DialogView, ForEach, HStack, Heading, Icon, Icons, Text, UIImage, UIView, VStack, ViewProperty, cCenter, cLeading, cTopLeading, useParams, useState } from "@tuval/forms";
import { Applets } from "./Applets";
import { useCreateDocument, Services, ID } from "@realmocean/sdk";


export class SelectAppletDialog extends DialogView {

    private last_added_opa_type: string;

    @ViewProperty()
    private filtered_opas: any[];

    @ViewProperty()
    private workspaceId: string;

    public BindRouterParams({ workspaceId }) {
        this.workspaceId = workspaceId;
    }
    public constructor() {
        super();
        this.ShowHeader = true;
        this.Header = 'Form'
        this.Width = '80vw';
        this.Height = '600px'

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

        const { createDocument } = useCreateDocument(this.workspaceId,'workspace','applets');
        const [installingOpa, setInstallingOpa] = useState('');

        return (
            VStack({ alignment: cTopLeading })(
                HStack(
                    HStack({ alignment: cLeading })(
                        Heading('Install Applet').h3()
                    ),
                    Icon(Icons.Close).onClick(() => this.OnCancel())
                ).height(50).padding().background('#F9FAFB'),

                /*     Search().width(300).allHeight(70).padding()
                        .onChange((e) => this.filtered_opas = opas.filter(opa => opa.name.toLowerCase().indexOf(e.toLowerCase()) > -1)), */
                HStack({ alignment: cTopLeading })(
                    ...ForEach(this.filtered_opas)(opa =>
                        VStack(
                            VStack({ alignment: cTopLeading, spacing: 10 })(
                                opa.image &&
                                UIImage(opa.image).width(50).height(50).cornerRadius('20%'),
                                // .shadow('0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)'),
                                Heading(opa.name).h4(),
                                Heading(opa.description || '').h6().ellipsis(true)
                                    .ellipsisMaxLines(2)
                                ,
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

                                            await createDocument({
                                                data: {
                                                    name: opa.name,
                                                    opa: opa.type
                                                }
                                            });
                                            if (opa.databases) {
                                               setInstallingOpa(opa.type);
                                                Services.Client.setProject(this.workspaceId);

                                                for (let i = 0; i < opa.databases.length; i++) {
                                                    const template = opa.databases[i];
                                                    const { name, id, category, collections } = template;
                                                    try {
                                                        const db = await Services.Databases.create(this.workspaceId, id, name, category);
                                                        for (let j = 0; j < collections.length; j++) {
                                                            const collection = collections[j];
                                                            const { name, id, attributes, documents } = collection;
                                                            const col = await Services.Databases.createCollection(this.workspaceId, db.$id, id, name, [], false);

                                                            for (let i = 0; i < attributes.length; i++) {
                                                                const { key, type } = attributes[i];
                                                                switch (type) {
                                                                    case 'string':
                                                                        console.log('1');
                                                                        await Services.Databases.createStringAttribute(this.workspaceId, db.$id, col.$id, key, 256, false, '', false);
                                                                        break;
                                                                    case 'number':
                                                                        console.log('1');
                                                                        await Services.Databases.createIntegerAttribute(this.workspaceId, db.$id, col.$id, key, false);
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
                                                this.OnOK({
                                                    name: opa.name,
                                                    type: opa.type
                                                })
                                            } else {

                                                this.OnOK({
                                                    name: opa.name,
                                                    type: opa.type
                                                })
                                            }


                                        })
                                ).height()
                            ).height(230).width(290)
                                .padding()
                                .shadow({ hover: 'var(--box-shadow-medium)' })
                                .cornerRadius('var(--border-radius-medium)')
                                .border({ default: 'solid 1px var(--layout-border-color)', hover: 'solid 1px var(--dialog-background-color)' })
                        ).width().height().padding()
                    )
                ).wrap('wrap').height()
            )
        )
    }
    public static Show(workspaceId: string) {
        const dialog = new SelectAppletDialog();
        dialog.ShowHeader = false;
        /*  if (width) {
             dialog.Width = width;
         } */
        dialog.BindRouterParams({ workspaceId })
        return dialog.ShowDialogAsync();
    }
}