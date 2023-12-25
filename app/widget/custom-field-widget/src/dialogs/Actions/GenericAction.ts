import { UIViewBuilder, useFormController, useDialog, useFormBuilder, useNavigate, Button, Text } from "@tuval/forms";


export const GenericAction = (formMeta, action) => UIViewBuilder(() => {
    const { label, successAction, successActions, onAction = () => void 0 } = action;
    const formController = useFormController();
    const dialog = useDialog();
    const formBuilder = useFormBuilder();
    const navigate = useNavigate();

    const { databaseId, collectionId, name, workspaceId } = formController.GetFormData();


    return (
        Button(
            Text(label)
        )
            .onClick(() => {
                onAction(formController.GetFormData())
            })
    )
})
