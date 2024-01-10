import { ForEach, Fragment, Text, UIViewBuilder, VStack, cTopLeading, useEffect, useOptions, useState } from "@tuval/forms";
import { AppletName } from "./AppletName";
import { DocumentName } from "./DocumentName";
import { getDocumentId } from "../utils";
import { Query, useGetDocument, useListDocuments } from "@realmocean/sdk";
import { useLocalStorageState } from "./localStorageState";
import { UIDocument } from "@realmocean/ui";


export const DocumentItem = (document: any) => UIViewBuilder(() => {
    const { workspaceId, applet_id } = useOptions();



    let documentInLinkId = getDocumentId();


    return (
        UIDocument(({ document: documentInLink }) => {

            const expandedFromUrl = documentInLink?.path.indexOf(document.$id) > -1;
            useEffect(() => {
                if (expandedFromUrl) {
                    setExpanded(true);
                }
            }, []);

            const [expanded, setExpanded] = useLocalStorageState(document.$id, documentInLink?.path.indexOf(document.$id) > -1);


            return (
                VStack({ alignment: cTopLeading })(
                    DocumentName(document, () => {
                        setExpanded(!expanded);
                    }),
                    !expanded ? Fragment() :
                        UIViewBuilder(() => {

                            const { documents: documents, isLoading: isDocumentsLoading } = useListDocuments(workspaceId, 'work_management', 'wm_documents', [
                                Query.equal('parent', document.$id)
                            ]);
                            return (
                                isDocumentsLoading ? Fragment() :
                                    VStack(
                                        // Applets
                                        ...ForEach(documents)((document: any) =>
                                            DocumentItem(document)
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
            .databaseId('work_management')
            .collectionId('wm_documents')
            .documentId(documentInLinkId)
            .enabled(documentInLinkId != null)
    )

})