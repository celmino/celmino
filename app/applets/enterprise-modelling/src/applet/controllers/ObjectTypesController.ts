import { Query, useListDocuments } from "@realmocean/sdk";
import { ButtonRenderer } from "@realmocean/antd";
import { Button, HStack, Text, UIDataTable, UIFormController, UIView, VStack, cLeading, useDialog, useDialogStack, useParams } from "@tuval/forms";

export class ObjectTypesController extends UIFormController {

    public override LoadView(): UIView {
        const { openDialog } = useDialogStack();
        const { workspaceId } = useParams();
        const { documents } = useListDocuments(workspaceId, 'enterprise_modelling', 'object_types', [
            Query.limit(10000)
        ])
        return (
            VStack(
                Button().label('Test').renderer(ButtonRenderer).onClick(() => {
                    openDialog({
                        title: 'Test',
                        view: Text('Test'),
                    })
                }),
                UIDataTable()
                    .columns([
                        {
                            field: 'Name',
                            header: (data) => HStack({ alignment: cLeading })(
                                Text('Name')
                            )
                                .padding(10)
                        },
                    ])
                    .model(documents)
            ).padding()

        )

    }

}