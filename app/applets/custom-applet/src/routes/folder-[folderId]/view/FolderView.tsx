import { VStack, UIViewBuilder, useDialogStack, cTopLeading, ForEach, HStack, cLeading, ReactView, Text, useOptions, useParams, Spinner, Fragment, Spacer } from "@tuval/forms";
import { ActionPanel } from "../../../views/ActionPanel";
import { ProxyController } from "../ProxyController";
import { DocumentName } from "./DocumentName";
import { FolderHeader } from "./FolderHeader";
import { FolderName } from "./FolderName";
import { Query, useGetDocument, useListDocuments, useUpdateDocument } from "@realmocean/sdk";
import React from "react";
import { TestController } from "../TestController";
import { moment } from "@tuval/core";
import { Table, Text as VibeText } from "@realmocean/vibe";


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
    const { documents: documents, isLoading: isDocumentsLoading } = useListDocuments(workspaceId, appletId, 'dm_documents', [
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
                    HStack({ alignment: cTopLeading })(
                        Table()
                            .height()
                            .columns([
                                {
                                    id: 'name',
                                    loadingStateType: 'medium-text',
                                    title: 'Name',
                                    width: '50%',
                                    view: (row) => (
                                        HStack(
                                            row['type'] === 'folder' ?
                                                FolderName(row) :
                                                row['type'] === 'document' ?
                                                    DocumentName(row) : Fragment()
                                        )
                                            .onClick(() => {
                                                openDialog({
                                                    title: row.name,
                                                    view: UIViewBuilder(() => {
                                                        const DocumentProxyController = class extends ProxyController { };
                                                        return (
                                                            ReactView(
                                                                <DocumentProxyController workspaceId={workspaceId} documentId={row.$id} > </DocumentProxyController>
                                                            )
                                                        )
                                                    })
                                                })
                                            })
                                    )
                                },

                                {
                                    id: '$createdAt',
                                    loadingStateType: 'medium-text',
                                    title: 'Created',
                                    width: '50%',
                                    format: (value) => moment(value).format('DD.MM.YYYY HH:mm:ss')
                                }


                            ])
                            .isLoading(isFoldersLoading || isDocumentsLoading)
                            .rows([].concat(folders?.map(folder => ({ type: 'folder', ...folder }))).concat(documents?.map(document => ({ type: 'document', ...document }))))
                    )
                        .padding()
                )
            }),
            Spacer()
        )
            .background('white')
    )
})