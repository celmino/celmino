import { VStack, UIViewBuilder, useDialogStack, cTopLeading, ForEach, HStack, cLeading, ReactView, Text, useOptions, useParams } from "@tuval/forms";
import { ActionPanel } from "../../../views/ActionPanel";
import { ProxyController } from "../ProxyController";
import { DocumentName } from "./DocumentName";
import { FolderHeader } from "./FolderHeader";
import { FolderName } from "./FolderName";
import { Query, useGetDocument, useListDocuments, useUpdateDocument } from "@realmocean/sdk";
import React from "react";
import { TestController } from "../TestController";
import { moment } from "@tuval/core";


export const FolderView = (workspaceId: string, folderId: string) => UIViewBuilder(() => {

    const { appletId } = useParams();
    const { document } = useGetDocument({
        projectId: workspaceId,
        databaseId: appletId,
        collectionId: 'dm_folders',
        documentId: folderId
    })

    const { documents: folders, isLoading: isFoldersLoading } = useListDocuments(workspaceId, appletId, 'dm_folders', [
        Query.equal('parent', folderId)
    ]);
    const { documents: documents, isLoading } = useListDocuments(workspaceId, appletId, 'dm_documents', [
        Query.equal('parent', folderId)
    ]);


    const { updateDocument } = useUpdateDocument(workspaceId);

    return (
        VStack(
            ActionPanel(),
            FolderHeader(document?.name, (e) => {
                updateDocument({
                    databaseId: appletId,
                    collectionId: 'dm_documents',
                    documentId: folderId,
                    data: {
                        name: e
                    }
                })
            }),
            UIViewBuilder(() => {
                const { openDialog } = useDialogStack();
                return (
                    VStack({ alignment: cTopLeading })(
                        ...ForEach(folders)((folder: any) =>
                            HStack({ alignment: cLeading })(
                                HStack(
                                    FolderName(folder)
                                ).width('50%').minWidth(300),
                                HStack({ alignment: cLeading })(
                                    Text(moment(folder.$createdAt).format('DD.MM.YYYY HH:mm:ss'))
                                        .foregroundColor('rgb(135, 144, 158)')
                                ),

                            ).height(40)
                                .cursor('pointer')
                                .background({ hover: 'rgb(247, 248, 249)' })
                                .borderBottom('solid 1px rgb(240, 241, 243)')
                                .onClick(() => {
                                    openDialog({
                                        title: folder.name,
                                        view: UIViewBuilder(() => {
                                            const FolderProxyController = class extends TestController { };
                                            return (
                                                ReactView(
                                                    <FolderProxyController view={FolderView(workspaceId, folder.$id)} > </FolderProxyController>
                                                )
                                            )
                                        })
                                    })
                                })
                        ),
                        ...ForEach(documents)((document: any) =>
                            HStack({ alignment: cLeading })(
                                HStack(
                                    DocumentName(document)
                                ).width('50%').minWidth(300),
                                HStack({ alignment: cLeading })(
                                    Text(moment(document.$createdAt).format('DD.MM.YYYY HH:mm:ss'))
                                        .foregroundColor('rgb(135, 144, 158)')
                                ),
                            ).height(40)
                                .cursor('pointer')
                                .background({ hover: 'rgb(247, 248, 249)' })
                                .borderBottom('solid 1px rgb(240, 241, 243)')
                                .onClick(() => {
                                    openDialog({
                                        title: document.name,
                                        view: UIViewBuilder(() => {
                                            const DocumentProxyController = class extends ProxyController { };
                                            return (
                                                ReactView(
                                                    <DocumentProxyController workspaceId={workspaceId} documentId={document.$id} > </DocumentProxyController>
                                                )
                                            )
                                        })
                                    })
                                })
                        )).padding()
                )
            })
        )

            .background('white')
    )
})