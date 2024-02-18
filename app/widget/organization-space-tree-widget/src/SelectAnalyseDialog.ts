import { useSessionService } from "@realmocean/services";
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
    Search,
    Text,
    UIImage,
    VStack,
    ViewProperty,
    WorkProtocol,
    cCenter,
    cLeading,
    cTopLeading,
    cVertical,
    useNavigate,
    useProtocol,
    useState
} from "@tuval/forms";


export class SelectAnalyseDialog extends DialogView {

    private last_added_opa_type: string;

    @ViewProperty()
    private filtered_opas: any[];

    @ViewProperty()
    private space_id: string;

    @ViewProperty()
    private folder_id: string;

    @ViewProperty()
    private sub_type: string;

    public constructor() {
        super();
        this.Header = 'Select View'
        this.Width = '1300px'
        this.Height = '70vh'

    }


    public BindRouterParams({ space_id, folder_id, views }) {
        this.space_id = space_id;
        this.folder_id = folder_id;
        this.filtered_opas = views;
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



        return (
            /*  RealmDataContext(
                 UICreateContext((create, isLoading) => */
            VStack({ alignment: cTopLeading })(
                ScrollView({ axes: cVertical, alignment: cTopLeading })(

                    /*     Search().width(300).allHeight(70).padding()
                            .onChange((e) => this.filtered_opas = opas.filter(opa => opa.name.toLowerCase().indexOf(e.toLowerCase()) > -1)), */
                    HStack({ alignment: cTopLeading })(
                        ...ForEach(this.filtered_opas)(opa =>
                            VStack(
                                VStack({ alignment: cTopLeading, spacing: 10 })(
                                    opa.image &&
                                    UIImage(opa.image).width(50).height(50).cornerRadius('20%'),
                                    opa.image == null && opa.icon &&
                                    HStack(
                                        Icon(opa.icon).fontSize(30).foregroundColor('white')
                                    )
                                        .background("#03C3AD")
                                        .width(50).height(50).cornerRadius('50%'),

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
                                                this.SetValue('name', opa.name);
                                                this.SetValue('folder_id', this.folder_id);
                                                this.SetValue('space_id', this.space_id);
                                                this.SetValue('tenant_id', useSessionService().TenantId);
                                                this.SetValue('account_id', useSessionService().AccountId);
                                                this.SetValue('item_type', 'opa');
                                                this.SetValue('item_sub_type', opa.type);
                                                this.SetValue('app_id', 'com.tuvalsoft.app.workbench');
                                                this.SetValue('content', '')

                                                this.last_added_opa_type = opa.type;



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

    public static Show(space_id: string, folder_id: string, views: any[]) {

        const dialog = new SelectAnalyseDialog();
        dialog.BindRouterParams({ space_id, folder_id, views })
        return dialog.ShowDialogAsync();
    }
}