import { useGetDocument, useUpdateDocument } from "@realmocean/sdk";
import { is } from "@tuval/core";
import { DialogStack, Fragment, ReactView, UIController, UIView, UIWidget, VStack, useParams } from "@tuval/forms";
import React from "react";
import { ActionPanel } from "../../../views/ActionPanel";
import { DocumentHeader } from "../../../views/ViewHeader";

export class NoteController extends UIController {


    public override LoadView(): UIView {


        const { workspaceId, noteId } = useParams();
        const { document, isLoading } = useGetDocument({
            projectId: workspaceId,
            databaseId: 'notebooks',
            collectionId: 'nb_notes',
            documentId: noteId
        })

        const { document: content, isLoading: isContentLoading } = useGetDocument({
            projectId: workspaceId,
            databaseId: 'notebooks',
            collectionId: 'nb_note_contents',
            documentId: noteId
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
                                        databaseId: 'notebooks',
                                        collectionId: 'nb_notes',
                                        documentId: noteId,
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
                                                databaseId: 'notebooks',
                                                collectionId: 'nb_note_contents',
                                                documentId: noteId,
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