import { useCreateCollection, Permission, Role, useCreateStringAttribute, useCreateIntegerAttribute, useCreateRelationshipAttribute, useListCollections } from "@celmino/sdk";
import { text } from "@fortawesome/fontawesome-svg-core";
import { is } from "@tuval/core";
import { Button, Dropdown, FormBuilder, HStack, Text, UIViewBuilder, VStack, cLeading, cTopLeading, useDialog, useFormBuilder, useFormController, useNavigate, useProtocol } from "@tuval/forms";





export const SaveRelationFieldAction = (formMeta, action) => UIViewBuilder(() => {
    const { label, successAction, successActions } = action;
    const formController = useFormController();
    const dialog = useDialog();
    const formBuilder = useFormBuilder();
    const navigate = useNavigate();

    const { databaseId, collectionId, name, relatedCollectionId, workspaceId } = formController.GetFormData();
    
    const { createRelationshipAttribute, isLoading } = useCreateRelationshipAttribute(workspaceId);

 

    return (
        Button(
            Text('Save Field')
        )
            .loading(isLoading)
            .onClick(() => {
              
                if (databaseId == null) {
                    alert('Collection is null');
                    return;
                }

                createRelationshipAttribute({
                    databaseId,
                    collectionId,
                    key: name,
                    relatedCollectionId,
                    type: 'manyToMany',
                    twoWay: false,
                    twoWayKey: collectionId + '_' + name,
                    onDelete: 'restrict'
                }, () => {
                    dialog.Hide();
                })
            })
    )
})



export const SelectDBCollectionView = (textData: any) => {
    const formController = useFormController();
    let { value, name } = textData;



    const { databaseId, workspaceId } = formController.GetFormData();

    const { collections } = useListCollections(workspaceId, databaseId);

    /*  if (defaultValue == null) {
         defaultValue = formController.GetValue(fieldId);
     }
 
     const formState = formController.GetFieldState(name);
 
     if (!formState.isTouched && defaultValue != null) {
         formController.SetValue(name, defaultValue, true);
     }
 
     if (query != null) {
         const { body, resource, text, key } = query; */


    return (
        VStack({ alignment: cTopLeading })(
            Dropdown((option) =>
                HStack({ alignment: cLeading })(
                    Text(option['name'])
                )

            )((option) =>
                HStack({ alignment: cLeading })(
                    Text(option['name'])
                )
                    .paddingLeft('10px')
            )
                .floatlabel(false)
                .dataSource(collections/* textData?.options[0]?.items.map(item => ({ text: item, value: item })) */)
                .fields({ text: 'name', value: '$id' })
                //.placeHolder(params.placeholder)
                .width('100%')
                .height(38)
                .formField(name, [])
                .border('1px solid #D6E4ED')
                .shadow({ focus: 'none' })
        ).height().marginBottom('16px')
    )


}



export const AddRelationFieldDialog = (workspaceId: string, databaseId: string, collectionId: string) => ({
    "title": 'Add relation field',
    "actions": [
        {
            "label": "Save",
            "type": "saveRelationField"
        }
    ],
    "fieldMap": {
        "workspaceId": {
            "name": "workspaceId",
            "type": "virtual",
            "value": workspaceId
        },

        "databaseId": {
            "name": "databaseId",
            "type": "virtual",
            "value": databaseId
        },
        "collectionId": {
            "name": "collectionId",
            "type": "virtual",
            "value": collectionId
        },
        "name": {
            "label": "Name",
            "type": "text",
            "name": "name"
        },
        "description": {
            "label": "Description",
            "type": "text",
            "multiline": true,
            "name": "description"
        },
        "selectCollection": {
            "label": "Collection",
            "type": "collectionSelect",
            "name": "relatedCollectionId"
        },

    }
})

