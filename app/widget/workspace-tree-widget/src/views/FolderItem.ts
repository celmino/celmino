import { Models, Query, useGetDocument, useListDocuments, } from "@realmocean/sdk";
import { ForEach, Fragment, UIViewBuilder, VStack, cTopLeading, useOptions, useState, Text, useLocalStorage, useEffect } from "@tuval/forms";
import { AppletItem } from "./AppletItem";
import { FolderName } from "./FolderName";
import { getDocumentId, getListId } from "../utils";
import { useLocalStorageState } from "./localStorageState";
import { DocumentItem } from "./DocumentItem";


export function FolderItem(parent: any, folder: any) {
    return (
        UIViewBuilder(() => {
            const { workspaceId } = useOptions();
            let listId = getListId();
            let documentId = getDocumentId();


            const { document: list, isLoading: isListLoading } = useGetDocument({
                projectId: workspaceId,
                databaseId: 'work_management',
                collectionId: 'wm_lists',
                documentId: listId
            }, { enabled: listId != null });

            const { document: document, isLoading: isDocumentLoading } = useGetDocument({
                projectId: workspaceId,
                databaseId: 'work_management',
                collectionId: 'wm_documents',
                documentId: documentId
            }, { enabled: documentId != null });


            return (
                UIViewBuilder(() => {
                    const expandedFromUrl = list?.path.indexOf(folder.$id) > -1 ||  document?.path.indexOf(folder.$id) > -1 ;
                    useEffect(() => {
                        if (expandedFromUrl) {
                            setExpanded(true);
                        }
                    }, []);

                    const [expanded, setExpanded] = useLocalStorageState(folder.$id, list?.path.indexOf(folder.$id) > -1 ||  document?.path.indexOf(folder.$id) > -1 );

                    //const [a, setA] = useState(true)
                    const { documents: folders, isLoading } = useListDocuments(workspaceId, 'work_management', 'wm_folders', [
                        Query.equal('parent', folder.$id)
                    ]);

                    const { documents: applets, isLoading: isAppletsLoading } = useListDocuments(workspaceId, 'work_management', 'wm_lists', [
                        Query.equal('parent', folder.$id)
                    ]);

                    const { documents: documents, isLoading: isDocumentsLoading } = useListDocuments(workspaceId, 'work_management', 'wm_documents', [
                        Query.equal('parent', folder.$id)
                    ]);

                    return (
                        VStack({ alignment: cTopLeading })(
                            FolderName(parent, folder, expanded, ((expanded) && (isAppletsLoading || isDocumentsLoading)), () => {
                                setExpanded(!expanded);
                                //  setA(!a);
                            }),

                            (!expanded) ? Fragment() :
                                UIViewBuilder(() => {
                                    return (
                                        VStack(

                                            // Folders
                                            ...ForEach(isLoading ? [] : folders)((childFolder: any) =>
                                                FolderItem(parent, childFolder)
                                            ),
                                            // Documents
                                            ...ForEach(documents)((document: any) =>
                                                DocumentItem(document)
                                            ),
                                            // Applets
                                            ...ForEach(applets)((applet: any) =>
                                                AppletItem(applet)
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

