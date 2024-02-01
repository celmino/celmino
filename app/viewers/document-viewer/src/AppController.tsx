import { UIController, UIView, useParams, Routes, Text, UIWidget, VStack, ReactView, DialogStack, Fragment, cTopLeading } from "@tuval/forms";

import React from "react";
import { useGetDocument, useUpdateDocument } from "@realmocean/sdk";
import { is } from "@tuval/core";
import { ActionPanel } from "./views/ActionPanel";
import { DocumentHeader } from "./views/ViewHeader";
import { SimpleImage } from "./tools/SimplePlugin";



export class MyTestController extends UIController {


    public override LoadView(): UIView {

        const { workspaceId, appletId, documentId = this.props.documentId } = this.props.config;
        const { document, isLoading: isDocumentLoading } = useGetDocument({
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
            (isDocumentLoading || isLoading) ? Fragment() :

                VStack({ alignment: cTopLeading })(
                    ActionPanel(),
                    DocumentHeader(document?.name, (e) => {
                        updateDocument({
                            databaseId: appletId,
                            collectionId: 'dm_documents',
                            documentId: documentId,
                            data: {
                                name: e
                            }
                        })
                    }),
                    UIWidget(document?.type)
                        .config({
                            defaultValue: is.nullOrEmpty(content?.content) ? null : JSON.parse(content.content),
                            tools: {
                                image: SimpleImage
                            },
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
        )

    }

}