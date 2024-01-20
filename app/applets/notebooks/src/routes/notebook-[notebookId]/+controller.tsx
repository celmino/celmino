import { Query, useGetDocument, useListDocuments, useUpdateDocument } from "@realmocean/sdk";
import { DialogStack, Fragment, HStack, Icon, ReactView, Spinner, SvgIcon, Text, UIController, UINavigate, UIRouteOutlet, UIView, cLeading, cTopLeading, useParams } from "@tuval/forms";
import React from "react";
import { NoteListView } from "./view/NoteListView";

export class NotebookController extends UIController {


    public override LoadView(): UIView {


        const { workspaceId, notebookId, noteId } = useParams();
        

        const { documents: notes, isLoading: isNotesLoading } = useListDocuments(workspaceId, 'notebooks', 'nb_notes', [
            Query.equal('parent', notebookId)
        ]);
       

        const { updateDocument } = useUpdateDocument(workspaceId);

        return (
           
            (noteId == null && notes?.length > 0) ? UINavigate(`/app/workspace/${workspaceId}/applet/com.celmino.applet.notebooks/notebook-${notebookId}/note-${notes[0].$id}`) :
            HStack({ alignment: cTopLeading })(
                NoteListView(),
                UIRouteOutlet().width('100%').height('100%')
            )

        )
    }

}