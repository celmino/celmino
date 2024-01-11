import { UIController, UIView, useParams, Routes, Text, UIWidget, VStack, ReactView, DialogStack, Fragment } from "@tuval/forms";
import { ActionPanel } from "../../views/ActionPanel";
import { ViewHeader } from "../../views/ViewHeader";
import React from "react";
import { useGetDocument, useUpdateDocument } from "@realmocean/sdk";

export class DocumentController extends UIController {


    public override LoadView(): UIView {
        const { workspaceId, documentId } = useParams();
        const {document} = useGetDocument({
            projectId: workspaceId,
            databaseId: 'work_management',
            collectionId: 'wm_documents',
            documentId: documentId
        })

        const {document: content, isLoading} = useGetDocument({
            projectId: workspaceId,
            databaseId: 'work_management',
            collectionId: 'wm_document_contents',
            documentId: documentId
        })

        const {updateDocument} = useUpdateDocument(workspaceId)

        console.log(content)

        return (
            isLoading ? Fragment() :
            ReactView(
                <DialogStack>
                    {
                        VStack(
                            ActionPanel(),
                            ViewHeader(document?.name),
                            UIWidget('com.tuvalsoft.widget.editorjs')
                                .config({
                                    defaultValue :JSON.parse(content.content),
                                    onChange : (data)=> {
                                        console.log(data)
                                        updateDocument({
                                            databaseId: 'work_management',
                                            collectionId: 'wm_document_contents',
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