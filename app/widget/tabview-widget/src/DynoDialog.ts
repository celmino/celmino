import { DialogView, FormBuilder, Spinner, VStack, ViewProperty } from "@tuval/forms";


export class DynoDialog extends DialogView {

    @ViewProperty()
    private form: any;

    public constructor() {
        super();
        this.ShowHeader = false;
        this.Header = 'Form'
        this.Width = '924px';
        this.Position = 'right';
        this.Height = '100%'
    }

    public BindRouterParams(formData) {
        this.form = formData;
    }

    public OnOK() {
        this.ShowDialogAsyncResolve();
        this.Hide();
    }

    public OnCancel() {
        this.Hide();
    }

    public override LoadView() {
        return (this.form == null ? Spinner() :
            VStack(
                FormBuilder.render(this.form),
            )
        )
    }

    public static Show(formData: any, width?: string) {
        const dialog = new DynoDialog();
        dialog.ShowHeader = false;
        if (width) {
            dialog.Width = width;
        }
        dialog.BindRouterParams(formData)
        return dialog.ShowDialogAsync();
    }
}