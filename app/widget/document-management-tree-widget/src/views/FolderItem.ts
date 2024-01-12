import { Models, Query, useGetDocument, useListDocuments, } from "@realmocean/sdk";
import { ForEach, Fragment, UIViewBuilder, VStack, cTopLeading, useOptions, useState, Text, useLocalStorage, useEffect } from "@tuval/forms";
import { AppletItem } from "./AppletItem";
import { FolderName } from "./FolderName";
import { getDocumentId, getListId } from "../utils";
import { useLocalStorageState } from "./localStorageState";
import { DocumentItem } from "./DocumentItem";
import { WhiteboardItem } from "./WhiteboardItem";


export function FolderItem(parent: any, folder: any) {
    return (
        UIViewBuilder(() => {
            const { workspaceId } = useOptions();
            let documentId = getDocumentId();


          /*   const { document: list, isLoading: isListLoading } = useGetDocument({
                projectId: workspaceId,
                databaseId: 'document_management',
                collectionId: 'wm_documents',
                documentId: listId
            }, { enabled: listId != null }); */

            const { document: document, isLoading: isDocumentLoading } = useGetDocument({
                projectId: workspaceId,
                databaseId: 'document_management',
                collectionId: 'dm_documents',
                documentId: documentId
            }, { enabled: documentId != null });


            return (
                UIViewBuilder(() => {
                    const expandedFromUrl =  document?.path.indexOf(folder.$id) > -1;
                    useEffect(() => {
                        if (expandedFromUrl) {
                            setExpanded(true);
                        }
                    }, []);

                    const [expanded, setExpanded] = useLocalStorageState(folder.$id,  document?.path.indexOf(folder.$id) > -1);

                    //const [a, setA] = useState(true)
                    const { documents: folders, isLoading } = useListDocuments(workspaceId, 'document_management', 'dm_folders', [
                        Query.equal('parent', folder.$id)
                    ]);

                    const { documents: documents, isLoading: isDocumentsLoading } = useListDocuments(workspaceId, 'document_management', 'dm_documents', [
                        Query.equal('parent', folder.$id)
                    ]);

                   

                    return (
                        VStack({ alignment: cTopLeading })(
                            FolderName(parent, folder, expanded, ((expanded) && (isDocumentsLoading)), () => {
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
                                            )
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

