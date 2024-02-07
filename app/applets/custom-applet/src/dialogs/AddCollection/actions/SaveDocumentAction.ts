import { Permission, Role, useCreateDocument } from "@realmocean/sdk";
import {
    Button,
    Text,
    UIViewBuilder,
    useDialog, useFormBuilder,
    useFormController,
    useNavigate
} from "@tuval/forms";




export const SaveDocumentAction = (formMeta, action) => UIViewBuilder(() => {
    const { label, successAction, successActions } = action;
    const formController = useFormController();
    const dialog = useDialog();
    const formBuilder = useFormBuilder();
    const navigate = useNavigate();

    let invalidateResource = null;
    let formMutate = null;
    let createMutate = null;
    let updateMutate = null;
    let isFormMutateExcuting = false;
    let isFormLoading = false;

    const views = []
    const { databaseId, collectionId , workspaceId} = formController.GetFormData();
    const { createDocument, isLoading } = useCreateDocument(workspaceId, databaseId, collectionId);

    return (
        Button(
            Text('Save Document_')
        )
            .loading(isLoading)
            .onClick(() => {
                
                const data = { ...formController.GetFormData() }
                delete data.databaseId;
                delete data.collectionId;
                delete data.workspaceId;

              
                if (databaseId == null) {
                    alert('Collection is null');
                    return;
                }

                createDocument(
                    {
                        data: {
                            ...data
                        },
                        permissions: [
                            Permission.read(Role.any()),
                            Permission.update(Role.any()),
                            Permission.delete(Role.any())
                        ]
                    },
                    () => {
                        dialog.Hide();
                    }
                )

            })
    )
}
)



