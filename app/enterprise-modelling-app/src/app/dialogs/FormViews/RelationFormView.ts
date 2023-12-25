import { useListDocuments } from "@celmino/sdk";
import { ButtonRenderer, SelectRenderer } from "@realmocean/antd";
import { is } from "@tuval/core";
import { Button, Dropdown, ForEach, HStack, Select, Text, TextAlignment, TextField, VStack, cLeading, cTopLeading, useFormController } from "@tuval/forms";


export const RelationFormView = (textData: any) => {
    const formController = useFormController();
    const { visibleWhen, required, multiline, name, description, relatedCollection } = textData;
    let canRender = false;

    const { workspaceId, databaseId, collectionId } = formController.GetFormData();

    const { documents, isLoading } = useListDocuments(workspaceId, databaseId, relatedCollection);

    if (visibleWhen != null && !is.array(visibleWhen)) {
        const field = visibleWhen.field;
        const fieldValue = visibleWhen.is;
        if (field != null) {
            const fieldFormValue = formController.GetValue(field);
            if (fieldValue == fieldFormValue) {
                canRender = true;
            }
        }
    } else if (visibleWhen != null && is.array(visibleWhen)) {
        const fails = []
        for (let i = 0; i < visibleWhen.length; i++) {
            const field = visibleWhen[i].field;
            const fieldValue = visibleWhen[i].is;
            if (field != null) {
                const fieldFormValue = formController.GetValue(field);
                if (fieldValue == fieldFormValue) {

                } else {
                    fails.push(0)
                }
            }
        }
        if (fails.length === 0) {
            canRender = true;
        }

    } else {
        canRender = true;
    }

    const rows = formController.GetValue(name) || [];

    if (canRender) {
        return (
            VStack({ alignment: cTopLeading, spacing: 10 })(

                ...ForEach(rows)((keyValue, index) =>
                    HStack({ alignment: cLeading, spacing: 10 })(
                        Select()
                            .renderer(SelectRenderer)
                            .value(keyValue)
                            .options(documents?.map(item => ({ value: item.$id, label: item.Name })))
                            .onChange((value) => {

                                rows[index] = value;
                                formController.SetValue(name, [...rows]);
                            })
                    )
                ),
                Button().label('Add')
                    .renderer(ButtonRenderer)
                    .onClick(() => {

                        formController.SetValue(name, [...rows, '']);
                    }

                    ).height().marginBottom('16px')
            )
        )


    }
}
