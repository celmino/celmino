import { ForEach, Fragment, Text, UIViewBuilder, VStack, cTopLeading, useEffect, useOptions, useState } from "@tuval/forms";
import { AppletName } from "./AppletName";
import { DocumentName } from "./DocumentName";
import { getDocumentId } from "../utils";
import { Query, useGetDocument, useListDocuments } from "@realmocean/sdk";
import { useLocalStorageState } from "./localStorageState";
import { UIDocument } from "@realmocean/ui";
import { WhiteboardName } from "./WhiteboardName";


export const WhiteboardItem = (whiteboard: any) => UIViewBuilder(() => {
    const { workspaceId, appletId } = useOptions();

    let documentInLinkId = getDocumentId();

    return (
        UIDocument(({ document: documentInLink, isLoading }) => {

            const expandedFromUrl = documentInLink?.path.indexOf(whiteboard.$id) > -1;
            useEffect(() => {
                if (expandedFromUrl) {
                    setExpanded(true);
                }
            }, []);

            const [expanded, setExpanded] = useLocalStorageState(whiteboard.$id, documentInLink?.path.indexOf(whiteboard.$id) > -1);


            return (
                VStack({ alignment: cTopLeading })(
                    WhiteboardName(whiteboard, expanded, () => {
                        setExpanded(!expanded);
                    }),
                    !expanded ? Fragment() :
                        UIViewBuilder(() => {

                            const { documents: documents, isLoading: isDocumentsLoading } = useListDocuments(workspaceId, appletId, 'wm_documents', [
                                Query.equal('parent', whiteboard.$id)
                            ]);
                            return (
                                isDocumentsLoading ? Fragment() :
                                    VStack(
                                        // Applets
                                        ...ForEach(documents)((document: any) =>
                                            WhiteboardItem(document)
                                        ),
                                        // Folders
                                    ).paddingLeft('20px')
                            )
                        })

                )
                    .height()
            )
        })
            .realmId(workspaceId)
            .databaseId(appletId)
            .collectionId('wm_documents')
            .documentId(documentInLinkId)
            .enabled(documentInLinkId != null)
    )

})