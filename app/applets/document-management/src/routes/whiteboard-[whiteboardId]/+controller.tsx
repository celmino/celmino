import { UIController, UIView, useParams, Routes, Text, UIWidget, VStack, ReactView, DialogStack, Fragment } from "@tuval/forms";
import { ActionPanel } from "../../views/ActionPanel";
import { ViewHeader } from "../../views/ViewHeader";
import React from "react";
import { useGetDocument, useUpdateDocument } from "@realmocean/sdk";
import { is } from "@tuval/core";

export class WhiteboardController extends UIController {


    public override LoadView(): UIView {
        const { workspaceId, whiteboardId } = useParams();
        const { document } = useGetDocument({
            projectId: workspaceId,
            databaseId: 'work_management',
            collectionId: 'wm_whiteboards',
            documentId: whiteboardId
        })

        const { document: content, isLoading } = useGetDocument({
            projectId: workspaceId,
            databaseId: 'work_management',
            collectionId: 'wm_whiteboard_contents',
            documentId: whiteboardId
        })

        const { updateDocument } = useUpdateDocument(workspaceId);

        return (
            isLoading ? Fragment() :
                ReactView(
                    <DialogStack>
                        {
                            VStack(
                                ActionPanel(),
                                ViewHeader(document?.name, (e)=> {
                                    updateDocument({
                                        databaseId: 'work_management',
                                        collectionId: 'wm_whiteboards',
                                        documentId: whiteboardId,
                                        data: {
                                            name: e
                                        }
                                    })
                                }),
                                UIWidget('com.tuvalsoft.widget.whiteboard')
                                    .config({
                                        defaultValue: is.nullOrEmpty(content?.content) ? null : JSON.parse(content.content),
                                        onChange: (data) => {
                                            console.log(data)
                                            updateDocument({
                                                databaseId: 'work_management',
                                                collectionId: 'wm_whiteboard_contents',
                                                documentId: whiteboardId,
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