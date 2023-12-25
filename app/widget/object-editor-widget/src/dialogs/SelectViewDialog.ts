import {
    Button,
    ButtonSize,
    ButtonType,
    DialogView,
    ForEach,
    Fragment,
    HStack,
    Heading,
    Icon,
    Spacer,
    Text,
    UIImage,
    VStack,
    ViewProperty,
    cCenter,
    cHorizontal,
    cLeading,
    cTopLeading
} from "@tuval/forms";



export class SelectViewDialog extends DialogView {

    private last_added_opa_type: string;


    @ViewProperty()
    private views: any[];

    @ViewProperty()
    private PowerUps: any[];

    @ViewProperty()
    private filtered_opas: any[];



    public constructor() {
        super();
        this.Header = 'Task Power Ups'
        this.Width = '1300px'
        this.Height = '70vh'
       

    }


    public BindRouterParams(views, powerUps) {
        this.views = views;
        this.PowerUps = powerUps;
        this.filtered_opas = [...this.views, ...this.PowerUps];
    }

    public OnOK(applet) {
        this.ShowDialogAsyncResolve(applet);
        this.Hide();
    }

    public OnCancel() {
        this.Hide();
    }

    public override LoadView() {
        return (
            HStack({ alignment: cTopLeading })(
                HStack({ alignment: cTopLeading })(
                    ...ForEach(this.filtered_opas)(opa =>
                        VStack(
                            VStack({ alignment: cTopLeading, spacing: 10 })(
                                HStack({ alignment: cLeading })(
                                    opa.image ?
                                        UIImage(opa.image).width(50).height(50).cornerRadius('20%')
                                            .filter('drop-shadow(2px 2px 4px rgb(0, 0, 0, 20%))') : Fragment(),
                                    (opa.image == null && opa.icon) ?
                                        HStack(
                                            Icon(opa.icon).fontSize(30).foregroundColor('white')
                                        )
                                            .background("#03C3AD")
                                            .width(50).height(50).cornerRadius('50%')
                                            .filter('drop-shadow(2px 2px 4px rgb(0, 0, 0, 20%))') : Fragment(),
                                    Spacer(),
                                    opa.tag &&
                                    HStack(
                                        Text(opa.tag)
                                    )
                                        .fontSize(12).fontWeight('500')
                                        .foregroundColor('#fff')
                                        .position('absolute')
                                        .left('calc(100% - 100px)')
                                        .top('-50px')
                                        .height(30).width(170).padding(5).padding(cHorizontal, 10).cornerRadius(5).background('#7b68ee')
                                        .transformOrigin('left bottom')
                                        .transform('rotate(45deg)')
                                ),

                                // .shadow('0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)'),
                                HStack({ alignment: cLeading })(
                                    Heading(opa.name).h4()
                                ).allHeight(25)
                                ,
                                HStack({ alignment: cTopLeading })(
                                    Heading(opa.description || '').h6().ellipsis(true)
                                        .ellipsisMaxLines(2)
                                ).allHeight(50)
                                ,
                                HStack({ alignment: cCenter })(
                                    Button(
                                        Text('Add')
                                    )
                                        // .loading(isLoading && (opa.type === this.last_added_opa_type))
                                        .disabled(!opa.enabled)
                                        .kind(ButtonType.SECONDARY)
                                        .size(ButtonSize.SMALL)
                                        .width('100%')
                                        .onClick(() => {
                                            /*  this.SetValue('name', opa.name);
                                             this.SetValue('folder_id', this.folder_id);
                                             this.SetValue('space_id', this.space_id);
                                             this.SetValue('tenant_id', useSessionService().TenantId);
                                             this.SetValue('account_id', useSessionService().AccountId);
                                             this.SetValue('item_type', 'opa');
                                             this.SetValue('item_sub_type', opa.type);
                                             this.SetValue('app_id', getAppFullName());
                                             this.SetValue('content', '')
 
                                             this.last_added_opa_type = opa.type;
  */


                                            this.OnOK({
                                                name: opa.name,
                                                type: opa.type
                                            })


                                        })
                                ).height()
                            ).height(230).width(290)
                                .padding()
                                .shadow({ hover: 'var(--box-shadow-medium)' })
                                .cornerRadius('var(--border-radius-medium)')
                                .border({ default: 'solid 1px var(--layout-border-color)', hover: 'solid 1px var(--dialog-background-color)' })
                                .overflow('hidden')
                        ).width().height().padding()
                    )
                ).wrap('wrap').height()
            )

        )
    }

    public static Show(views, powerUps) {
        const dialog = new SelectViewDialog();
        dialog.BindRouterParams(views, powerUps)
        return dialog.ShowDialogAsync();
    }
}