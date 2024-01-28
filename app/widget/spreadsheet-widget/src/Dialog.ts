import { Button, DialogView, ForEach, Fragment, ScrollView, Spinner, Text, UIWidget, VStack, ViewProperty, cTopLeading, useParams } from "@tuval/forms";

import { useListDocuments } from "@realmocean/sdk";


export class DynoDialog extends DialogView {

    @ViewProperty()
    private workspaceId: string;

    public constructor() {
        super();
        this.Header = 'Form'
        this.Width = '624px';
        this.Position = 'center';
        this.Height = '50%'
    }

    public BindRouterParams(workspaceId: string) {
        this.workspaceId = workspaceId;
    }

    public OnOK() {
        this.ShowDialogAsyncResolve();
        this.Hide();
    }

    public OnCancel() {
        this.Hide();
    }

    public override LoadView() {



        const { documents } = useListDocuments(this.workspaceId, 'workspace', 'applets', [
            // Query.equal('opa', 'com.celmino.widget.enterprise-modelling-tree')

        ]);



        return (
            VStack({ alignment: cTopLeading, spacing: 5 })(
                documents ?
                    ScrollView({ axes: 'cAll', alignment: cTopLeading })(

                        // Text(documents[0]['opa']),
                        ...ForEach(documents)((applet, index) =>

                            UIWidget(applet['opa'])
                                .config({
                                    workspaceId: this.workspaceId,
                                    appletId: applet.$id,
                                    onItemSelected: (info) => {
                                        this.ShowDialogAsyncResolve(info);
                                        this.Hide();
                                    }
                                }),
                        ),
                        Button(
                            Text('OK')
                        ).onClick(() => this.OnOK())
                    ) : Fragment()
                /*  ...ForEach(spaces)(space =>
                     Text(space.name)
                 ), */



            ).padding(8)

        )
    }

    public static Show(workspaceId: string) {
        const dialog = new DynoDialog();
        dialog.ShowHeader = false;
        dialog.BindRouterParams(workspaceId)
        return dialog.ShowDialogAsync();
    }
}