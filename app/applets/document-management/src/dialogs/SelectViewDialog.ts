import {
    Button,
    ButtonSize,
    ButtonType,
    DialogView,
    ForEach,
    HStack,
    Heading,
    Text,
    UIImage,
    VStack,
    ViewProperty,
    cCenter,
    cTopLeading,
    useNavigate
} from "@tuval/forms";
import { views } from "../Views";

export class SelectViewDialog extends DialogView {

    private last_added_opa_type: string;

    @ViewProperty()
    private filtered_opas: any[];

    @ViewProperty()
    private workspaceId: string;

    @ViewProperty()
    private listId: string;

    @ViewProperty()
    private sub_type: string;

    public constructor() {
        super();
        this.Header = 'Select View'
        this.Width = '70vw'
        this.Height = '70vh'

    }


    public BindRouterParams({ workspaceId, listId }) {
        this.workspaceId = workspaceId;
        this.listId = listId;
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
                                        .width('100%')
                                        .onClick(() => {
                                          
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

    public static Show(workspaceId: string, listId: string) {

        const dialog = new SelectViewDialog();
        dialog.BindRouterParams({ workspaceId, listId })
        return dialog.ShowDialogAsync();
    }
}