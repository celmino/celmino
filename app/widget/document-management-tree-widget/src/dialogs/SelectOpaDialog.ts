import {
    Button,
    ButtonSize,
    ButtonType,
    DialogView,
    ForEach,
    HStack,
    Heading,
    Icon,
    ScrollView,
    Text,
    UIImage,
    VStack,
    ViewProperty,
    cCenter,
    cTopLeading,
    cVertical,
    useNavigate
} from "@tuval/forms";

import { Text as VibeText } from '@realmocean/vibe'

const findOpa = (opas, type) => {
    return opas.find(opa => opa.type == type)
}

export class SelectOpaDialog extends DialogView {

    private last_added_opa_type: string;

    @ViewProperty()
    private filtered_opas: any[];

    @ViewProperty()
    private parentId: string;

    @ViewProperty()
    private parentType: string;



    @ViewProperty()
    private opas: any[];

    public constructor() {
        super();
        this.Header = 'Select Applet'
        this.Width = '1300px'
        this.Height = '70vh'

    }


    public BindRouterParams({ parentId, parentType, opas }) {
        this.parentId = parentId;
        this.parentType = parentType;
        this.opas = opas

        this.filtered_opas = opas;
    }

    public OnOK(applet) {
        this.ShowDialogAsyncResolve(applet);
        this.Hide();
    }

    public OnCancel() {
        this.Hide();
    }


    public override LoadView() {

        const navigate = useNavigate();
        /* const { createApplet } = useCreateApplet([
            Query.equal('parentId', this.parentId),
        ]); */


        return (

            VStack({ alignment: cTopLeading })(

                ScrollView({ axes: cVertical, alignment: cTopLeading })(
                    HStack({ alignment: cTopLeading })(
                        ...ForEach(this.filtered_opas)(opa =>
                            VStack(
                                VStack({ alignment: cTopLeading, spacing: 10 })(
                                    opa.image &&
                                    UIImage(opa.image).width(50).height(50).cornerRadius('20%'),
                                    opa.icon &&
                                    HStack(
                                        Icon(opa.icon).fontSize(40).foregroundColor('white')
                                    ).width(50).height(50).cornerRadius('20%').background(opa.iconBackColor || '#9A0707')
                                        .shadow('0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)')
                                    ,
                                    // .shadow('0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)'),
                                    Heading(opa.name).h4().ellipsis(true).ellipsisMaxLines(1).width(250),
                                    VibeText(opa.description || '').maxLines(2)
                                    ,
                                    HStack({ alignment: cCenter })(
                                        Button(
                                            Text('Add')
                                        )

                                            .disabled(!opa.enabled)
                                            .kind(ButtonType.SECONDARY)
                                            .size(ButtonSize.SMALL)
                                            .width('100%')
                                            .onClick(() => {

                                                const _opa = findOpa(this.opas, opa.type)
                                                this.last_added_opa_type = opa.type;

                                                /*   createApplet({
                                                      name: opa.name,
                                                      parentId: this.parentId,
                                                      parentType: this.parentType,
                                                      opa: opa.type,
                                                      icon:'AAA',
                                                      color:'#7B68EE',
                                                      settings: _opa.settings 
                                                  }) */


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
            /* ).resource('space-folder-items')
                .onSuccess((e) => {
                    // alert(JSON.stringify(e))
                    this.InvalidateQuerie('space-folder-items')
                    this.OnOK();
                    navigate(`/app/com.tuvalsoft.app.workbench/_opa/${this.last_added_opa_type}/${this.space_id}/${this.folder_id}/${e.id}/${e.id}`)

                })
        ) */
        )
    }

    public static Show(parentId: string, parentType: string, opas: any[]) {

        const dialog = new SelectOpaDialog();
        dialog.BindRouterParams({ parentId, parentType, opas })
        return dialog.ShowDialogAsync();
    }
}