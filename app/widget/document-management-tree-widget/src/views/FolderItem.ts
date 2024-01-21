import { Models, Query, useGetDocument, useListDocuments, } from "@realmocean/sdk";
import { ForEach, Fragment, UIViewBuilder, VStack, cTopLeading, useOptions, useState, Text, useLocalStorage, useEffect } from "@tuval/forms";
import { AppletItem } from "./AppletItem";
import { FolderName } from "./FolderName";
import { getDocumentId, getListId } from "../utils";
import { useLocalStorageState } from "./localStorageState";
import { DocumentItem } from "./DocumentItem";
import { WhiteboardItem } from "./WhiteboardItem";


export function FolderItem(folderId: string) {
    return (
        UIViewBuilder(() => {
            const { workspaceId, appletId } = useOptions();
            let documentId = getDocumentId();




            const { document: document, isLoading: isDocumentLoading } = useGetDocument({
                projectId: workspaceId,
                databaseId: appletId,
                collectionId: 'dm_documents',
                documentId: documentId
            }, { enabled: documentId != null });


            return (
                UIViewBuilder(() => {
                    const expandedFromUrl = document?.path.indexOf(folderId) > -1;
                    useEffect(() => {
                        if (expandedFromUrl) {
                            setExpanded(true);
                        }
                    }, []);

                    const [expanded, setExpanded] = useLocalStorageState(folderId, document?.path.indexOf(folderId) > -1);

                    const { documents: items, isLoading } = useListDocuments(workspaceId, appletId, 'dm_tree', [
                        Query.equal('parent', folderId)
                    ]);



                    return (
                        VStack({ alignment: cTopLeading })(
                            FolderName(folderId, expanded, ((expanded) && (isLoading)), () => {
                                setExpanded(!expanded);
                                //  setA(!a);
                            }),

                            (!expanded) ? Fragment() :
                                UIViewBuilder(() => {
                                    return (
                                        VStack(

                                            // Folders
                                            ...ForEach(isLoading ? [] : items)((item: any) =>
                                                item.type === 'folder' ?
                                                    FolderItem(item) :
                                                    item.type === 'document' ?
                                                        DocumentItem(item.$id) : Fragment()
                                            ),

                                        ).paddingLeft('20px')
                                    )

                                    /*  return (
                                         FolderContent(team, spaceItem, folder, applets)
                                     ) */
                                })
                        )
                    )
                }
                    // .allWidth('calc(100% - 20px)')
                )
            )
        }

        )
    )
}

