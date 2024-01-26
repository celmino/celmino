import { UIController, UIView, useParams, Routes, Text, UIWidget, VStack, ReactView, DialogStack, Fragment } from "@tuval/forms";
import { ActionPanel } from "../../views/ActionPanel";
import { DocumentHeader } from "../../views/ViewHeader";
import React from "react";
import { useGetDocument, useUpdateDocument } from "@realmocean/sdk";
import { is } from "@tuval/core";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const docs = [
    { uri: "https://url-to-my-pdf.pdf" }, // Remote file
  ];

export class DocumentController extends UIController {


    public override LoadView(): UIView {
        const { workspaceId, appletId, documentId= this.props.documentId } = useParams();
        const { document } = useGetDocument({
            projectId: workspaceId,
            databaseId: appletId,
            collectionId: 'dm_documents',
            documentId: documentId
        })

        const { document: content, isLoading } = useGetDocument({
            projectId: workspaceId,
            databaseId: appletId,
            collectionId: 'dm_document_contents',
            documentId: documentId
        })

        const { updateDocument } = useUpdateDocument(workspaceId);

        return (
            isLoading ? Fragment() :
                ReactView(
                    <DialogStack>
                        {
                            VStack(
                                ActionPanel(),
                                DocumentHeader(document?.name, (e)=> {
                                    updateDocument({
                                        databaseId: appletId,
                                        collectionId: 'dm_documents',
                                        documentId: documentId,
                                        data: {
                                            name: e
                                        }
                                    })
                                }),
                                UIWidget('com.tuvalsoft.widget.editorjs')
                                    .config({
                                        defaultValue: is.nullOrEmpty(content?.content) ? null : JSON.parse(content.content),
                                        onChange: (data) => {
                                            console.log(data)
                                            updateDocument({
                                                databaseId: appletId,
                                                collectionId: 'dm_document_contents',
                                                documentId: documentId,
                                                data: {
                                                    content: JSON.stringify(data)
                                                }
                                            })
                                        }
                                    })
                            )
                                .background('white')
                                .render()
                        }
                    </DialogStack>
                )
                

        )
    }

}