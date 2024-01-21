import { Models, Query, useGetDocument, useListDocuments } from "@realmocean/sdk";
import { UIViewBuilder, VStack, cTopLeading, Text, useState, ForEach, Fragment, useOptions, useEffect } from "@tuval/forms";
import { WorkspaceName } from "./WorkspaceName";
import { AppletItem } from "./AppletItem";
import { FolderItem } from "./FolderItem";
import { getDocumentId, getListId } from "../utils";
import { useLocalStorageState } from "./localStorageState";
import { DocumentItem } from "./DocumentItem";


export function WorkspaceItem(space: any) {
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

                    const expandedFromUrl = list?.path.indexOf(space.$id) > -1 || document?.path.indexOf(space.$id) > -1;
                    useEffect(() => {
                        if (expandedFromUrl) {
                            setExpanded(true);
                        }
                    }, []);
                    const [expanded, setExpanded] = useLocalStorageState(space.$id, list?.path.indexOf(space.$id) > -1 || document?.path.indexOf(space.$id) > -1);


                    const { documents: items, isLoading } = useListDocuments(workspaceId, appletId, 'wm_tree', [
                        Query.equal('parent', space.$id)
                    ]);

                   

                    return (
                        VStack({ alignment: cTopLeading })(
                            WorkspaceName(space, expanded, (isLoading && expanded), () => {
                                setExpanded(!expanded);
                            }),
                            !expanded ? Fragment() :
                                (isLoading) ? Fragment() :
                                    VStack(
                                        // Text(JSON.stringify(folders)),
                                        // Folders
                                        ...ForEach(items)((item) =>
                                            item.type === 'folder' ?
                                                FolderItem( item) :
                                                item.type === 'list' ?
                                                    AppletItem(item.$id) :
                                                    item.type === 'document' ?
                                                        DocumentItem(item.$id) : Fragment()
                                        ),
                                        // Lists
                                        /*  ...ForEach(lists)((list: any) =>
                                             AppletItem(list)
                                         ) */
                                    ).paddingLeft('20px')
                        )
                            .height()
                            .allWidth('calc(100%)')
                    )

                })

            )
        })
    )
}