import { Query, useGetDocument, useListDocuments } from "@realmocean/sdk";
import { ForEach, Fragment, UIViewBuilder, VStack, cTopLeading, useEffect, useOptions } from "@tuval/forms";
import { getNoteId } from "../utils";
import { FolderName } from "./FolderName";
import { useLocalStorageState } from "./localStorageState";


export function FolderItem(parent: any, folder: any) {
    return (
        UIViewBuilder(() => {
            const { workspaceId } = useOptions();
            let documentId = getNoteId();


          /*   const { document: list, isLoading: isListLoading } = useGetDocument({
                projectId: workspaceId,
                databaseId: 'document_management',
                collectionId: 'wm_documents',
                documentId: listId
            }, { enabled: listId != null }); */

            const { document: document, isLoading: isDocumentLoading } = useGetDocument({
                projectId: workspaceId,
                databaseId: 'notebooks',
                collectionId: 'nb_notes',
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

          

                    return (
                        VStack({ alignment: cTopLeading })(
                            FolderName(parent, folder, expanded, false, () => {
                                setExpanded(!expanded);
                                //  setA(!a);
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

