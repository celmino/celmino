import { Models, Query, useGetDocument, useListDocuments } from "@realmocean/sdk";
import { UIViewBuilder, VStack, cTopLeading, Text, useState, ForEach, Fragment, useOptions, useEffect } from "@tuval/forms";
import { WorkspaceName } from "./WorkspaceName";
import { AppletItem } from "./AppletItem";
import { FolderItem } from "./FolderItem";
import { getDocumentId, getListId } from "../utils";
import { useLocalStorageState } from "./localStorageState";


export function WorkspaceItem(space: any) {
    return (
        UIViewBuilder(() => {
            const { workspaceId, appletId } = useOptions();
            let listId = getListId();
            let documentId = getDocumentId();




            const { document: document, isLoading: isDocumentLoading } = useGetDocument({
                projectId: workspaceId,
                databaseId: appletId,
                collectionId: 'wm_documents',
                documentId: documentId
            }, { enabled: documentId != null });
            return (

                UIViewBuilder(() => {

                    const expandedFromUrl = document?.path.indexOf(space.$id) > -1;
                    useEffect(() => {
                        if (expandedFromUrl) {
                            setExpanded(true);
                        }
                    }, []);
                    const [expanded, setExpanded] = useLocalStorageState(space.$id, document?.path.indexOf(space.$id) > -1);


                    const { documents: folders, isLoading } = useListDocuments(workspaceId, appletId, 'dm_folders', [
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
                                        ...ForEach(folders)((folder) =>
                                            FolderItem(folder.$id)
                                        ),
                                        // Applets
                                        /*   ...ForEach(applets)((applet: any) =>
                                              AppletItem(space, applet)
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