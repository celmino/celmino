import { Query, useGetDocument, useListDocuments } from "@realmocean/sdk";
import { ForEach, Fragment, UIViewBuilder, VStack, cTopLeading, useEffect, useOptions } from "@tuval/forms";
import { getDocumentId, getNoteId, getNotebookId } from "../utils";
import { NotebookName } from "./NotebookName";
import { useLocalStorageState } from "./localStorageState";
import { UIDocument } from "@realmocean/ui";



export const NotebookItem = (notebook: any) => UIViewBuilder(() => {
    const { workspaceId, applet_id } = useOptions();

    let notebookInLinkId = getNotebookId();



    return (
        VStack({ alignment: cTopLeading })(
            NotebookName(notebook, false, () => {
                // setExpanded(!expanded);
            }),


        )
            .height()
    )



})