import { Permission, Role, useCreateCollection } from "@realmocean/sdk";
import {
    Button,
    Text,
    UIViewBuilder,
    useDialog,
    useFormController
} from "@tuval/forms";




export const SaveCollectionAction = (formMeta, action) => UIViewBuilder(() => {
    const { label, successAction, successActions } = action;
    const formController = useFormController();
    const dialog = useDialog();

    let invalidateResource = null;
    let formMutate = null;
    let createMutate = null;
    let updateMutate = null;
    let isFormMutateExcuting = false;
    let isFormLoading = false;

    const views = []
    const { protocol, resource, method } = formMeta as any;

    const { databaseId, name, workspaceId } = formController.GetFormData();
    
    const { createCollection, isLoading } = useCreateCollection(workspaceId);



    return (
        Button(
            Text('Save Collection')
        )
            .loading(isLoading)
            .onClick(() => {
                
                if (databaseId == null) {
                    alert('Collection is null');
                    return;
                }
                createCollection({
                    databaseId,
                    name: name,
                    permissions: [
                        Permission.read(Role.any()),
                        Permission.update(Role.any()),
                        Permission.update(Role.any()),
                        Permission.delete(Role.any()),
                        Permission.delete(Role.any()),
                    ],
                    enabled: true
                }, () => {
                    dialog.Hide();
                })
            })
    )
}
)



