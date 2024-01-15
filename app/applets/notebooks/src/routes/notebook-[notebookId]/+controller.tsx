import { Query, useGetDocument, useListDocuments, useUpdateDocument } from "@realmocean/sdk";
import { DialogStack, Fragment, HStack, Icon, ReactView, SvgIcon, Text, UIController, UIView, cLeading, cTopLeading, useParams } from "@tuval/forms";
import React from "react";
import { NoteListView } from "./view/NoteListView";

export class NotebookController extends UIController {


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
            HStack({ alignment: cTopLeading })(
                NoteListView()
            )

        )
    }

}