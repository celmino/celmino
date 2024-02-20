import { UIController, UIView, useParams, Routes, Text, UIWidget, VStack, ReactView, DialogStack, Fragment, cTopLeading, UIViewBuilder, HStack, Button, useDialogStack, TextField, useState } from "@tuval/forms";
import { ActionPanel } from "../../views/ActionPanel";
import { DocumentHeader } from "../../views/ViewHeader";
import React from "react";
import { useGetDocument, useUpdateDocument } from "@realmocean/sdk";
import { is } from "@tuval/core";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { SimpleImage } from "../../tools/SimplePlugin";
import InlineImage from 'editorjs-inline-image';

const docs = [
    { uri: "https://url-to-my-pdf.pdf" }, // Remote file
];

export class DocumentController extends UIController {


    public override LoadView(): UIView {
        const { workspaceId, appletId, documentId = this.props.documentId } = useParams();
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
                ReactView(
                    <DialogStack>
                        {
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
                              
                                UIViewBuilder(() => {
                                    const { openDialog } = useDialogStack();
                                    return (
                                       /*  VStack({ alignment: cTopLeading })(
                                            UIWidget('com.celmino.widget.tldraw')
                                                .config({


                                                })
                                        ) */
                                          UIWidget(document?.type)
                                             .config({
                                                 defaultValue: is.nullOrEmpty(content?.content) ? null : JSON.parse(content.content),
                                                 clamp:true,
                                                 workspaceId: workspaceId,
                                                 appletId: appletId,
                                                 tools: {
                                                     image: {
                                                         class: InlineImage,
                                                         inlineToolbar: true,
                                                         config: {
                                                             embed: {
                                                                 display: true,
                                                             },
                                                             unsplash: {
                                                                 appName: 'your_app_name',
                                                                 clientId: 'your_client_id'
                                                             }
                                                         }
                                                     },
                                                     link: {
                                                         class: SimpleImage,
                                                         inlineToolbar: true,
                                                         shortcut: 'CMD+SHIFT+W',
                                                         config: {
                                                             workspaceId: workspaceId,
                                                             appletId: appletId,
                                                             openDialog
 
                                                         },
                                                     }
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