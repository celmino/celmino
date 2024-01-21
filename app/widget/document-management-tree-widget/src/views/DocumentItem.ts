import { ForEach, Fragment, Text, UIViewBuilder, VStack, cTopLeading, useEffect, useOptions, useState } from "@tuval/forms";
import { AppletName } from "./AppletName";
import { DocumentName } from "./DocumentName";
import { getDocumentId } from "../utils";
import { Query, useGetDocument, useListDocuments } from "@realmocean/sdk";
import { useLocalStorageState } from "./localStorageState";
import { UIDocument } from "@realmocean/ui";


export const DocumentItem = (documentId: string) => UIViewBuilder(() => {
    const { workspaceId, appletId } = useOptions();

    let documentInLinkId = getDocumentId();

    return (
        UIDocument(({ document: documentInLink, isLoading }) => {

            const expandedFromUrl = documentInLink?.path.indexOf(documentId) > -1;
            useEffect(() => {
                if (expandedFromUrl) {
                    setExpanded(true);
                }
            }, []);

            const [expanded, setExpanded] = useLocalStorageState(documentId, documentInLink?.path.indexOf(documentId) > -1);


            return (
                VStack({ alignment: cTopLeading })(
                    DocumentName(documentId, expanded, () => {
                        setExpanded(!expanded);
                    }),
                    !expanded ? Fragment() :
                        UIViewBuilder(() => {

                            const { documents: items, isLoading } = useListDocuments(workspaceId, appletId, 'dm_tree', [
                                Query.equal('parent', documentId)
                            ]);
                            return (
                                isLoading ? Fragment() :
                                    VStack(
                                        // Applets
                                        ...ForEach(items)((item: any) =>
                                            item.type === 'document' ?
                                                DocumentItem(item.$id) : Fragment()
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