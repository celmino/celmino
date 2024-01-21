import { Models, Query, useGetDocument, useListDocuments, } from "@realmocean/sdk";
import { ForEach, Fragment, UIViewBuilder, VStack, cTopLeading, useOptions, useState, Text, useLocalStorage, useEffect } from "@tuval/forms";
import { AppletItem } from "./AppletItem";
import { FolderName } from "./FolderName";
import { getDocumentId, getListId } from "../utils";
import { useLocalStorageState } from "./localStorageState";
import { DocumentItem } from "./DocumentItem";
import { WhiteboardItem } from "./WhiteboardItem";


export function FolderItem( folder: any) {

    return (
        UIViewBuilder(() => {
            const { workspaceId, appletId } = useOptions();
            let listId = getListId();
            let documentId = getDocumentId();


            const { document: list, isLoading: isListLoading } = useGetDocument({
                projectId: workspaceId,
                databaseId: appletId,
                collectionId: 'wm_lists',
                documentId: listId
            }, { enabled: listId != null });

            const { document: document, isLoading: isDocumentLoading } = useGetDocument({
                projectId: workspaceId,
                databaseId: appletId,
                collectionId: 'wm_documents',
                documentId: documentId
            }, { enabled: documentId != null });


            return (
                UIViewBuilder(() => {
                    const expandedFromUrl = list?.path.indexOf(folder.$id) > -1 || document?.path.indexOf(folder.$id) > -1;
                    useEffect(() => {
                        if (expandedFromUrl) {
                            setExpanded(true);
                        }
                    }, []);

                    const [expanded, setExpanded] = useLocalStorageState(folder.$id, list?.path.indexOf(folder.$id) > -1 || document?.path.indexOf(folder.$id) > -1);

                    const { documents: items, isLoading } = useListDocuments(workspaceId, appletId, 'wm_tree', [
                        Query.equal('parent', folder.$id)
                    ]);

                    return (
                        VStack({ alignment: cTopLeading })(
                            FolderName(folder, expanded, isLoading, () => {
                                setExpanded(!expanded);
                                //  setA(!a);
                            }),

                            (!expanded) ? Fragment() :
                                UIViewBuilder(() => {
                                    return (
                                        VStack(

                                            // Items
                                            ...ForEach(isLoading ? [] : items)((item: any) =>
                                                item.type === 'folder' ?
                                                    FolderItem( item) :
                                                    item.type === 'list' ?
                                                        AppletItem(item.$id) :
                                                        item.type === 'document' ?
                                                            DocumentItem(item.$id) : Fragment()
                                            ),
                                            /*  // Documents
                                             ...ForEach(documents)((document: any) =>
                                                 DocumentItem(document)
                                             ),
                                             // Whiteboards
                                             ...ForEach(whiteboards)((whiteboard: any) =>
                                                 WhiteboardItem(whiteboard)
                                             ),
                                             // Applets
                                             ...ForEach(applets)((applet: any) =>
                                                 AppletItem(applet)
                                             ), */


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

