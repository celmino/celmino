import { UIController, UIView, useParams, Routes, Text, UIWidget, VStack, ReactView, DialogStack, Fragment, HStack, ForEach, cTopLeading, cLeading, useDialogStack, UIViewBuilder } from "@tuval/forms";
import { ActionPanel } from "../../views/ActionPanel";
import { DocumentHeader } from "../../views/ViewHeader";
import React from "react";
import { Query, useGetDocument, useListDocuments, useUpdateDocument } from "@realmocean/sdk";
import { is } from "@tuval/core";
import { ProxyController } from "./ProxyController";
import { FolderName } from "./view/FolderName";
import { FolderHeader } from "./view/FolderHeader";
import { DocumentName } from "./view/DocumentName";
import { FolderView } from "./view/FolderView";

export class FolderController extends UIController {


    public override LoadView(): UIView {


        const { workspaceId, folderId } = useParams();
        const { document } = useGetDocument({
            projectId: workspaceId,
            databaseId: 'document_management',
            collectionId: 'dm_folders',
            documentId: folderId
        })

        const { documents: folders, isLoading: isFoldersLoading } = useListDocuments(workspaceId, 'document_management', 'dm_folders', [
            Query.equal('parent', folderId)
        ]);
        const { documents: documents, isLoading } = useListDocuments(workspaceId, 'document_management', 'dm_documents', [
            Query.equal('parent', folderId)
        ]);


        const { updateDocument } = useUpdateDocument(workspaceId);

        return (
            (isFoldersLoading || isLoading) ? Fragment() :
                ReactView(
                    <DialogStack>
                        {
                           FolderView(workspaceId, folderId)
                                .render()
                        }
                    </DialogStack>
                )

        )
    }

}